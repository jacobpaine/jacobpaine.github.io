const modal = (modalName) => {
  if (modalName === 'contact') {
    document.getElementById('contact1').addEventListener('click', openModal);
    document.getElementById('contact2').addEventListener('click', openModal);
  } else {
    document.getElementById(modalName).addEventListener('click', openModal);
  }

  window.addEventListener('click', closeModal);

  function openModal(e) {
    const modal = document.getElementById('modal-' + modalName);

    if (e.target.id === 'contact1') {
      // Preventing multiple modal openings
      closeModal({ target: { id: 'modal-nav', override: true } });
    }
    if (modal) modal.style.display = 'block';
  }

  // Click outside and close / or close Button
  function closeModal(e) {
    const modal = document.getElementById('modal-' + modalName);

    if (e.target === modal) {
      modal.style.display = 'none';
    } else if (e.target.id === 'modalClose') {
      modal.style.display = 'none';
    } else if (e.target.override) {
      const modalClosing = document.getElementById(e.target.id);
      modalClosing.style.display = 'none';
    }
  }
};

export { modal };
