const swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 3000,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
