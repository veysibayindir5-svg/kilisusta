import { motion } from 'framer-motion';
import mahallelerData from '../../data/mahalleler.json';

export default function UstaCard({ usta }) {
    const mahalle = mahallelerData.mahalleler.find(m => m.id === usta.mahalle);
    const mahalleIsim = mahalle ? mahalle.isim : usta.mahalle;

    const formatPhone = (phone) => phone.replace(/\s/g, '');

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        hover: { y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }
    };

    return (
        <motion.div
            className="card usta-card"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.2 }}
        >
            <div className="card-body">
                <h3 className="usta-name">{usta.isim}</h3>

                <div className="usta-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{mahalleIsim}, {usta.adres}</span>
                </div>

                {usta.etiketler && usta.etiketler.includes('aynı-gün') && (
                    <div className="usta-badges">
                        <span className="badge">
                            ⚡ Aynı Gün
                        </span>
                    </div>
                )}

                <div className="usta-actions">
                    <a
                        href={`tel:${formatPhone(usta.telefon)}`}
                        className="btn btn-ara btn-full"
                    >
                        📞 Hemen Ara
                    </a>
                    <a
                        href={usta.haritaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-konum btn-full"
                    >
                        📍 Konum Aç
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
