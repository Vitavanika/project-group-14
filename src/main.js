const menuBtnOpen = document.querySelector('.js-open-menu');
const menuBtnClose = document.querySelector('.js-close-menu');
const menu = document.querySelector('.js-menu');

menuBtnOpen.addEventListener('click', toggleModal);
menuBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
    menu.classList.toggle('is-open');
}