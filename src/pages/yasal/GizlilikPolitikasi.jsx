import { Helmet } from 'react-helmet-async';

export default function GizlilikPolitikasi() {
    return (
        <>
            <Helmet>
                <title>Gizlilik Politikası | Kilis Usta</title>
                <meta name="description" content="KilisUsta.com.tr gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme." />
                <link rel="canonical" href="https://kilisusta.com.tr/gizlilik-politikasi" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Gizlilik Politikası</h1>
                    <p>Son güncelleme: Şubat 2026</p>
                </div>
            </div>

            <section className="page-content">
                <div className="container">
                    <div className="prose">
                        <h2>1. Giriş</h2>
                        <p>
                            KilisUsta.com.tr olarak, kullanıcılarımızın gizliliğine önem veriyoruz.
                            Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde toplanan bilgiler
                            ve bu bilgilerin nasıl kullanıldığı hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                        </p>

                        <h2>2. Toplanan Bilgiler</h2>
                        <p>
                            Web sitemizde herhangi bir üyelik sistemi bulunmamaktadır.
                            Topladığımız bilgiler aşağıdakilerle sınırlıdır:
                        </p>
                        <ul>
                            <li>Çerezler aracılığıyla elde edilen anonim kullanım verileri</li>
                            <li>Google Analytics tarafından toplanan istatistiksel veriler</li>
                            <li>IP adresleri (anonim olarak işlenir)</li>
                        </ul>

                        <h2>3. Bilgilerin Kullanımı</h2>
                        <p>Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:</p>
                        <ul>
                            <li>Web sitesinin performansını analiz etmek</li>
                            <li>Kullanıcı deneyimini iyileştirmek</li>
                            <li>Reklam hizmetlerini optimize etmek</li>
                        </ul>

                        <h2>4. Üçüncü Taraf Hizmetler</h2>
                        <p>
                            Web sitemizde Google AdSense ve Google Analytics kullanılmaktadır.
                            Bu hizmetler kendi gizlilik politikalarına tabidir.
                        </p>

                        <h2>5. İletişim</h2>
                        <p>
                            Gizlilik politikamız hakkında sorularınız için WhatsApp üzerinden
                            bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
