import App from './views/App';

const body = document.querySelector('body');
const app = new App(body);

window.addEventListener('load', () => {
  app.render();
});

window.addEventListener('hashchange', () => {
  app.render();
});
