const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        1200: {
            slidesPerView: 4
        }
    }
  });