const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger__open');
const burgerClose = document.querySelector('.burger__close');

const burgerActiveClass = 'burger_open';

function toggleBurger() {
  burger.classList.toggle(burgerActiveClass);
  document.body.classList.toggle('dis-scroll');
}

[burgerOpen, burgerClose].forEach(btn => btn.addEventListener("click", toggleBurger));
burger.querySelectorAll('.nav__link').forEach(link => link.addEventListener("click", toggleBurger));
