var swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  effect: 'fade',
  autoplay: {
      delay: 7000,
      disableOnInteraction: true,
  },
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.product-swiper', {
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1218: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },    
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});