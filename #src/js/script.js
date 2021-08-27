$(document).ready(function () {
    // @@include('someScripts.js'); 
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