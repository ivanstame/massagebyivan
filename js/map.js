$(document).ready(function() {
    var currentSlide = 0;
    var slides = $('.carousel-images img');
    var numOfSlides = slides.length;

    function changeSlide(slideIndex) {
        slides.hide();
        slides.eq(slideIndex).show();
    }

    $('.next').click(function() {
        currentSlide = (currentSlide + 1) % numOfSlides;
        changeSlide(currentSlide);
    });

    $('.prev').click(function() {
        currentSlide = (currentSlide - 1 + numOfSlides) % numOfSlides;
        changeSlide(currentSlide);
    });
});