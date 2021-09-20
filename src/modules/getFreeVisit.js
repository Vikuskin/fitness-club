const getFreeVisit = () => {
  const btnFreeVisit = document.querySelector('.free-visit');
  btnFreeVisit.addEventListener('click', () => {
    const freeVisitPopup = document.querySelector('#free_visit_form');
    freeVisitPopup.style.display = 'block';
    closePopup(freeVisitPopup);
  });
};

export default getFreeVisit;