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

const sliderWrapper = document.querySelector('.reviews-list');
const scrollerDots = document.querySelector('.scroller-dots');
const sliderItems = document.querySelectorAll('.reviews-items');

let visibleSlides = calculateVisibleSlides();
let dotsCount = Math.max(1, totalSlides - visibleSlides + 1);

function calculateVisibleSlides() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1280) {
    return 3;
  } else if (screenWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

function createDots() {
  if (totalSlides === 0) return;
  scrollerDots.innerHTML = '';

  visibleSlides = calculateVisibleSlides();
  dotsCount = Math.max(1, totalSlides - visibleSlides + 1);

  for (let i = 0; i < dotsCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    scrollerDots.appendChild(dot);

    dot.addEventListener('click', () => {
      sliderWrapper.scrollTo({
        left: (sliderWrapper.scrollWidth / totalSlides) * i,
        behavior: 'smooth',
      });
    });
  }
}

sliderWrapper.addEventListener('scroll', () => {
  const scrollLeft = sliderWrapper.scrollLeft;
  const slideWidth = sliderWrapper.scrollWidth / totalSlides;
  const activeIndex = Math.floor(scrollLeft / slideWidth);

  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === activeIndex);
  });
});

window.addEventListener('resize', createDots);

document.addEventListener('DOMContentLoaded', createDots);
