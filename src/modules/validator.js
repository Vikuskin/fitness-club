const validator = () => {
  class Validator {
    constructor({ selector, pattern = {}, method }) {
      this.form = document.querySelector(selector);
      this.pattern = pattern;
      this.method = method;
      this.elementsForm = [...this.form.elements].filter(item => {
        return item.tagName.toLowerCase() !== 'button' &&
          item.type !== 'button' && item.id !== 'voucher';
      });
      this.error = new Set();
    }

    init() {
      this.applyStyle();
      this.setPattern();
      this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
      this.form.addEventListener('submit', event => {
        this.elementsForm.forEach(elem => this.checkIt({ target: elem }));
        if (this.error.size) {
          event.preventDefault();
        }
      });
    }

    isValid(elem) {
      const validatorMethod = {
        notEmpty(elem) {
          if (elem.value.trim() === '') {
            return false;
          }
          return true;
        },
        pattern(elem, pattern) {
          return pattern.test(elem.value);
        }
      };
      
      if (this.method) {
        const method = this.method[elem.id];
        if (method) {
          return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
        }
      } else {
      }
      return true;
    }

    checkIt(event) {
      const target = event.target;
      if (this.isValid(target)) {
        this.showSuccess(target);
        this.error.delete(target);
      } else {
        this.showError(target);
        this.error.add(target);
      }
    }

    showError(elem) {
      elem.classList.remove('success');
      elem.classList.add('error');
      if (!elem.nextElementSibling) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
      } else {
        return;
      }
    }

    showSuccess(elem) {
      elem.classList.remove('error');
      elem.classList.add('success');
      if (elem.nextElementSibling){
        if (elem.nextElementSibling.classList.contains('validator-error') || elem.nextElementSibling.classList.contains('validator-error2')){
          elem.nextElementSibling.remove();
        } else {
          return;
        }
      }
      // if (!elem.nextElementSibling || elem.nextElementSibling.localName === 'label') {
      //   return;
    }

    applyStyle() {
      const style = document.createElement('style');
      style.textContent = `
      input.success {
        border: 4px solid green !important
      }
      input.error {
        border: 4px solid red !important
      }
      .validator-error {
        font-size: 14px;
        font-family: sans-serif;
        color: red
      }
      `;
      document.head.appendChild(style);
    }

    setPattern() {
      if (!this.pattern.name) {
        this.pattern.name = /^[а-яА-ЯёЁ\-' ']{2,}/;
      }

      if (!this.pattern.phone) {
        this.pattern.phone = /^\+[78]([-()\s]*\d){7,18}$/;
      }

      if (!this.pattern.email) {
        this.pattern.email = /^\w+@\w+\.\w{2,}$/;
      }

    }
  }

  const form1 = new Validator({
    selector: '#form1',
    pattern: {},
    method: {
      'name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
    },
  });
  form1.init();

  const form2 = new Validator({
    selector: '#form2',
    pattern: {},
    method: {
      'name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
    },
  });
  form2.init();

  class ValidatorWithoutError extends Validator {
    constructor(selector, pattern = {}, method, form, elementsForm, error) {
      super(selector, pattern, method, form, elementsForm, error);
    }
    showError(elem) {
      elem.classList.remove('success');
      elem.classList.add('error');
    }
  }

  const bannerForm = new ValidatorWithoutError ({
    selector: '#banner-form',
    pattern: {},
    method: {
      'name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
    },
  });
  bannerForm.init();

  class ValidatorWithMargin extends Validator {
    constructor(selector, pattern = {}, method, form, elementsForm, error) {
      super(selector, pattern, method, form, elementsForm, error);
    }
    showError(elem) {
      elem.classList.remove('success');
      elem.classList.add('error');
      if (!elem.nextElementSibling) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error2');
        elem.insertAdjacentElement('afterend', errorDiv);
      } else {
        return;
      }
    }
    applyStyle() {
      const style = document.createElement('style');
      style.textContent = `
      input.success {
        border: 4px solid green !important
      }
      input.error {
        border: 4px solid red !important
      }
      .validator-error2 {
        font-size: 14px;
        font-family: sans-serif;
        color: red;
        text-align: center;
        margin-top: -12px
      }
      `;
      document.head.appendChild(style);
    }
  }

  const footerForm = new ValidatorWithMargin({
    selector: '#footer_form',
    pattern: {},
    method: {
      'callback_footer_form-phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
    },
  });
  footerForm.init();

  const cardOrder = new ValidatorWithMargin({
    selector: '#card_order',
    pattern: {},
    method: {
      'name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
    },
  });
  cardOrder.init();
};

export default validator;