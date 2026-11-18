new Swiper(".luoghi-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});