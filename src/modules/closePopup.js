const closePopup = (form) => {
  document.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.classList.contains('close-btn')){
      form.style.display = 'none';
      const fixedGift = document.querySelector('.fixed-gift');
      if (fixedGift){
       document.querySelector('.fixed-gift').style.display = 'block'; 
      } 
    }
  });
};

export default closePopup;