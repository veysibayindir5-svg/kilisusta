import { useParams } from 'react-router-dom';
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

export default function MahalleDetay() {
    const { slug } = useParams();
    const [selectedKategori, setSelectedKategori] = useState('');

    const mahalle = mahallelerData.mahalleler.find(m => m.slug === slug);

    const filteredUstalar = useMemo(() => {
        let result = ustalarData.ustalar.filter(u => u.mahalle === mahalle?.id);
        if (selectedKategori) {
            result = result.filter(u => u.kategoriler.includes(selectedKategori));
        }
        return result;
    }, [mahalle, selectedKategori]);

    if (!mahalle) {
        return (
            <div className="container">
                <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <h3>Mahalle Bulunamadı</h3>
                    <p>Aradığınız mahalle mevcut değil.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Kilis Merkez {mahalle.isim} Ustaları | En Yakın Ustalar</title>
                <meta name="description" content={`Kilis Merkez ${mahalle.isim}'nde usta arayın. Elektrikçi, tesisatçı, kombi servisi ve daha fazlası.`} />
                <link rel="canonical" href={`https://kilisusta.com.tr/mahalle/${slug}`} />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <span style={{ fontSize: '3rem' }}>📍</span>
                    <h1>{mahalle.isim}</h1>
                    <p>Bu mahalledeki ustalara ulaşın</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="filter-bar">
                        <select
                            className="input select"
                            value={selectedKategori}
                            onChange={(e) => setSelectedKategori(e.target.value)}
                        >
                            <option value="">Tüm Hizmetler</option>
                            {kategorilerData.kategoriler.map((kat) => (
                                <option key={kat.id} value={kat.id}>
                                    {kat.ikon} {kat.isim}
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
                            <p>Bu mahallede henüz usta eklenmemiş.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
