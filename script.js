const menuBtn = document.querySelector('.m-menu-button');
const menu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});