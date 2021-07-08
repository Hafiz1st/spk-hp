/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-spread */
import DATA from '../../global/data';
import BackButton from '../components/BackButton';
import HeaderElement from '../components/HeaderElement';
import NavBar from '../components/NavBar';

const getAlternatifData = (alternatif) => {
  let template = '';
  alternatif.forEach((element) => {
    template += `
    <div class='flex-column'>
        <h1>${element}</h1>
        </div>
        <div>&nbsp&nbsp&nbsp&nbsp&nbsp</div>
    `;
  });
  return template;
};

const LaporanPage = {
  render() {
    return `
    ${HeaderElement.render({ backButton: BackButton.render(), title: 'Laporan' })}
    <main>
    </main>

    ${NavBar.render(3)}
    `;
  },
  afterRender() {
    const main = document.querySelector('main');
    const { alternatif } = DATA;
    let matrikAwal = '<h2>Matrik Awal</h2><hr>';
    alternatif.forEach((element) => {
      matrikAwal += `
      <div class='flex space-evenly'>
      ${getAlternatifData(element)}
      </div>
      `;
    });

    const individualMax = (index) => {
      const individualValue = [];
      DATA.alternatif.forEach((element) => {
        individualValue.push(element[index + 1]);
      });
      const result = Math.max.apply(Math, individualValue);
      return result;
    };

    let matrikTernormalisasi = '<h2>Matrik Ternormalisasi</h2><hr>';

    const max = [];
    DATA.kategori.forEach((element, index) => {
      max.push(individualMax(index));
    });

    const normalizeCriteria = (indAlternatif) => {
      const output = [];
      output.push(indAlternatif[0]);
      indAlternatif.slice(1).forEach((element, index) => {
        let normalizedCriteria = element / max[index];
        normalizedCriteria = parseFloat(normalizedCriteria).toFixed(2);
        output.push(normalizedCriteria);
      });
      return output;
    };

    const normalizedAlternatif = [];
    alternatif.forEach((element) => {
      const indNormAlternatif = normalizeCriteria(element);
      normalizedAlternatif.push(indNormAlternatif);
    });
    normalizedAlternatif.forEach((element) => {
      matrikTernormalisasi += `
      <div class='flex space-evenly'>
      ${getAlternatifData(element)}
      </div>
      `;
    });

    const weight = [];
    DATA.kategori.forEach((element) => {
      weight.push(element.bobot);
    });
    let weightSum = 0;
    weight.forEach((element) => {
      weightSum += element;
    });
    const normalizedWeight = [];
    weight.forEach((element) => {
      const result = parseFloat(element / weightSum).toFixed(2);
      normalizedWeight.push(result);
    });

    let matrikTerbobot = '<h2>Matrik Terbobot</h2><hr>';

    const weightCriteria = (indAlternatif) => {
      const output = [];
      output.push(indAlternatif[0]);
      indAlternatif.slice(1).forEach((element, index) => {
        let weightedCriteria = element * normalizedWeight[index];
        weightedCriteria = parseFloat(weightedCriteria).toFixed(2);
        output.push(weightedCriteria);
      });
      return output;
    };

    const weightedAlternatif = [];
    normalizedAlternatif.forEach((element) => {
      const indWeiAlternatif = weightCriteria(element);
      weightedAlternatif.push(indWeiAlternatif);
    });

    weightedAlternatif.forEach((element) => {
      matrikTerbobot += `
      <div class='flex space-evenly'>
      ${getAlternatifData(element)}
      </div>
      `;
    });

    let hasil = '<h2>Hasil Ranking</h2><hr>';
    const hasilAlternatif = weightedAlternatif.map((element) => {
      const indHasilAlternatif = [];
      indHasilAlternatif[0] = element[0];
      let score = 0;
      element.slice(1).forEach((e) => {
        score += parseFloat(e);
      });
      indHasilAlternatif[1] = score.toFixed(3);
      return indHasilAlternatif;
    });

    hasilAlternatif.sort((a, b) => b[1] - a[1]);
    // console.log(hasilAlternatif);
    hasilAlternatif.forEach((element) => {
      hasil += `
      <div class='flex space-evenly'>
      ${getAlternatifData(element)}
      </div>
      `;
    });
    main.innerHTML = matrikAwal + matrikTernormalisasi + matrikTerbobot + hasil;
  },
};

export default LaporanPage;
