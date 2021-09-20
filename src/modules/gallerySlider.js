const gallerySlider = () => {
  const sliderGallery = document.querySelector('.gallery-slider'),
        slideGallery = sliderGallery.querySelectorAll('.slide');

  for (let i = 0; i < slideGallery.length; i++){
    slideGallery[i].classList.add('hide');
  }

  slideGallery[0].classList.add('show');

  slideGallery.forEach(() => {
    const dot = document.createElement('li'),
          sliderDots = sliderGallery.querySelector('.slider-dots');
    dot.classList.add('dot');
    sliderDots.append(dot);
  });

  const dot = sliderGallery.querySelectorAll('.dot');
  dot[0].classList.add('dot-active');

  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  sliderGallery.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.slider-arrow, .dot')) {
      return;
    }

    prevSlide(slideGallery, currentSlide, 'show');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('.slider-arrow.next')) {
      currentSlide++;
    } else if (target.matches('.slider-arrow.prev')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slideGallery.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slideGallery.length - 1;
    }
    nextSlide(slideGallery, currentSlide, 'show');
    nextSlide(dot, currentSlide, 'dot-active');
  });
};

export default gallerySlider;