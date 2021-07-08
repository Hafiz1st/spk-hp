/* eslint-disable consistent-return */
import DATA from '../../global/data';
import BackButton from '../components/BackButton';
import HeaderActionButton from '../components/HeaderActionButton';
import HeaderElement from '../components/HeaderElement';

const TambahAlternatifPage = {
  render() {
    let kategoriTemplate = '';
    DATA.kategori.forEach((element, index) => {
      kategoriTemplate += `
      <input name='c${index + 1}' type='number' placeholder='${element.nama}'></input>
      `;
    });
    return `
    ${HeaderElement.render({ backButton: BackButton.render(), title: 'Tambah Alternatif', actionButton: HeaderActionButton.render('Simpan') })}
    <main>
    <form id='tambahalternatif'>
    <input name='nama' type='text' placeholder='Nama Alternatif'></input>
    ${kategoriTemplate}
    </form>
    </main>
    `;
  },
  afterRender() {
    document.querySelector('#headeractionbutton')
      .addEventListener('click', () => {
        const inputs = document.querySelectorAll('input');
        if (this.validateForm(inputs)) {
          const data = [];
          inputs.forEach((input) => {
            data.push(input.value);
          });
          DATA.tambahAlternatif(data);
          window.history.back();
        }
      });
  },
  validateForm(inputs) {
    inputs.forEach((element) => {
      if (element.value === '') {
        return false;
      }
    });
    return true;
  },
};

export default TambahAlternatifPage;
