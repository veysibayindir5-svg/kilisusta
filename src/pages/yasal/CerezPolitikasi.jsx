import { Helmet } from 'react-helmet-async';

export default function CerezPolitikasi() {
    return (
        <>
            <Helmet>
                <title>Çerez Politikası | Kilis Usta</title>
                <meta name="description" content="KilisUsta.com.tr çerez kullanımı hakkında bilgilendirme." />
                <link rel="canonical" href="https://kilisusta.com.tr/cerez-politikasi" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Çerez Politikası</h1>
                    <p>Son güncelleme: Şubat 2026</p>
                </div>
            </div>

            <section className="page-content">
                <div className="container">
                    <div className="prose">
                        <h2>1. Çerez Nedir?</h2>
                        <p>
                            Çerezler, web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır.
                            Bu dosyalar, web sitesinin düzgün çalışması ve kullanıcı deneyiminin
                            iyileştirilmesi için kullanılır.
                        </p>

                        <h2>2. Kullandığımız Çerezler</h2>
                        <p>Web sitemizde aşağıdaki çerez türleri kullanılmaktadır:</p>
                        <ul>
                            <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevleri için gereklidir.</li>
                            <li><strong>Analiz Çerezleri:</strong> Google Analytics tarafından kullanılır.</li>
                            <li><strong>Reklam Çerezleri:</strong> Google AdSense tarafından kullanılır.</li>
                        </ul>

                        <h2>3. Çerezleri Yönetme</h2>
                        <p>
                            Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.
                            Ancak bu durumda web sitesinin bazı özellikleri düzgün çalışmayabilir.
                        </p>

                        <h2>4. Google AdSense Çerezleri</h2>
                        <p>
                            Google AdSense, kişiselleştirilmiş reklamlar göstermek için çerezler kullanır.
                            Google'ın reklam çerez kullanımı hakkında daha fazla bilgi için
                            Google Gizlilik Politikası'nı inceleyebilirsiniz.
                        </p>

                        <h2>5. Değişiklikler</h2>
                        <p>
                            Bu çerez politikası gerektiğinde güncellenebilir.
                            Değişiklikler bu sayfada yayınlanacaktır.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
