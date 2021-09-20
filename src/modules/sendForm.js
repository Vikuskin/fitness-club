const sendForm = (formName) => {
  const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Мы скоро свяжемся с вами! Спасибо!',
        form = document.querySelector(formName),
        statusMessaage = document.createElement('div'),
        thanks = document.querySelector('#thanks');
  
  statusMessaage.style = `
  margin: auto;
  padding-top: 10px;
  font-size: 1rem;
  color: white;
  `;
  if (form.id === 'card_order'){
    statusMessaage.style = `
    color: black;
    text-align: center;
    margin-top: 5px;
    `;
  }
  

  const closeModal = (formName) => {
    while (!formName.classList.contains("popup")) {
      formName = formName.parentElement;
      if (!formName) {
        break;
      }
    }
    if (formName) {
    formName.style.display = 'none'; 
    }
    if (thanks) {
    thanks.style.display = 'none';
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.appendChild(statusMessaage);

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      statusMessaage.textContent = loadMessage;

      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        statusMessaage.textContent = successMessage;
        thanks.style.display = 'flex';
        closePopup(thanks);
      } else {
        statusMessaage.textContent = errorMessage;
      }
        });

    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/json');
    const formData = new FormData(form);
    let body = {};
    for (let val of formData.entries()){
      body[val[0]] = val[1];
    }
    request.send(JSON.stringify(body));

    const clearInput = () => {
      const inputs = form.getElementsByTagName('input');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
    };
    clearInput();

    setTimeout(closeModal, 7000, form);
  });
};

export default sendForm;