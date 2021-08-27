$(document).ready(function () {
    // // webp support
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});; 
    // Header btn
    const headerButtonElem = document.querySelector('.header__menu-burger');
    const bodyElem = document.querySelector('body');
    headerButtonElem.addEventListener('click', function () {
        let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
        bodyElem.style.paddingRight = `${scrollWidth}px`;
        headerButtonElem.classList.toggle('active');
        bodyElem.classList.toggle('lock');
    });

    // Slider
    $('.slider__body').slick({
        arrows: false,
        dots: true,
    });
    $('.comments__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
    });
});