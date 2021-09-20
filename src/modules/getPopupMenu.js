const getPopupMenu = () => {
  document.addEventListener('click', (event) => {
    const popupMenu = document.querySelector('.popup-menu');
    const target = event.target;
    if (target.id === 'menu-button') {
      popupMenu.style.display = 'flex';
    }
    if (target.tagName === 'A' || target.id === 'close_icon'){
      popupMenu.style.display = 'none';
    }
  });
};

export default getPopupMenu;