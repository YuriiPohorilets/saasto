(() => {
  const menuBtnRef = document.querySelector('[data-menu-btn]');

  const toggle = () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    // document.body.classList.toggle('menu-is-open');
  };

  menuBtnRef.addEventListener('click', toggle);
})();
