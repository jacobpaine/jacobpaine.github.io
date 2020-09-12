function stickyNavigation() {}

const toggleNav = (e) => {
  const id = e.target.id;
  const nav = document.querySelector('nav');
  const navOpen = Object.values(nav.classList).find((el) => el === 'nav-show');

  if (navOpen) {
    nav.classList.remove('nav-show');
  } else {
    nav.classList.add('nav-show');
  }
};

const scrollToDiv = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

export { scrollToDiv, stickyNavigation, toggleNav };
