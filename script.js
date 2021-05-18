const link = 'https://janealter.github.io/travel-payouts-test-widget';

const button = document.querySelector('button');
const iframes = document.querySelectorAll('iframe');

const langToDimensions = {
  en: [[1024, 100], [768, 130], [440, 202], [286, 295]],
  ru: [[1024, 100], [768, 130], [440, 226], [286, 320]],
};

button.addEventListener('click', () => {
  document.documentElement.lang = document.documentElement.lang === 'en' ? 'ru' : 'en';
  setLang(document.documentElement.lang);
});

function setLang (lang) {
  iframes.forEach((iframe, i) => {
    iframe.src = `${link}/${lang}`
    iframe.width = langToDimensions[lang][i][0];
    iframe.height = langToDimensions[lang][i][1];
  });
}
