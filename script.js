//Slider
var swiper = new Swiper(".mySwiper" , {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank:true,
    pagination : {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    breakpoints: {
        0: {
            slidesPerView:1
        },
        520: {
            slidesPerView:2
        },
        950: {
            slidesPerView:3
        }
    }
});




