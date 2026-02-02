import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ustalarData from '../../data/ustalar.json';

export default function KategoriCard({ kategori }) {
    const ustaCount = ustalarData.ustalar.filter(
        u => u.kategoriler.includes(kategori.id)
    ).length;

    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
            transition={{ duration: 0.2 }}
        >
            <Link to={`/kategori/${kategori.slug}`} className="card kategori-card">
                <div className="kategori-icon">{kategori.ikon}</div>
                <h3 className="kategori-name">{kategori.isim}</h3>
                <span className="kategori-count">{ustaCount} usta</span>
            </Link>
        </motion.div>
    );
}
