import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kategorilerData from '../../data/kategoriler.json';
import mahallelerData from '../../data/mahalleler.json';

export default function SearchBar({ onSearch }) {
    const [kategori, setKategori] = useState('');
    const [mahalle, setMahalle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (kategori) {
            navigate(`/kategori/${kategori}${mahalle ? `?mahalle=${mahalle}` : ''}`);
        } else if (mahalle) {
            navigate(`/mahalle/${mahalle}`);
        }
    };

    return (
        <form className="search-box" onSubmit={handleSubmit}>
            <select
                className="input select"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
            >
                <option value="">Hizmet seçin...</option>
                {kategorilerData.kategoriler.map((kat) => (
                    <option key={kat.id} value={kat.slug}>
                        {kat.ikon} {kat.isim}
                    </option>
                ))}
            </select>

            <select
                className="input select"
                value={mahalle}
                onChange={(e) => setMahalle(e.target.value)}
            >
                <option value="">Mahalle seçin...</option>
                {mahallelerData.mahalleler.map((mah) => (
                    <option key={mah.id} value={mah.slug}>
                        {mah.isim}
                    </option>
                ))}
            </select>

            <button type="submit" className="btn btn-ara">
                🔍 Ara
            </button>
        </form>
    );
}
