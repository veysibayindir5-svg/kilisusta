import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '905518216475';
const DEFAULT_MESSAGE = `Merhaba, KilisUsta.com.tr sitesine eklenmek istiyorum.

Ad / İşletme:
Telefon:
Mahalle:
Adres:
Google Harita Linki:
Kategori:`;

export default function WhatsAppButton({ message = DEFAULT_MESSAGE, floating = true }) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    if (floating) {
        return (
            <motion.div
                className="whatsapp-float"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
            >
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    aria-label="WhatsApp ile iletişime geç"
                >
                    💬
                </a>
            </motion.div>
        );
    }

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
        >
            💬 WhatsApp ile İletişime Geç
        </a>
    );
}

export { WHATSAPP_NUMBER, DEFAULT_MESSAGE };
