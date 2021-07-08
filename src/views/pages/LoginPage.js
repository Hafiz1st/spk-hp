/* eslint-disable no-alert */
import HeaderElement from '../components/HeaderElement';

const LoginPage = {
  render() {
    return `
    ${HeaderElement.render({ title: 'Login' })}
    <main>
    <h1>Sistem Pendukung Keputusan ( SPK ) Pemilihan Handphone Terbaik dengan Metode SAW berbasis Web Javascript</h1>
    <form id='login'>
    <input name='id' type='text' placeholder='Id'>
    <input name='password' type='password' placeholder='Password'>
    </form>
    <button>Login</button>
    </main>
    `;
  },
  afterRender() {
    document.querySelector('button').addEventListener('click', () => {
      const form = document.forms.login;
      if (form.id.value !== 'hafiz' || form.password.value !== 'hafiz100st') {
        window.alert('Password yang anda salah!');
      } else {
        window.location.hash = '#/kategori';
      }
    });
  },
};

export default LoginPage;
