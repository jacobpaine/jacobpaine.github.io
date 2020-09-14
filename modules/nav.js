const scrollToDiv = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

export { scrollToDiv };
