import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <span className="logo-icon">🔧</span>
                            <span>Kilis<span style={{ color: 'var(--color-primary)' }}>Usta</span></span>
                        </Link>
                        <p>
                            Kilis Merkez'de ustaya hızlı ulaş. Elektrikçi, tesisatçı,
                            kombi servisi ve daha fazlası için güvenilir ustalar.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-title">Sayfalar</h4>
                        <div className="footer-links">
                            <Link to="/" className="footer-link">Anasayfa</Link>
                            <Link to="/kategoriler" className="footer-link">Kategoriler</Link>
                            <Link to="/mahalleler" className="footer-link">Mahalleler</Link>
                            <Link to="/usta-ol" className="footer-link">Usta Ol</Link>
                            <Link to="/blog" className="footer-link">Blog</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-title">Popüler</h4>
                        <div className="footer-links">
                            <Link to="/kategori/elektrikci" className="footer-link">Elektrikçi</Link>
                            <Link to="/kategori/su-tesisatcisi" className="footer-link">Tesisatçı</Link>
                            <Link to="/kategori/kombi-dogalgaz" className="footer-link">Kombi Servisi</Link>
                            <Link to="/kategori/cilingir" className="footer-link">Çilingir</Link>
                            <Link to="/kategori/klima" className="footer-link">Klima</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-title">Yasal</h4>
                        <div className="footer-links">
                            <Link to="/gizlilik-politikasi" className="footer-link">Gizlilik Politikası</Link>
                            <Link to="/cerez-politikasi" className="footer-link">Çerez Politikası</Link>
                            <Link to="/kvkk" className="footer-link">KVKK Aydınlatma</Link>
                            <Link to="/kullanim-sartlari" className="footer-link">Kullanım Şartları</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} KilisUsta.com.tr - Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
