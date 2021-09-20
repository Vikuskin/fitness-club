const getGift = () => {
  const gift = document.querySelector('.fixed-gift');
  if (gift){
  gift.addEventListener('click', () => {
    const giftPopup = document.querySelector('#gift');
    giftPopup.style.display = 'block';
    gift.style.display = 'none';
    closePopup(giftPopup);
  });  
  }
};

export default getGift;