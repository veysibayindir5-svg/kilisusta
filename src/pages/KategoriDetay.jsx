import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import UstaCard from '../components/UstaCard';
import AdSlot from '../components/AdSlot';
import kategorilerData from '../data/kategoriler.json';
import mahallelerData from '../data/mahalleler.json';
import ustalarData from '../data/ustalar.json';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function KategoriDetay() {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const [selectedMahalle, setSelectedMahalle] = useState(searchParams.get('mahalle') || '');

    const kategori = kategorilerData.kategoriler.find(k => k.slug === slug);

    const filteredUstalar = useMemo(() => {
        let result = ustalarData.ustalar.filter(u => u.kategoriler.includes(kategori?.id));
        if (selectedMahalle) {
            result = result.filter(u => u.mahalle === selectedMahalle);
        }
        return result;
    }, [kategori, selectedMahalle]);

    if (!kategori) {
        return (
            <div className="container">
                <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <h3>Kategori Bulunamadı</h3>
                    <p>Aradığınız kategori mevcut değil.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Kilis Merkez {kategori.isim} Ustaları | Hemen Ara – Konum Aç</title>
                <meta name="description" content={kategori.aciklama} />
                <link rel="canonical" href={`https://kilisusta.com.tr/kategori/${slug}`} />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <span style={{ fontSize: '3rem' }}>{kategori.ikon}</span>
                    <h1>{kategori.isim}</h1>
                    <p>{kategori.aciklama}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="filter-bar">
                        <select
                            className="input select"
                            value={selectedMahalle}
                            onChange={(e) => setSelectedMahalle(e.target.value)}
                        >
                            <option value="">Tüm Mahalleler</option>
                            {mahallelerData.mahalleler.map((mah) => (
                                <option key={mah.id} value={mah.id}>
                                    {mah.isim}
                                </option>
                            ))}
                        </select>
                    </div>

                    {filteredUstalar.length > 0 ? (
                        <motion.div
                            className="grid grid-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <AnimatePresence>
                                {filteredUstalar.map((usta, index) => (
                                    <>
                                        <motion.div
                                            key={usta.id}
                                            variants={itemVariants}
                                            layout
                                        >
                                            <UstaCard usta={usta} />
                                        </motion.div>
                                        {(index + 1) % 6 === 0 && (
                                            <motion.div
                                                key={`ad-${index}`}
                                                style={{ gridColumn: '1 / -1' }}
                                                variants={itemVariants}
                                            >
                                                <AdSlot slot={`liste-${index}`} height="90px" />
                                            </motion.div>
                                        )}
                                    </>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">😔</div>
                            <h3>Usta Bulunamadı</h3>
                            <p>Bu kriterlere uygun usta henüz eklenmemiş.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
