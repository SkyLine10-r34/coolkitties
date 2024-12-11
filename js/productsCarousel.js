(function() {
    const slides = [
        '<div class = "slide"><img src="img/baby-yoda.svg" alt = "Baby Yoda"></div>',
        '<div class = "slide"><img src="img/banana.svg" alt = "Banana"></div>',
        '<div class = "slide"><img src="img/girl.svg" alt = "Girl"></div>',
        '<div class = "slide"><img src="img/viking.svg" alt = "Viking"></div>'
    ];

    let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.main-products-carousel .slide');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    function backSlide() {
        currentSlide = currentSlide - 1 <= slides.length ? -1 : currentSlide - 1;
        renderCarousel();
    }

    setInterval(nextSlide, 3000);

    

    const btnForward = document.querySelector('.main-products-carousel .forward');
    btnForward.addEventListener('click', nextSlide);

    const btnBack = document.querySelector('.main-products-carousel .back');
    btnBack.addEventListener('click', backSlide);

    

})();