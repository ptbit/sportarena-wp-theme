import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { burger } from './functions/burger';

const btnUp = {
  el: document.querySelector('.main__btn-top'),
  show() {
    this.el.classList.remove('_hidden');
  },
  hide() {
    this.el.classList.add('_hidden');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.main__btn-top').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};
function footerMenu() {
  const meneItems = document.querySelectorAll('.footer__menu-title');
  meneItems.forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      const submenuItems = parent.querySelectorAll('.footer__menu-link');

      submenuItems.forEach((item) => {
        item.classList.toggle('footer__menu-link--active');
      });
    });
  });
}
function theMostShowMoreButtons() {
  const theMostTB1 = document.querySelector('.column__top--1');
  const theMostTW1 = document.querySelector('.column__text--1');
  const theMostBTN1 = document.querySelector('.the-most__smb--1');

  const theMostMaxHD = 370;

  if (theMostTB1.scrollHeight > theMostMaxHD) {
    theMostBTN1.classList.add('visible');
    theMostTW1.classList.add('short');
  }

  theMostBTN1.addEventListener('click', function () {
    theMostTW1.classList.toggle('short');
    const theMostExp1 = theMostTB1.classList.toggle('expanded');
    theMostBTN1.textContent = theMostExp1 ? 'Show less' : 'Show more';
    theMostBTN1.classList.toggle('less');
  });

  //2
  const theMostTB2 = document.querySelector('.column__top--2');
  const theMostTW2 = document.querySelector('.column__text--2');
  const theMostBTN2 = document.querySelector('.the-most__smb--2');
  if (theMostTB2.scrollHeight > theMostMaxHD) {
    theMostBTN2.classList.add('visible');
    theMostTW2.classList.add('short');
  }

  theMostBTN2.addEventListener('click', function () {
    theMostTW2.classList.toggle('short');
    const theMostExp2 = theMostTB2.classList.toggle('expanded');
    theMostBTN2.textContent = theMostExp2 ? 'Show less' : 'Show more';
    theMostBTN2.classList.toggle('less');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  btnUp.addEventListener();
  footerMenu();
  // theMostShowMoreButtons();

  // showHideBlock('.BH1', '.BB1', '.BC1');
  // addShowMoreButtonToBlock('.TB1', '.TW1', '.BTN1');

  // showHideBlock('.BH2', '.BB2', '.BC2');
  // addShowMoreButtonToBlock('.TB2', '.TW2', '.BTN2');

  // showHideBlock('.BH3', '.BB3', '.BC3');
  // addShowMoreButtonToBlock('.TB3', '.TW3', '.BTN3');

  // showHideBlock('.BH4', '.BB4', '.BC4');
  // addShowMoreButtonToBlock('.TB4', '.TW4', '.BTN4');

  // showHideBlock('.BH5', '.BB5', '.BC5');
  // addShowMoreButtonToBlock('.TB5', '.TW5', '.BTN5');

  // showHideBlock('.BH6', '.BB6', '.BC6');
  // addShowMoreButtonToBlock('.TB6', '.TW6', '.BTN6');

  // showHideBlock('.BH7', '.BB7', '.BC7');
  // addShowMoreButtonToBlock('.TB7', '.TW7', '.BTN7');

  startTricksSwiper();
});

function showHideBlock(blockActivatorClass, blockBtnClass, blockContentClass) {
  const block2Header = document.querySelector(blockActivatorClass);
  const block2Btn = document.querySelector(blockBtnClass);
  const block2Content = document.querySelector(blockContentClass);
  console.log(block2Header);
  block2Header.addEventListener('click', () => {
    block2Btn.classList.toggle('active');
    block2Content.classList.toggle('hide');
  });
}
function addShowMoreButtonToBlock(textBlockClass, textWrapperClass, btnClass) {
  const textBlock = document.querySelector(textBlockClass);
  const textWrapper = document.querySelector(textWrapperClass);
  const showMoreButton = document.querySelector(btnClass);

  let blockMaxHeight = window.innerWidth < 480 ? 150 : 430;

  if (textBlockClass === '.TB2') {
    blockMaxHeight = 140;
  }
  if (textBlockClass === '.TB3') {
    blockMaxHeight = 140;
  }
  if (textBlockClass === '.TB5') {
    blockMaxHeight = 140;
  }
  if (textBlock.scrollHeight > blockMaxHeight) {
    showMoreButton.classList.add('visible');
    textWrapper.classList.add('short');
  }

  showMoreButton.addEventListener('click', function () {
    textWrapper.classList.toggle('short');
    const isExpanded = textBlock.classList.toggle('expanded');
    showMoreButton.textContent = isExpanded ? 'Show less' : 'Show more';
    showMoreButton.classList.toggle('less');
  });
}

function startTricksSwiper() {
  const tricksSwiper = new Swiper('.tricksSwiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.tricks__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
    breakpoints: {
      1325: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
      },
      1030: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 10,
        grabCursor: true,
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.tricks__swiper-pagination',
          clickable: true,
        },
      },
      670: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.tricks__swiper-pagination',
          clickable: true,
        },
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.tricks__swiper-pagination',
          clickable: true,
        },
      },
    },
  });
}
