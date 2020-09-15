const modal = () => {
  // Modal built specifically to accept params for new modals, should the need arise
  const modalName = 'nav';

  function openContactNav(e) {
    const modal = document.getElementById('modal-nav');
    const contacts = document.getElementById('modal-contacts');
    if (modal) modal.style.display = 'block';
    toggleContacts(null);
  }

  function openModal(e) {
    const modal = document.getElementById('modal-' + modalName);
    if (modal) modal.style.display = 'block';
  }

  function closeModal(e) {
    const modal = document.getElementById('modal-nav');
    if (e.target === modal) {
      modal.style.display = 'none';
      toggleContacts('close');
    } else if (
      e.target.id === 'modalClose' ||
      e.target.id === 'modal-contacts'
    ) {
      modal.style.display = 'none';
      toggleContacts('close');
    }
  }

  function toggleContacts(param) {
    const contacts = document.getElementsByClassName('modal-contact');
    const showContacts = document.getElementsByClassName('showContact');

    if (param === 'close') {
      for (let i = 0; i < contacts.length; i++) {
        contacts[i].classList.remove('showContact');
      }
    } else {
      for (let i = 0; i < contacts.length; i++) {
        function show() {
          contacts[i].className += ' showContact';
        }
        setTimeout(show, 500 + i * 150);
      }
    }
  }

  document.getElementById('contact').addEventListener('click', toggleContacts);
  document
    .getElementById('contactNav')
    .addEventListener('click', openContactNav);
  document.getElementById('nav').addEventListener('click', openModal);
  window.addEventListener('click', closeModal);
};

export { modal };
