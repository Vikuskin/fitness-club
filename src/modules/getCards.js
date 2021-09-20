const getCards = () => {
  const cardOrder = document.querySelector('#card_order');

  const getPriceTotal = () => {
    const priceTotal = document.querySelector('#price-total'),
        mozaika = document.querySelector('#card_leto_mozaika'),
        schelkovo = document.querySelector('#card_leto_schelkovo');
      if (mozaika || schelkovo){
      let time = cardOrder.querySelector('input[name="card-type"]:checked');
      
      if (mozaika.checked) {
        priceTotal.textContent = time.getAttribute('data-mozaika');
      }

      if (schelkovo.checked){
        priceTotal.textContent = time.getAttribute('data-schelkovo');
      }        
    }
  };
  getPriceTotal();

  cardOrder.addEventListener('input', () => {
    const priceTotal = document.querySelector('#price-total'),
          voucher = document.querySelector('#voucher');

    getPriceTotal();
    if (voucher){
    voucher.addEventListener('input', () => {
        voucher.value = voucher.value.toUpperCase();
    });

    if (voucher.value === 'ТЕЛО2021'){
      voucher.classList.add('success');
      priceTotal.textContent = Math.ceil((+priceTotal.textContent) * 0.7);
    } else {
      voucher.classList.remove('success');
    }
    }
  });
};

export default getCards;