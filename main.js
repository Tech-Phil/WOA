const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 500,
      modifier: 0.5,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const logoLink = document.querySelector('.left-side');

logoLink.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});