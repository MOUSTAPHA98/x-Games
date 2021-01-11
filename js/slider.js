var swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 0,
  keyboard: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
      delay: 6000,
      disableOnInteraction: false,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var swiper = new Swiper('.product-swiper', {
  loop: true,
  freeMode: false,
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
    delay: 6000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
  },
});





var swiper = new Swiper('.released-games-swiper', {
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 30,
    },    
  },
});