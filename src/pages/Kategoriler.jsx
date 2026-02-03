import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import KategoriCard from '../components/KategoriCard';
import kategorilerData from '../data/kategoriler.json';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Kategoriler() {
    // FORCE SCROLL TO TOP ON MOUNT
    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    return (
        <>
            <Helmet>
                <title>Tüm Kategoriler | Kilis Usta - Usta Rehberi</title>
                <meta name="description" content="Kilis Merkez'de elektrikçi, tesisatçı, kombi, klima, çilingir ve daha fazlası. Tüm usta kategorileri tek sayfada." />
                <link rel="canonical" href="https://kilisusta.com.tr/kategoriler" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Tüm Kategoriler</h1>
                    <p>Kilis Merkez'de ihtiyacınız olan hizmeti seçin</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="grid grid-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {kategorilerData.kategoriler.map((kategori) => (
                            <motion.div key={kategori.id} variants={itemVariants}>
                                <KategoriCard kategori={kategori} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
