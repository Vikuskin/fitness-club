const upArrow = () => { 
  const arrow = document.querySelector('#totop');
  const sections = document.getElementsByTagName('section');
  const clientSection = sections[0].getBoundingClientRect();

  arrow.style.display = 'none';
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= clientSection.top) {
      arrow.style.display = 'block';
    } else {
      arrow.style.display = 'none';
    }
  });
	arrow.addEventListener('click', () => { 
    const start = document.querySelector('.header-main');
    start.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

export default upArrow;