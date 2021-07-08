const HeaderElement = {
  render({
    title = 'aaaaa',
    backButton = '<div class="blankbackbutton"></div>',
    actionButton = '',
  }) {
    const template = `
    <header>
    ${backButton}
    <h1>${title}</h1>
    ${actionButton}
    </header>
  `;

    return template;
  },
};
export default HeaderElement;
