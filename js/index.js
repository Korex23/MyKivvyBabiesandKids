var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  gragCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
