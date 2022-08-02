(function () {
    'use strict';

    const header = document.querySelector('.header');
    const cursor = document.querySelector('.cursor');

    function onMouseMove(event) {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        let crd = header.getBoundingClientRect();
        let activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

        requestAnimationFrame(function movePointer() {
            if (activePointer) {
                cursor.style.opacity = 1;
                cursor.classList.remove('box-pointer-hidden');
                cursor.style.left = Math.floor(mouseX) + 'px';
                cursor.style.top = Math.floor(mouseY) + 'px';
            } else {
                cursor.classList.add('box-pointer-hidden');
                cursor.style.opacity = 0;
            }
        });
    }

    function disablePointer() {
        requestAnimationFrame(function hidePointer() {
            cursor.classList.add('box-pointer-hidden');
        });
    }

    header.addEventListener('mousemove', onMouseMove, false);
    header.addEventListener('mouseleave', disablePointer, false);

})();

const scroll = document.querySelector('.header__scroll');
const question = document.querySelector('.header__question');
function rotate(elem, text, num) {
    elem.innerHTML = text.split('')
        .map((e, i) => `<span style="--rot:${i * num}deg">${e}</span>`).join('');
}
rotate(scroll, "scroll down . scroll down .", 13.2);
rotate(question, "cot a question    cot a question    ", 10);

const cookiesButton = document.querySelector('.header__cookies__button');
const cookies = document.querySelector('.cookies');
function hover() {
    cookies.classList.toggle('hidden');
}
cookiesButton.addEventListener("click", hover,);

(function () {
    const navList = document.querySelectorAll('.header__inner__nav__menu__list');
    navList.forEach(el => {
        el.addEventListener('mouseenter', function (e) {
            let element = el.querySelector('.header__inner__nav__menu__list__block');
            element.classList.add('active');
        });
    });

    navList.forEach(el => {
        el.addEventListener('mouseleave', function (e) {
            let element = el.querySelector('.header__inner__nav__menu__list__block');
            element.classList.remove('active');
        });
    });
})();
(function () {
    const services = document.querySelector('.services');
    services.addEventListener('click', () => {
        const hoverMenu = document.querySelector('.hover__menu');
        if (hoverMenu.style.display !== 'block') {
            hoverMenu.style.display = 'block'
        } else {
            hoverMenu.style.display = 'none'
        }
    });
})();

(function () {
    const close = document.querySelector('.menu__close');
    const hamburgerMenu = document.querySelector('.header__inner__nav__burger');
    const menu = document.querySelector('.menu');
    close.addEventListener('click', () => {
        menu.style.display = 'none';
    });
    hamburgerMenu.addEventListener('click', () => {
        menu.style.display = 'flex';
    });
})();

(function () {
    const navListMob = document.querySelectorAll('.menu__information__block__nav__list');
    const element = document.querySelectorAll('.menu__information__block__nav__list__block__link');
    navListMob.forEach(el => {
        el.addEventListener('mouseenter', function (e) {
            for (let i = 0; i < element.length; i++) {
                element[i].style.color = "#FFFFFF80";
            }
        });
    });

    navListMob.forEach(el => {
        el.addEventListener('mouseleave', function (e) {
            for (let i = 0; i < element.length; i++) {
                element[i].style.color = "#FFFFFF";
            }
        });
    });
})();