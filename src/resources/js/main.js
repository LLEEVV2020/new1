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


document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.mobile-menu').addEventListener('click', function(e){
    e.preventDefault();

    let menu_btn = document.querySelector('.menu-btn') // Using a class instead, see note below.

    menu_btn.classList.toggle('menu-custom');
    menu_btn.classList.toggle('menu-active');

    let main_nav = document.querySelector('.header__menu') // Using a class instead, see note below.
    main_nav.classList.toggle('menu-custom');
    main_nav.classList.toggle('menu-active');

  });


});
