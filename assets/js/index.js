document.addEventListener('DOMContentLoaded', function (event) {
  const toogle_button = document.querySelector('div.header-right .icons li:last-child a.button');

  toogle_button.removeAttribute('href');

  toogle_button.onclick = function () {
    if (document.body.classList.value == 'dark') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }

  const preferDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (preferDarkTheme) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
