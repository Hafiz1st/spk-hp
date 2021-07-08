import DATA from '../../global/data';
import BackButton from '../components/BackButton';
import HeaderActionButton from '../components/HeaderActionButton';
import HeaderElement from '../components/HeaderElement';
import NavBar from '../components/NavBar';

const getAlternatifData = (alternatif) => {
  let template = '';
  alternatif.slice(1).forEach((element, index) => {
    template += `
    <div class='flex-column'>
        C${index + 1}
        <h1>${element}</h1>
        </div>
        <div>&nbsp&nbsp&nbsp&nbsp&nbsp</div>
    `;
  });
  return template;
};

const AlternatifPage = {
  render() {
    return `
    ${HeaderElement.render({ backButton: BackButton.render(), title: 'Alternatif', actionButton: HeaderActionButton.render('Tambah Alternatif') })}
    <main>
    </main>
    
    ${NavBar.render(2)}
    `;
  },
  afterRender() {
    document.querySelector('#headeractionbutton').addEventListener('click', () => {
      window.location.hash = '#/tambahalternatif';
    });

    const main = document.querySelector('main');
    let template = '';
    DATA.alternatif.forEach((alternatif) => {
      const alternatifData = getAlternatifData(alternatif);
      template += `
        <div class='flex space-around'>
        <div class='flex-column'>
        Nama
        <h1>${alternatif[0]}</h1>
        </div>
        <div>&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        ${alternatifData}
        </div>
        <br>
      `;
    });
    main.innerHTML = template;
  },
};

export default AlternatifPage;
