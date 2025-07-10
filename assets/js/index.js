document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('div.header-right .icons li:last-child a.button');

  if (!toggleButton) {
    return;
  }

  toggleButton.removeAttribute('href');

  toggleButton.onclick = function () {
    document.body.classList.toggle('dark');
  };

  const preferDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (preferDarkTheme) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
