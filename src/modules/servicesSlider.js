const servicesSlider = () => {
  const servicesSlider = document.querySelector('.services-slider'),
        servSlide = servicesSlider.querySelectorAll('.slide'),
        arrowPrev = servicesSlider.querySelector('.prev'),
        arrowNext = servicesSlider.querySelector('.next');
    let currentSlide = 0;

  if (document.documentElement.clientWidth > 767){
    const startCarousel = () => {
      for (let i = 5; i < servSlide.length; i++) {
        servSlide[i].style.display = 'none';
      }
      for (let i = 0; i < 5; i++) {
        servSlide[i].style.display = 'block';
      }
    };

    const endCarousel = () => {
      for (let i = 5; i < servSlide.length; i++) {
        servSlide[i].style.display = 'block';
      }
      for (let i = 0; i < 5; i++) {
        servSlide[i].style.display = 'none';
      }
    };
    startCarousel();
    
    arrowNext.addEventListener('click', () => {
      servSlide[currentSlide].style.display = 'none';
      currentSlide++;
      if (currentSlide > 4) {
        startCarousel();
        currentSlide = 0;
      }
      servSlide[currentSlide + 4].style.display = 'block';
    });

    
    arrowPrev.addEventListener('click', () => {
      if (currentSlide <= 0) {
        endCarousel();
        currentSlide = 5;
        servSlide[currentSlide + 4].style.display = 'none';
      } else {
        servSlide[currentSlide + 4].style.display = 'none';
      }
      currentSlide--; 
      servSlide[currentSlide].style.display = 'block';
    });
  } else if (document.documentElement.clientWidth < 576){
    servSlide[0].style.display = 'block';
    for (let i = 1; i < servSlide.length; i++){
      servSlide[i].style.display = 'none';
    }
    servSlide.forEach((item) => {
      item.style.margin = 'auto';
    });

    servicesSlider.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target;
      if (!target.matches('.slider-arrow')) {
        return;
      }

      servSlide[currentSlide].style.display = 'none';

      if (target.matches('.slider-arrow.next')) {
        currentSlide++;
      } else if (target.matches('.slider-arrow.prev')) {
        currentSlide--;
      }
      
      if (currentSlide >= servSlide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = servSlide.length - 1;
      }
      servSlide[currentSlide].style.display = 'block';
    });
  } else {
    const startCarousel = () => {
      for (let i = 3; i < servSlide.length; i++) {
        servSlide[i].style.display = 'none';
      }
      for (let i = 0; i < 3; i++) {
        servSlide[i].style.display = 'block';
      }
    };

    const endCarousel = () => {
      for (let i = 7; i < servSlide.length; i++) {
        servSlide[i].style.display = 'block';
      }
      for (let i = 0; i < 7; i++) {
        servSlide[i].style.display = 'none';
      }
    };
    startCarousel();
    
    arrowNext.addEventListener('click', () => {
      servSlide[currentSlide].style.display = 'none';
      currentSlide++;
      if (currentSlide > 2) {
        startCarousel();
        currentSlide = 0;
      }
      servSlide[currentSlide + 2].style.display = 'block';
    });

    
    arrowPrev.addEventListener('click', () => {
      if (currentSlide <= 0) {
        endCarousel();
        currentSlide = 7;
        servSlide[currentSlide + 2].style.display = 'none';
      } else {
        servSlide[currentSlide + 2].style.display = 'none';
      }
      currentSlide--; 
      servSlide[currentSlide].style.display = 'block';
    });
  }
};

export default servicesSlider;