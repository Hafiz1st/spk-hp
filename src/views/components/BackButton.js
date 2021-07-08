const BackButton = {
  render(icon = 'arrow_back') {
    const template = `
    <a onclick="window.history.back()" id="headerbackbutton"><span class='material-icons block'>${icon}</span></a>
  `;

    return template;
  },
};
export default BackButton;
