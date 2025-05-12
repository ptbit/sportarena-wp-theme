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

btnUp.addEventListener();

function initOrDestroyInfoSwiper() {
  let infoSwiper = null;

  const screenWidth = window.innerWidth;
  if (screenWidth <= 620 && !infoSwiper) {
    infoSwiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1.2,
      grabCursor: true,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 0,
      autoplay: false,
      pagination: {
        el: '.info__swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  } else if (screenWidth > 620 && infoSwiper) {
    infoSwiper.destroy(true, true);
    infoSwiper = null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initCasinosSwiper();
  howToGetShowMore();
  initOrDestroyInfoSwiper();
  footerMenu();

  window.addEventListener('resize', initOrDestroyInfoSwiper);
});

//how get
function howToGetShowMore() {
  //1
  const textBlock = document.querySelector('.item__content--1');
  const textWrapper = document.querySelector('.item__sub-text--1');
  const btn = document.querySelector('.smb1');

  const maxHeightDesktop = 200;
  if (textBlock.scrollHeight > maxHeightDesktop) {
    btn.classList.add('visible');
    textWrapper.classList.add('short');
  }

  btn.addEventListener('click', function () {
    textWrapper.classList.toggle('short');
    const expanded = textBlock.classList.toggle('expanded');
    btn.textContent = expanded ? 'Show less' : 'Show more';
    btn.classList.toggle('less');
  });
  //2
  const textBlock2 = document.querySelector('.item__content--2');
  const textWrapper2 = document.querySelector('.item__sub-text--2');
  const btn2 = document.querySelector('.smb2');

  const maxHeightDesktop2 = 300;
  if (textBlock2.scrollHeight > maxHeightDesktop2) {
    btn2.classList.add('visible');
    textWrapper2.classList.add('short');
  }

  btn2.addEventListener('click', function () {
    textWrapper2.classList.toggle('short');
    const expanded2 = textBlock2.classList.toggle('expanded');
    btn2.textContent = expanded2 ? 'Show less' : 'Show more';
    btn2.classList.toggle('less');
  });
  //3
  const textBlock3 = document.querySelector('.item__content--3');
  const textWrapper3 = document.querySelector('.item__sub-text--3');
  const btn3 = document.querySelector('.smb3');

  const maxHeightDesktop3 = 300;
  if (textBlock3.scrollHeight > maxHeightDesktop3) {
    btn3.classList.add('visible');
    textWrapper3.classList.add('short');
  }

  btn3.addEventListener('click', function () {
    textWrapper3.classList.toggle('short');
    const expanded3 = textBlock3.classList.toggle('expanded');
    btn3.textContent = expanded3 ? 'Show less' : 'Show more';
    btn3.classList.toggle('less');
  });
}
//casino
function initCasinosSwiper() {
  const casinoSwiper = new Swiper('.casinosSwiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 0,

    navigation: {
      nextEl: '.casinos__button--next',
      prevEl: '.casinos__button--prew',
    },

    autoplay: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },

    breakpoints: {
      550: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
        grabCursor: true,
        initialSlide: 0,

        navigation: {
          nextEl: '.casinos__button--next',
          prevEl: '.casinos__button--prew',
        },

        autoplay: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      750: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 2.5,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: '.casinos__button--next',
          prevEl: '.casinos__button--prew',
        },
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      1025: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 3.5,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: '.casinos__button--next',
          prevEl: '.casinos__button--prew',
        },
        autoplay: false,
      },
    },
  });
}

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
