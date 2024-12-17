const menuBtnOpen = document.querySelector('.js-open-menu');
const menuBtnClose = document.querySelector('.js-close-menu');
const menuClose = document.querySelector('.js-link');
const menuCloseBtn = document.querySelector('.js-btn');
const menu = document.querySelector('.js-menu');

menuBtnOpen.addEventListener('click', toggleModal);
menuBtnClose.addEventListener('click', toggleModal);
menuClose.addEventListener('click', toggleModal);
menuCloseBtn.addEventListener('click', toggleModal);

function toggleModal() {
    menu.classList.toggle('is-open');
}