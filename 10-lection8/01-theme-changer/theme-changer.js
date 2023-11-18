const changers = document.querySelectorAll('[data-theme-changer]');
const html = document.documentElement;

changers.forEach(changer => changer.addEventListener('change', function () {
  html.toggleAttribute('data-theme-dark');
  changers.forEach(otherChanger => otherChanger.checked = changer.checked);
}));
