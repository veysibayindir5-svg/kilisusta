import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import KategoriCard from '../components/KategoriCard';
import UstaCard from '../components/UstaCard';
import AdSlot from '../components/AdSlot';
import FAQItem from '../components/FAQItem';
import kategorilerData from '../data/kategoriler.json';
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

export default function Anasayfa() {
    const popularKategoriler = kategorilerData.kategoriler.slice(0, 8);
    const sonUstalar = ustalarData.ustalar.slice(0, 6);

    const faqData = [
        {
            question: "Kilis'te 7/24 açık elektrikçi var mı?",
            answer: "Evet, Kilis Merkez'de 7/24 hizmet veren elektrikçiler bulunmaktadır. Acil elektrik arızalarınız için Emniyet Elektrik, Akım Elektrik ve Mucit Elektrik gibi firmalar gece gündüz hizmet vermektedir."
        },
        {
            question: "Kilis'te su tesisatçısı nasıl bulurum?",
            answer: "KilisUsta.com.tr üzerinden Kilis Merkez'deki tüm su tesisatçılarına ulaşabilirsiniz. ERSU Sıhhi Tesisat, Uğur Sıhhi Tesisat ve Göksu Sıhhi Tesisat gibi firmalar tıkanıklık açma, su kaçağı tespiti ve tesisat döşeme hizmetleri sunmaktadır."
        },
        {
            question: "Kilis'te kombi bakımı yaptırmak için kimi aramalıyım?",
            answer: "Kilis'te kombi bakımı ve arıza servisi için Pınar İklim (DemirDöküm Yetkili Servisi), ERSU Sıhhi Tesisat ve Isımer Isıtma Soğutma firmalarını arayabilirsiniz. Bu firmalar tüm marka kombilere bakım ve onarım hizmeti vermektedir."
        },
        {
            question: "Kilis'te çilingir hizmeti kaç dakikada gelir?",
            answer: "Kilis Merkez'deki çilingirler genellikle 15-30 dakika içinde adresinize ulaşmaktadır. Kapı açma, kilit değişimi ve anahtar kopyalama hizmetleri 7/24 sunulmaktadır."
        },
        {
            question: "Kilis'te beyaz eşya tamiri ne kadar sürer?",
            answer: "Kilis'teki beyaz eşya servislerinin çoğu aynı gün hizmet vermektedir. Buzdolabı, çamaşır makinesi ve bulaşık makinesi arızaları genellikle 1-2 saat içinde onarılmaktadır. Zeki Usta Beyaz Eşya ve Teknik Soğutma gibi firmalar hızlı servis sunmaktadır."
        },
        {
            question: "Kilis'te klima montajı yapan firma var mı?",
            answer: "Evet, Kilis'te klima montaj, bakım ve arıza hizmetleri veren birçok firma bulunmaktadır. Pınar İklim (DemirDöküm Yetkili Servisi) ve Genel Klima Servisi tüm marka klimalar için montaj ve bakım hizmeti sunmaktadır."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Kilis Usta | Kilis Merkez Usta Rehberi – Hemen Ara</title>
                <meta name="description" content="Kilis Merkez'de elektrikçi, tesisatçı, kombi servisi ve daha fazlası. Güvenilir ustalara hemen ulaşın. Telefonla arayın veya konumlarını açın." />
                <meta name="keywords" content="Kilis usta rehberi, Kilis nöbetçi elektrikçi, Kilis su tesisatçısı, Kilis en yakın usta, Kilis merkez ustalar" />
                <link rel="canonical" href="https://kilisusta.com.tr/" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span style={{ fontWeight: 'normal', color: '#ffffff' }}>Kilis</span><span style={{ color: '#00d4ff', fontWeight: 'bold' }}>Usta</span>
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Kilis Merkez'de Ustaya Hızlı Ulaş.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <SearchBar />
                    </motion.div>
                </div>
            </section>

            {/* Ad Slot - Top */}
            <div className="container" style={{ marginTop: 'var(--space-6)' }}>
                <AdSlot slot="anasayfa-ust" height="90px" />
            </div>

            {/* Kategoriler Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header-row">
                        <h2>Popüler Hizmetler</h2>
                        <Link to="/kategoriler" className="btn btn-secondary">
                            Tümünü Gör →
                        </Link>
                    </div>
                    <motion.div
                        className="grid grid-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {popularKategoriler.map((kategori) => (
                            <motion.div key={kategori.id} variants={itemVariants}>
                                <KategoriCard kategori={kategori} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SSS - Sıkça Sorulan Sorular */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Sıkça Sorulan Sorular</h2>
                        <p className="section-subtitle">
                            Kilis'te usta hizmetleri hakkında merak edilenler
                        </p>
                    </div>
                    <motion.div
                        className="faq-container"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {faqData.map((faq, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <FAQItem question={faq.question} answer={faq.answer} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Son Eklenen Ustalar */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Son Eklenen Ustalar</h2>
                        <p className="section-subtitle">
                            Kilis Merkez'deki güvenilir ustalara hızlıca ulaşın
                        </p>
                    </div>
                    <motion.div
                        className="grid grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {sonUstalar.map((usta) => (
                            <motion.div key={usta.id} variants={itemVariants}>
                                <UstaCard usta={usta} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Ad Slot - Bottom */}
            <div className="container" style={{ marginBottom: 'var(--space-8)' }}>
                <AdSlot slot="anasayfa-alt" height="250px" />
            </div>
        </>
    );
}
