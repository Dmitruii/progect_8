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

    // Anchors
    const links = document.querySelectorAll('.scroll-link');
    if (links.length > 0) {
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const scrollToElem = document.querySelector(link.getAttribute('data-scrollTo'));
                if (scrollToElem) {
                    if (scrollToElem.offsetHeight > window.innerHeight) {
                        e.preventDefault();   
                        scrollToElem.scrollIntoView({
                            block: "start",
                            inline: "nearest",
                            behavior: "smooth"
                        });
                    }else {
                        e.preventDefault();   
                        scrollToElem.scrollIntoView({
                            block: "center",
                            inline: "nearest",
                            behavior: "smooth"
                        });
                    }
                }
            });
        }
    }
});