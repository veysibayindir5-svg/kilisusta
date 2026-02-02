import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Iletisim() {
    return (
        <>
            <Helmet>
                <title>İletişim | Kilis Usta</title>
                <meta name="description" content="KilisUsta.com.tr ile iletişime geçin. WhatsApp veya e-posta ile bize ulaşabilirsiniz." />
                <link rel="canonical" href="https://kilisusta.com.tr/iletisim" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>İletişim</h1>
                    <p>Bizimle iletişime geçin</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="card"
                            style={{ padding: 'var(--space-8)', textAlign: 'center' }}
                        >
                            <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>📞</div>
                            <h2 style={{ marginBottom: 'var(--space-4)' }}>Bize Ulaşın</h2>
                            <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-6)' }}>
                                Sorularınız, önerileriniz veya kayıt olmak için bizimle iletişime geçebilirsiniz.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                <WhatsAppButton
                                    floating={false}
                                    message="Merhaba, KilisUsta.com.tr hakkında bilgi almak istiyorum."
                                />

                                <a
                                    href="mailto:info@kilisusta.com.tr"
                                    className="btn btn-secondary btn-lg"
                                    style={{ width: '100%' }}
                                >
                                    ✉️ E-posta Gönder
                                </a>
                            </div>

                            <div style={{
                                marginTop: 'var(--space-8)',
                                paddingTop: 'var(--space-6)',
                                borderTop: '1px solid var(--color-gray-200)'
                            }}>
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>📍 Hizmet Bölgesi</h4>
                                <p style={{ color: 'var(--color-gray-500)' }}>
                                    Kilis Merkez ve tüm mahalleler
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
