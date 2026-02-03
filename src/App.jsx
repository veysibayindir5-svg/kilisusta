import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import Anasayfa from './pages/Anasayfa';
import Kategoriler from './pages/Kategoriler';
import KategoriDetay from './pages/KategoriDetay';
import Mahalleler from './pages/Mahalleler';
import MahalleDetay from './pages/MahalleDetay';
import UstaOl from './pages/UstaOl';
import Blog from './pages/Blog';
import BlogYazi from './pages/BlogYazi';
import Iletisim from './pages/Iletisim';
import GizlilikPolitikasi from './pages/yasal/GizlilikPolitikasi';
import CerezPolitikasi from './pages/yasal/CerezPolitikasi';
import KVKK from './pages/yasal/KVKK';
import KullanimSartlari from './pages/yasal/KullanimSartlari';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Anasayfa />} />
            <Route path="kategoriler" element={<Kategoriler />} />
            <Route path="kategori/:slug" element={<KategoriDetay />} />
            <Route path="mahalleler" element={<Mahalleler />} />
            <Route path="mahalle/:slug" element={<MahalleDetay />} />
            <Route path="usta-ol" element={<UstaOl />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogYazi />} />
            <Route path="iletisim" element={<Iletisim />} />
            <Route path="gizlilik-politikasi" element={<GizlilikPolitikasi />} />
            <Route path="cerez-politikasi" element={<CerezPolitikasi />} />
            <Route path="kvkk" element={<KVKK />} />
            <Route path="kullanim-sartlari" element={<KullanimSartlari />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
