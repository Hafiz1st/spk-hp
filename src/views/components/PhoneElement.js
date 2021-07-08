const PhoneElement = {
  render(index, phone) {
    const template = `
    <div class='phone' id=phone${index}>

    <div class='flex center'>
    <span class="material-icons">smartphone</span>
    <h1>&nbsp${phone.name}</h1>
    </div>
    <p>
    ${phone.ram}GB RAM
    ${phone.storage}GB Storage <br>
    ${phone.battery}mAh Battery
    </p>
    <button class='deletebutton'>
    <span class='material-icons'>delete_outline</span>
    </button>
    </div>
    `;

    return template;
  },
};
export default PhoneElement;
