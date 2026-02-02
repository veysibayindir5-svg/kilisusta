import { Helmet } from 'react-helmet-async';

export default function KullanimSartlari() {
    return (
        <>
            <Helmet>
                <title>Kullanım Şartları | Kilis Usta</title>
                <meta name="description" content="KilisUsta.com.tr kullanım şartları ve koşulları." />
                <link rel="canonical" href="https://kilisusta.com.tr/kullanim-sartlari" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Kullanım Şartları</h1>
                    <p>Son güncelleme: Şubat 2026</p>
                </div>
            </div>

            <section className="page-content">
                <div className="container">
                    <div className="prose">
                        <h2>1. Genel Bilgiler</h2>
                        <p>
                            KilisUsta.com.tr, Kilis Merkez'deki usta ve hizmet sağlayıcıları
                            listeleyen bir rehber sitesidir. Siteyi kullanarak bu şartları kabul etmiş sayılırsınız.
                        </p>

                        <h2>2. Hizmet Kapsamı</h2>
                        <p>
                            Sitemiz, ustalar ve müşteriler arasında doğrudan iletişim sağlayan bir
                            aracı platformdur. Verilen hizmetlerin kalitesi, fiyatlandırması ve
                            sonuçlarından KilisUsta.com.tr sorumlu değildir.
                        </p>

                        <h2>3. Usta Bilgileri</h2>
                        <p>
                            Sitede yer alan usta bilgileri, ustaların beyanlarına dayanmaktadır.
                            Bilgilerin doğruluğu konusunda garanti verilmemektedir.
                            Hizmet almadan önce ustayla doğrudan iletişime geçerek detayları teyit ediniz.
                        </p>

                        <h2>4. Sorumluluk Reddi</h2>
                        <p>
                            KilisUsta.com.tr, sitede listelenen ustalar tarafından verilen hizmetlerden,
                            oluşabilecek zararlardan veya anlaşmazlıklardan sorumlu tutulamaz.
                        </p>

                        <h2>5. Fikri Mülkiyet</h2>
                        <p>
                            Sitedeki tüm içerikler (tasarım, logo, metinler) KilisUsta.com.tr'ye aittir.
                            İzinsiz kopyalanamaz veya kullanılamaz.
                        </p>

                        <h2>6. Değişiklikler</h2>
                        <p>
                            Bu kullanım şartları önceden haber vermeksizin değiştirilebilir.
                            Güncel şartlar bu sayfada yayınlanacaktır.
                        </p>

                        <h2>7. İletişim</h2>
                        <p>
                            Sorularınız için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
