document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('nav a').forEach((navLink) => navLink.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'page');
  });
});
