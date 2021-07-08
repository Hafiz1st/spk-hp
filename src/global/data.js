const DATA = {
  tambahKategori(nama, bobot) {
    this.kategori.push(
      {
        nama, bobot,
      },
    );
  },
  tambahAlternatif(alternatif) {
    this.alternatif.push(alternatif);
  },
  deleteKategori(index) {
    this.kategori.splice(index, 1);
  },
  deleteAlternatif(index) {
    this.alternatif.splice(index, 1);
  },
  kategori: [
    {
      nama: 'RAM',
      bobot: 5,
    },
    {
      nama: 'Storage',
      bobot: 4,
    },
    {
      nama: 'Baterai',
      bobot: 5,
    },
  ],
  alternatif: [
    ['iPhone X', 4, 128, 2000],
    ['iPhone 8', 2, 64, 5020],
    ['Pocophone X3', 12, 256, 5020],
  ],
};

export default DATA;
