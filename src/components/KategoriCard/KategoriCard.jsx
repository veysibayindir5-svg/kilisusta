import { Link } from 'react-router-dom';
import ustalarData from '../../data/ustalar.json';

export default function KategoriCard({ kategori }) {
    const ustaCount = ustalarData.ustalar.filter(
        u => u.kategoriler.includes(kategori.id)
    ).length;

    return (
        <Link to={`/kategori/${kategori.slug}`} className="card kategori-card">
            <div className="kategori-icon">{kategori.ikon}</div>
            <h3 className="kategori-name">{kategori.isim}</h3>
            <span className="kategori-count">{ustaCount} usta</span>
        </Link>
    );
}
