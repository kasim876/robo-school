import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([ Navigation, Scrollbar ])

new Swiper(".coaches__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  allowTouchMove: false,
  navigation: {
    prevEl: ".coaches__nav-btn_prev",
    nextEl: ".coaches__nav-btn_next",
  },
  scrollbar: {
    el: ".coaches__scrollbar",
    draggable: true,
    dragClass: "coaches__scrollbar-drag",
  }
})