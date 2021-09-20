const getCallback = () => {
  const btnCallback = document.querySelector('.callback-btn');
  btnCallback.addEventListener('click', () => {
    const callbackForm = document.querySelector('#callback_form');
    callbackForm.style.display = 'block';
    closePopup(callbackForm);
  });
};

export default getCallback;