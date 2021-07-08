import UrlParser from '../util/UrlParser';
import AlternatifPage from './pages/AlternatifPage';
import KategoriPage from './pages/KategoriPage';
import LaporanPage from './pages/LaporanPage';
import LoginPage from './pages/LoginPage';
import TambahAlternatifPage from './pages/TambahAlternatifPage';
import TambahKategoriPage from './pages/TambahKategoriPage';

const ROUTES = {
  '/': LoginPage,
  kategori: KategoriPage,
  tambahkategori: TambahKategoriPage,
  alternatif: AlternatifPage,
  tambahalternatif: TambahAlternatifPage,
  laporan: LaporanPage,
};

class App {
  constructor(body) {
    this.body = body;
  }

  render() {
    const page = ROUTES[UrlParser.getPage()];
    this.body.innerHTML = page.render();
    if (page.afterRender) { page.afterRender(); }
  }
}

export default App;
