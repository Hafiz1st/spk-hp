const ActionButton = {
  render(title = 'Pilih Hp Terbaik', href) {
    const template = `
    <a href='#/${href}' class='actionbutton'>
      <h1>${title}</h1>
    </a>
  `;
    return template;
  },
};
export default ActionButton;
