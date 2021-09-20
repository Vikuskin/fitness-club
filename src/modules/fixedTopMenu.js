const fixedTopMenu = () => {
  const topMenu = document.querySelector('.top-menu');
  const clientTopMenu = topMenu.getBoundingClientRect();
  if (document.documentElement.clientWidth < 768){
    window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= (clientTopMenu.top)){
      topMenu.classList.add('menu-fix');
    } else {
      topMenu.classList.remove('menu-fix');
    }
  });
  }
};

export default fixedTopMenu;