import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ustalarData from '../../data/ustalar.json';

export default function MahalleCard({ mahalle }) {
    const ustaCount = ustalarData.ustalar.filter(
        u => u.mahalle === mahalle.id
    ).length;

    return (
        <motion.div
            whileHover={{ x: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
            transition={{ duration: 0.2 }}
        >
            <Link to={`/mahalle/${mahalle.slug}`} className="card mahalle-card">
                <div className="mahalle-info">
                    <div className="mahalle-icon">📍</div>
                    <div>
                        <h3 className="mahalle-name">{mahalle.isim}</h3>
                        <span className="kategori-count">{ustaCount} usta</span>
                    </div>
                </div>
                <span className="mahalle-arrow">→</span>
            </Link>
        </motion.div>
    );
}
