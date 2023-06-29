var swiper = new Swiper(".mySwiper", {

  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  loop: true,
  freeMode: true,
  freeModeMomentum: false,
  //spaceBetween: 35,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
    },
  }
});
