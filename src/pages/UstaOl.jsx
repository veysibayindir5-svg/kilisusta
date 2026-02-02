import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import WhatsAppButton, { DEFAULT_MESSAGE } from '../components/WhatsAppButton';
import kategorilerData from '../data/kategoriler.json';

export default function UstaOl() {
    return (
        <>
            <Helmet>
                <title>Usta Ol | KilisUsta.com.tr'ye Kayıt Ol</title>
                <meta name="description" content="Kilis Merkez'de usta mısınız? KilisUsta.com.tr'ye ücretsiz kayıt olun ve müşterilerinize ulaşın." />
                <link rel="canonical" href="https://kilisusta.com.tr/usta-ol" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Usta Ol</h1>
                    <p>KilisUsta.com.tr'ye ücretsiz kayıt olun</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="card"
                            style={{ padding: 'var(--space-8)' }}
                        >
                            <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>🔧</div>
                            <h2 style={{ marginBottom: 'var(--space-4)' }}>Siz de Kayıt Olun!</h2>
                            <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
                                Kilis Merkez'de usta mısınız? Müşterilerinizin sizi kolayca bulması için
                                KilisUsta.com.tr'ye <strong>ücretsiz</strong> kayıt olun.
                            </p>

                            <div style={{
                                background: 'var(--color-gray-100)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-5)',
                                marginBottom: 'var(--space-6)',
                                textAlign: 'left'
                            }}>
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>📋 Kayıt İçin Gerekenler:</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-5)', color: 'var(--color-gray-600)' }}>
                                    <li>Ad / İşletme Adı</li>
                                    <li>Telefon Numarası</li>
                                    <li>Mahalle ve Adres</li>
                                    <li>Google Harita Linki</li>
                                    <li>Hizmet Kategorisi</li>
                                </ul>
                            </div>

                            <h4 style={{ marginBottom: 'var(--space-3)' }}>Hizmet Kategorileri:</h4>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'var(--space-2)',
                                justifyContent: 'center',
                                marginBottom: 'var(--space-6)'
                            }}>
                                {kategorilerData.kategoriler.map((kat) => (
                                    <span key={kat.id} className="badge">
                                        {kat.ikon} {kat.isim}
                                    </span>
                                ))}
                            </div>

                            <WhatsAppButton floating={false} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
