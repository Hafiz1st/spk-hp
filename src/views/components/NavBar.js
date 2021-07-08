const NavBar = {
  render(index) {
    const template = `
    <nav class='bottomfloat flex space-around'>

    <a href='#/kategori' class='nodecor-a ${(index === 1) ? 'accented' : ''}'>
    <div class='flex-column center padding-8'>
    <span class='material-icons'>
    dashboard
    </span>
    Kriteria
    </div>
    </a>

    <a href='#/alternatif' class='nodecor-a ${(index === 2) ? 'accented' : ''}'>
    <div class='flex-column center padding-8'>
    <span class='material-icons'>
    article
    </span>
    Alternatif
    </div>
    </a>

    <a href='#/laporan' class='nodecor-a ${(index === 3) ? 'accented' : ''}'>
    <div class='flex-column center padding-8'>
    <span class='material-icons'>
    calendar_view_month
    </span>
    Laporan
    </div>
    </a>

    </nav>
  `;

    return template;
  },
};
export default NavBar;
