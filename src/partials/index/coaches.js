import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([ Navigation, Scrollbar ])

new Swiper(".coaches__slider", {
  slidesPerView: 1.4,
  spaceBetween: 20,
  allowTouchMove: true,
  navigation: {
    prevEl: ".coaches__nav-btn_prev",
    nextEl: ".coaches__nav-btn_next",
  },
  scrollbar: {
    el: ".coaches__scrollbar",
    draggable: true,
    dragClass: "coaches__scrollbar-drag",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      allowTouchMove: false,
    }
  }
})