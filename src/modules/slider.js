const slider = () => {
  const mainSlider = document.querySelector('.main-slider'),
    slide = mainSlider.querySelectorAll('.slide');
  
  if (mainSlider){
    slide[0].classList.add('main-slide__active');

    slide.forEach(() => {
      const dot = document.createElement('li'),
        sliderDots = mainSlider.querySelector('.slider-dots');
      dot.classList.add('dot');
      sliderDots.append(dot);
    });

    const dot = mainSlider.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'main-slide__active');
      prevSlide(dot, currentSlide, 'dot-active');

      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      nextSlide(slide, currentSlide, 'main-slide__active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    mainSlider.addEventListener('click', event => {
      event.preventDefault();

      const target = event.target;

      if (!target.matches('.dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'main-slide__active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      
      nextSlide(slide, currentSlide, 'main-slide__active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    mainSlider.addEventListener('mouseover', event => {
      if (event.target.matches('.dot')) {
        stopSlide();
      }
    });

    mainSlider.addEventListener('mouseout', event => {
      if (event.target.matches('.dot')) {
        startSlide();
    }
  });

  startSlide(2000);
  }
};

export default slider;