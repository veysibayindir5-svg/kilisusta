import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import MahalleCard from '../components/MahalleCard';
import mahallelerData from '../data/mahalleler.json';

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

export default function Mahalleler() {
    return (
        <>
            <Helmet>
                <title>Mahalleye Göre Ustalar | Kilis Usta</title>
                <meta name="description" content="Kilis Merkez mahallelerinde usta arayın. Bulunduğunuz mahalledeki en yakın ustalara ulaşın." />
                <link rel="canonical" href="https://kilisusta.com.tr/mahalleler" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Mahalleye Göre Ustalar</h1>
                    <p>Bulunduğunuz mahalledeki ustalara hızlıca ulaşın</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="grid grid-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {mahallelerData.mahalleler.map((mahalle) => (
                            <motion.div key={mahalle.id} variants={itemVariants}>
                                <MahalleCard mahalle={mahalle} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
