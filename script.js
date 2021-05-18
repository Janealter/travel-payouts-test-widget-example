const link = 'http://localhost:8080';

const button = document.querySelector('button');
const iframes = document.querySelectorAll('iframe');

button.addEventListener('click', () => {
  document.documentElement.lang = document.documentElement.lang === 'en' ? 'ru' : 'en';
  setLang(document.documentElement.lang);
});

function setLang (lang) {
  iframes.forEach(iframe => iframe.src = `${link}/${lang}`);
}
