import { Helmet } from 'react-helmet-async';

export default function KVKK() {
    return (
        <>
            <Helmet>
                <title>KVKK Aydınlatma Metni | Kilis Usta</title>
                <meta name="description" content="KilisUsta.com.tr KVKK kapsamında aydınlatma metni." />
                <link rel="canonical" href="https://kilisusta.com.tr/kvkk" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>KVKK Aydınlatma Metni</h1>
                    <p>6698 Sayılı Kişisel Verilerin Korunması Kanunu</p>
                </div>
            </div>

            <section className="page-content">
                <div className="container">
                    <div className="prose">
                        <h2>1. Veri Sorumlusu</h2>
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında,
                            KilisUsta.com.tr olarak veri sorumlusu sıfatıyla aşağıdaki bilgilendirmeyi sunarız.
                        </p>

                        <h2>2. Kişisel Verilerin Toplanması</h2>
                        <p>
                            Web sitemizde üyelik sistemi bulunmadığından, kişisel veri toplama
                            faaliyetimiz oldukça sınırlıdır. Toplanan veriler:
                        </p>
                        <ul>
                            <li>Anonim kullanım istatistikleri</li>
                            <li>Çerez verileri</li>
                            <li>IP adresleri (anonim olarak)</li>
                        </ul>

                        <h2>3. Verilerin İşlenme Amaçları</h2>
                        <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul>
                            <li>Web sitesi performansının analizi</li>
                            <li>Kullanıcı deneyiminin iyileştirilmesi</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        </ul>

                        <h2>4. Haklarınız</h2>
                        <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                        <ul>
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                            <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                            <li>Silinmesini veya yok edilmesini isteme</li>
                        </ul>

                        <h2>5. İletişim</h2>
                        <p>
                            KVKK kapsamındaki haklarınızı kullanmak için WhatsApp üzerinden
                            bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
