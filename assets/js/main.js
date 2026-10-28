const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button');
const navLinks = document.querySelectorAll('.header__nav a');

if (header && menuButton) {
    menuButton.addEventListener('click', () => {
        const isOpen = header.classList.toggle('is-open');

        menuButton.setAttribute('aria-expanded', isOpen);
        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'メニューを閉じる' : 'メニューを開く'
        );
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            header.classList.remove('is-open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'メニューを開く');
        });
    });
}

const heroSlider = document.querySelector('.hero__slider');

if (heroSlider) {
    new Swiper(heroSlider, {
        loop: true,
        speed: 1200,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev'
        },
        pagination: {
            el: '.hero__pagination',
            clickable: true
        }
    });
}