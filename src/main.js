const menuBtnOpen = document.querySelector('.js-open-menu');
const menuBtnClose = document.querySelector('.js-close-menu');
const menuClose = document.querySelector('.js-link');
const menu = document.querySelector('.js-menu');

menuBtnOpen.addEventListener('click', toggleModal);
menuBtnClose.addEventListener('click', toggleModal);
menuClose.addEventListener('click', toggleModal);

function toggleModal() {
    menu.classList.toggle('is-open');
}