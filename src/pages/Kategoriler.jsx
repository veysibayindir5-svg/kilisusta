import { Helmet } from 'react-helmet-async';
import KategoriCard from '../components/KategoriCard';
import kategorilerData from '../data/kategoriler.json';

export default function Kategoriler() {
    return (
        <>
            <Helmet>
                <title>Tüm Kategoriler | Kilis Usta - Usta Rehberi</title>
                <meta name="description" content="Kilis Merkez'de elektrikçi, tesisatçı, kombi, klima, çilingir ve daha fazlası. Tüm usta kategorileri tek sayfada." />
                <link rel="canonical" href="https://kilisusta.com.tr/kategoriler" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Tüm Kategoriler</h1>
                    <p>Kilis Merkez'de ihtiyacınız olan hizmeti seçin</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-4">
                        {kategorilerData.kategoriler.map((kategori) => (
                            <div key={kategori.id}>
                                <KategoriCard kategori={kategori} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
