(()=>{"use strict";const e=e=>{const t=document.querySelector(e),n=document.createElement("div"),s=document.querySelector("#thanks");n.style="\n  margin: auto;\n  padding-top: 10px;\n  font-size: 1rem;\n  color: white;\n  ","card_order"===t.id&&(n.style="\n    color: black;\n    text-align: center;\n    margin-top: 5px;\n    ");const o=e=>{for(;!e.classList.contains("popup")&&(e=e.parentElement););e&&(e.style.display="none"),s&&(s.style.display="none")};t.addEventListener("submit",(e=>{e.preventDefault(),t.appendChild(n);const r=new XMLHttpRequest;r.addEventListener("readystatechange",(()=>{n.textContent="Загрузка...",4===r.readyState&&(200===r.status?(n.textContent="Мы скоро свяжемся с вами! Спасибо!",s.style.display="flex",closePopup(s)):n.textContent="Что-то пошло не так...")})),r.open("POST","server.php"),r.setRequestHeader("Content-Type","application/json");const l=new FormData(t);let c={};for(let e of l.entries())c[e[0]]=e[1];r.send(JSON.stringify(c)),(()=>{const e=t.getElementsByTagName("input");for(let t=0;t<e.length;t++)e[t].value=""})(),setTimeout(o,7e3,t)}))};document.addEventListener("click",(e=>{const t=document.querySelector("#clubs-select"),n=e.target;"clubs-list"===n.id&&t.classList.toggle("show"),"clubs-list"!=n.id&&t.classList.remove("show")})),document.querySelector(".free-visit").addEventListener("click",(()=>{const e=document.querySelector("#free_visit_form");e.style.display="block",closePopup(e)})),document.querySelector(".callback-btn").addEventListener("click",(()=>{const e=document.querySelector("#callback_form");e.style.display="block",closePopup(e)})),(()=>{const e=document.querySelector(".fixed-gift");e&&e.addEventListener("click",(()=>{const t=document.querySelector("#gift");t.style.display="block",e.style.display="none",closePopup(t)}))})(),document.addEventListener("click",(e=>{const t=document.querySelector(".popup-menu"),n=e.target;"menu-button"===n.id&&(t.style.display="flex"),"A"!==n.tagName&&"close_icon"!==n.id||(t.style.display="none")})),(()=>{const e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide");if(e){t[0].classList.add("main-slide__active"),t.forEach((()=>{const t=document.createElement("li"),n=e.querySelector(".slider-dots");t.classList.add("dot"),n.append(t)}));const n=e.querySelectorAll(".dot");n[0].classList.add("dot-active");let s,o=0;const r=(e,t,n)=>{e[t].classList.remove(n)},l=(e,t,n)=>{e[t].classList.add(n)},c=()=>{r(t,o,"main-slide__active"),r(n,o,"dot-active"),o++,o>=t.length&&(o=0),l(t,o,"main-slide__active"),l(n,o,"dot-active")},a=(e=3e3)=>{s=setInterval(c,e)},i=()=>{clearInterval(s)};e.addEventListener("click",(e=>{e.preventDefault();const s=e.target;s.matches(".dot")&&(r(t,o,"main-slide__active"),r(n,o,"dot-active"),s.matches(".dot")&&n.forEach(((e,t)=>{e===s&&(o=t)})),l(t,o,"main-slide__active"),l(n,o,"dot-active"))})),e.addEventListener("mouseover",(e=>{e.target.matches(".dot")&&i()})),e.addEventListener("mouseout",(e=>{e.target.matches(".dot")&&a()})),a(2e3)}})(),(()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide"),n=e.querySelector(".prev"),s=e.querySelector(".next");let o=0;if(document.documentElement.clientWidth>767){const e=()=>{for(let e=5;e<t.length;e++)t[e].style.display="none";for(let e=0;e<5;e++)t[e].style.display="block"},r=()=>{for(let e=5;e<t.length;e++)t[e].style.display="block";for(let e=0;e<5;e++)t[e].style.display="none"};e(),s.addEventListener("click",(()=>{t[o].style.display="none",o++,o>4&&(e(),o=0),t[o+4].style.display="block"})),n.addEventListener("click",(()=>{o<=0?(r(),o=5,t[o+4].style.display="none"):t[o+4].style.display="none",o--,t[o].style.display="block"}))}else if(document.documentElement.clientWidth<576){t[0].style.display="block";for(let e=1;e<t.length;e++)t[e].style.display="none";t.forEach((e=>{e.style.margin="auto"})),e.addEventListener("click",(e=>{e.preventDefault();const n=e.target;n.matches(".slider-arrow")&&(t[o].style.display="none",n.matches(".slider-arrow.next")?o++:n.matches(".slider-arrow.prev")&&o--,o>=t.length&&(o=0),o<0&&(o=t.length-1),t[o].style.display="block")}))}else{const e=()=>{for(let e=3;e<t.length;e++)t[e].style.display="none";for(let e=0;e<3;e++)t[e].style.display="block"},r=()=>{for(let e=7;e<t.length;e++)t[e].style.display="block";for(let e=0;e<7;e++)t[e].style.display="none"};e(),s.addEventListener("click",(()=>{t[o].style.display="none",o++,o>2&&(e(),o=0),t[o+2].style.display="block"})),n.addEventListener("click",(()=>{o<=0?(r(),o=7,t[o+2].style.display="none"):t[o+2].style.display="none",o--,t[o].style.display="block"}))}})(),(()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide");for(let e=0;e<t.length;e++)t[e].classList.add("hide");t[0].classList.add("show"),t.forEach((()=>{const t=document.createElement("li"),n=e.querySelector(".slider-dots");t.classList.add("dot"),n.append(t)}));const n=e.querySelectorAll(".dot");n[0].classList.add("dot-active");let s=0;const o=(e,t,n)=>{e[t].classList.remove(n)},r=(e,t,n)=>{e[t].classList.add(n)};e.addEventListener("click",(e=>{e.preventDefault();const l=e.target;l.matches(".slider-arrow, .dot")&&(o(t,s,"show"),o(n,s,"dot-active"),l.matches(".slider-arrow.next")?s++:l.matches(".slider-arrow.prev")?s--:l.matches(".dot")&&n.forEach(((e,t)=>{e===l&&(s=t)})),s>=t.length&&(s=0),s<0&&(s=t.length-1),r(t,s,"show"),r(n,s,"dot-active"))}))})(),(()=>{const e=document.querySelector("#card_order"),t=()=>{const t=document.querySelector("#price-total"),n=document.querySelector("#card_leto_mozaika"),s=document.querySelector("#card_leto_schelkovo");if(n||s){let o=e.querySelector('input[name="card-type"]:checked');n.checked&&(t.textContent=o.getAttribute("data-mozaika")),s.checked&&(t.textContent=o.getAttribute("data-schelkovo"))}};t(),e.addEventListener("input",(()=>{const e=document.querySelector("#price-total"),n=document.querySelector("#voucher");t(),n&&(n.addEventListener("input",(()=>{n.value=n.value.toUpperCase()})),"ТЕЛО2021"===n.value?(n.classList.add("success"),e.textContent=Math.ceil(.7*+e.textContent)):n.classList.remove("success"))}))})(),(()=>{class e{constructor({selector:e,pattern:t={},method:n}){this.form=document.querySelector(e),this.pattern=t,this.method=n,this.elementsForm=[...this.form.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type&&"voucher"!==e.id)),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach((e=>e.addEventListener("change",this.checkIt.bind(this)))),this.form.addEventListener("submit",(e=>{this.elementsForm.forEach((e=>this.checkIt({target:e}))),this.error.size&&e.preventDefault()}))}isValid(e){const t={notEmpty:e=>""!==e.value.trim(),pattern:(e,t)=>t.test(e.value)};if(this.method){const n=this.method[e.id];if(n)return n.every((n=>t[n[0]](e,this.pattern[n[1]])))}return!0}checkIt(e){const t=e.target;this.isValid(t)?(this.showSuccess(t),this.error.delete(t)):(this.showError(t),this.error.add(t))}showError(e){if(e.classList.remove("success"),e.classList.add("error"),!e.nextElementSibling){const t=document.createElement("div");t.textContent="Ошибка в этом поле",t.classList.add("validator-error"),e.insertAdjacentElement("afterend",t)}}showSuccess(e){if(e.classList.remove("error"),e.classList.add("success"),e.nextElementSibling){if(!e.nextElementSibling.classList.contains("validator-error")&&!e.nextElementSibling.classList.contains("validator-error2"))return;e.nextElementSibling.remove()}}applyStyle(){const e=document.createElement("style");e.textContent="\n      input.success {\n        border: 4px solid green !important\n      }\n      input.error {\n        border: 4px solid red !important\n      }\n      .validator-error {\n        font-size: 14px;\n        font-family: sans-serif;\n        color: red\n      }\n      ",document.head.appendChild(e)}setPattern(){this.pattern.name||(this.pattern.name=/^[а-яА-ЯёЁ\-' ']{2,}/),this.pattern.phone||(this.pattern.phone=/^\+[78]([-()\s]*\d){7,18}$/),this.pattern.email||(this.pattern.email=/^\w+@\w+\.\w{2,}$/)}}new e({selector:"#form1",pattern:{},method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init(),new e({selector:"#form2",pattern:{},method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init(),new class extends e{constructor(e,t={},n,s,o,r){super(e,t,n,s,o,r)}showError(e){e.classList.remove("success"),e.classList.add("error")}}({selector:"#banner-form",pattern:{},method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init();class t extends e{constructor(e,t={},n,s,o,r){super(e,t,n,s,o,r)}showError(e){if(e.classList.remove("success"),e.classList.add("error"),!e.nextElementSibling){const t=document.createElement("div");t.textContent="Ошибка в этом поле",t.classList.add("validator-error2"),e.insertAdjacentElement("afterend",t)}}applyStyle(){const e=document.createElement("style");e.textContent="\n      input.success {\n        border: 4px solid green !important\n      }\n      input.error {\n        border: 4px solid red !important\n      }\n      .validator-error2 {\n        font-size: 14px;\n        font-family: sans-serif;\n        color: red;\n        text-align: center;\n        margin-top: -12px\n      }\n      ",document.head.appendChild(e)}}new t({selector:"#footer_form",pattern:{},method:{"callback_footer_form-phone":[["notEmpty"],["pattern","phone"]]}}).init(),new t({selector:"#card_order",pattern:{},method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init()})(),e("#form1"),e("#form2"),e("#banner-form"),e("#card_order"),e("#footer_form"),(()=>{const e=document.querySelector("#totop"),t=document.getElementsByTagName("section")[0].getBoundingClientRect();e.style.display="none",window.addEventListener("scroll",(()=>{(window.pageYOffset||document.documentElement.scrollTop)>=t.top?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(()=>{document.querySelector(".header-main").scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".top-menu"),t=e.getBoundingClientRect();document.documentElement.clientWidth<768&&window.addEventListener("scroll",(()=>{(window.pageYOffset||document.documentElement.scrollTop)>=t.top?e.classList.add("menu-fix"):e.classList.remove("menu-fix")}))})()})();