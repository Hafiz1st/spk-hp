import DATA from '../../global/data';
import BackButton from '../components/BackButton';
import HeaderActionButton from '../components/HeaderActionButton';
import HeaderElement from '../components/HeaderElement';
import NavBar from '../components/NavBar';

const KategoriPage = {
  render() {
    return `
    ${HeaderElement.render({ backButton: BackButton.render(), title: 'Kriteria', actionButton: HeaderActionButton.render('Tambah kriteria') })}
    <main>
    </main>
    
    ${NavBar.render(1)}
    `;
  },
  afterRender() {
    document.querySelector('#headeractionbutton').addEventListener('click', () => {
      window.location.hash = '#/tambahkategori';
    });

    const main = document.querySelector('main');
    let template = '';
    DATA.kategori.forEach((kategori) => {
      template += `
        <div class='flex'>
        <div class='flex-column'>
        Kriteria
        <h1>${kategori.nama}</h1>
        </div>
        <div>&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        <div class='flex-column'>
        Bobot
        <h1>${kategori.bobot}</h1>
        </div>
        </div>
        <br>
      `;
    });
    main.innerHTML = template;
  },
};

export default KategoriPage;
