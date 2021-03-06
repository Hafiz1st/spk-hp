import NavBar from '../components/NavBar';

const template = `
<main>
<h2>Metode Simple Additive Weighting</h2>
Fishburn (1967) dan MacCrimmon (1968). Metode Simple Additive Weighting (SAW) sering juga dikenal istilah metode penjumlahan terbobot. Konsep dasar metode SAW adalah mencari penjumlahan terbobot dari rating kinerja pada setiap alternatif pada semua atribut.

Metode SAW membutuhkan proses normalisasi matriks keputusan (X) ke suatu skala yang dapat diperbandingkan dengan semua rating alternatif yang ada.

Menurut Fachmi Basyaib (2006) Metode Simple Additive Weighting (SAW) merupakan metode paling dikenal dan paling banyak digunakan orang dalam menghadapi situasi Multi Attribute Decision Making (MADM). metode ini mengharuskan pembuat keputusan menentukan bobot bagi setiap attribut. skor total untuk sebuah alternatif diperoleh dengan menjumlahkan seluruh hasil perkalian antar rating (yang dapat dibandingkan lintas attribut) dan bobot tiap attribut. rating tiap atribut haruslah bebas dimensi dalam arti telah melewati proses normalisasi sebelumnya.

Metode SAW sering juga dikenal istilah metode penjumlahan terbobot. Konsep dasar metode SAW adalah mencari penjumlahan terbobot dari rating kinerja pada setiap alternatif pada semua atribut. Metode SAW membutuhkan proses normalisasi matriks keputusan (X) ke suatu skala yang dapat diperbandingkan dengan semua rating alternatif yang ada.
</main>
${NavBar.render()}
`;

const WelcomePage = {
  render() {
    return template;
  },
};

export default WelcomePage;
