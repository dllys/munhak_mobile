var swiper = new Swiper(".mainVisual", {
    loop:true,
    autoplay:{
        delay:3000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".newBook", {
    loop:true,
    autoplay:{
        delay:3000
    },
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 15,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


