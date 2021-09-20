const getDropDownMenu = () => {
  document.addEventListener('click', event => {
    const dropDownMenu = document.querySelector('#clubs-select');
      const target = event.target;
      if (target.id === 'clubs-list'){
        dropDownMenu.classList.toggle('show');
      }
      if (target.id != 'clubs-list'){
        dropDownMenu.classList.remove('show');
      }
  });
};

export default getDropDownMenu;