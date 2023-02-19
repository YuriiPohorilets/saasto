(() => {
  const refs = {
    modalOverlay: document.querySelector('[data-modal-overlay]'),
    modalClose: document.querySelector('[data-modal-close]'),
    modalOpen: document.querySelector('[data-modal-open]'),
  };

  const toggleModal = () => {
    refs.modalOverlay.classList.toggle('is-hidden');
  };

  const closeByEsc = e => {
    if (e.key === 'Escape') {
      refs.modalOverlay.classList.add('is-hidden');
    }
  };

  const closeByOverlay = e => {
    if (e.target.className !== 'overlay') {
      return;
    }
    toggleModal();
  };

  refs.modalClose.addEventListener('click', toggleModal);
  refs.modalOpen.addEventListener('click', toggleModal);
  refs.modalOverlay.addEventListener('click', closeByOverlay);
  document.body.addEventListener('keyup', closeByEsc);
})();
