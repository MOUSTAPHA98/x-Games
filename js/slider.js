var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 10000,
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