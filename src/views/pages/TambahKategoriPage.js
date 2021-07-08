import DATA from '../../global/data';
import BackButton from '../components/BackButton';
import HeaderActionButton from '../components/HeaderActionButton';
import HeaderElement from '../components/HeaderElement';

const TambahKategoriPage = {
  render() {
    return `
    ${HeaderElement.render({ backButton: BackButton.render(), title: 'Tambah Kriteria', actionButton: HeaderActionButton.render('Simpan') })}
    <main>
    <form id='tambahkategori'>
    <input name='nama' type='text' placeholder='Nama Kriteria'></input>
    <select name='bobot'>
      <option value=1>Bobot: 1
      </option>
      <option value=2>Bobot: 2
      </option>
      <option value=3>Bobot: 3
      </option>
      <option value=4>Bobot: 4
      </option>
      <option value=5>Bobot: 5
      </option>
    </select>
    </form>
    </main>
    `;
  },
  afterRender() {
    document.querySelector('#headeractionbutton')
      .addEventListener('click', () => {
        const form = document.forms.tambahkategori;
        if (form.nama.value !== '') {
          DATA.tambahKategori(
            form.nama.value,
            form.bobot.value,
          );
          window.history.back();
        }
      });
  },
};

export default TambahKategoriPage;
