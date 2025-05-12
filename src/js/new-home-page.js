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

document.addEventListener('DOMContentLoaded', () => {
  btnUp.addEventListener();
  footerMenu();
  startBenefitsSwiper();
  startEveningSwiper();
  initGamesSwiper();
  winsButtons();
  initOrDestroySwiperFeaturesSwiper();
  window.addEventListener('resize', initOrDestroySwiperFeaturesSwiper);
  algorithmSMB();
  initOrDestroySwiperFeatures2();
  window.addEventListener('resize', initOrDestroySwiperFeatures2);
  initOrDestroySwiperHowToPlay();
  window.addEventListener('resize', initOrDestroySwiperHowToPlay);
  registrationSMB();
  initPaymentsSwiper();
  startBonusesSwiper();
  storesShowMoreButtons();
  startSwiperBenefits2();
  legalitySMB();
  faqButtons();
});

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

function startBenefitsSwiper() {
  const benefitsSwiper = new Swiper('.cardsSwiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.05,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.benefits__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
    breakpoints: {
      375: {
        slidesPerView: 1.5,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
      },
      670: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        initialSlide: 0,
      },

      1030: {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        initialSlide: 0,
      },
      1325: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 5,
        spaceBetween: 18,
        grabCursor: true,
      },
    },
  });
}

function startEveningSwiper() {
  const eveningSwiper = new Swiper('.eveningSwiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.5,
    spaceBetween: 10,
    initialSlide: 0,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: false,
    pagination: {
      el: '.evening__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
    breakpoints: {
      375: {
        slidesPerView: 1.8,
        spaceBetween: 15,
        initialSlide: 0,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: false,
        pagination: {
          el: '.evening__swiper-pagination',
          clickable: true,
        },
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        pagination: {
          el: '.evening__swiper-pagination',
          clickable: true,
        },
        autoplay: false,
      },
      1260: {
        slidesPerView: 5,
        spaceBetween: 30,
        initialSlide: 0,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: false,
      },
    },
  });
}

function initGamesSwiper() {
  const gamesSwiper = new Swiper('.gamesSwiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1.05,
    spaceBetween: 15,
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 0,

    navigation: {
      nextEl: '.games__button--next',
      prevEl: '.games__button--prew',
    },

    autoplay: false,

    pagination: {
      el: '.games__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },

    breakpoints: {
      375: {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true,
        grabCursor: true,
        initialSlide: 0,

        navigation: {
          nextEl: '.games__button--next',
          prevEl: '.games__button--prew',
        },

        autoplay: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      550: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
        grabCursor: true,
        initialSlide: 0,

        navigation: {
          nextEl: '.games__button--next',
          prevEl: '.games__button--prew',
        },

        autoplay: false,

        pagination: {
          el: '.games__swiper-pagination',
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
          nextEl: '.games__button--next',
          prevEl: '.games__button--prew',
        },
        autoplay: false,
      },
      1025: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: '.games__button--next',
          prevEl: '.games__button--prew',
        },
        autoplay: false,
      },
      1200: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 3.75,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: '.games__button--next',
          prevEl: '.games__button--prew',
        },
        autoplay: false,
      },
    },
  });
}

function winsButtons() {
  const buttons = document.querySelectorAll('.wins__button');

  const monthBtn = document.querySelector('.monthBtn');
  const yearBtn = document.querySelector('.yearBtn');
  const monthTable = document.querySelector('.monthTable');
  const yearTable = document.querySelector('.yearTable');

  monthBtn.addEventListener('click', () => {
    if (!monthBtn.classList.contains('wins__button--active')) {
      monthBtn.classList.toggle('wins__button--active');
      yearBtn.classList.toggle('wins__button--active');
      monthTable.classList.add('active');
      yearTable.classList.remove('active');
    }
  });
  yearBtn.addEventListener('click', () => {
    if (!yearBtn.classList.contains('wins__button--active')) {
      monthBtn.classList.toggle('wins__button--active');
      yearBtn.classList.toggle('wins__button--active');
      monthTable.classList.remove('active');
      yearTable.classList.add('active');
    }
  });
}

function initOrDestroySwiperFeaturesSwiper() {
  let featuresSwiper = null;
  const screenWidth = window.innerWidth;
  if (screenWidth <= 799 && !featuresSwiper) {
    featuresSwiper = new Swiper('.featuresSwiper', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1.2,
      grabCursor: true,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 0,
      autoplay: false,
      pagination: {
        el: '.features__swiper-pagination',
        clickable: true,
      },
    });
  } else if (screenWidth > 799 && featuresSwiper) {
    featuresSwiper.destroy(true, true);
    featuresSwiper = null;
  }
}

function algorithmSMB() {
  const textBlock = document.querySelector('.algorithm__text');
  const textWrapper = document.querySelector('.algorithm__content');
  const btn = document.querySelector('.algorithm__showMoreBtn');

  const maxHeightDesktop = 500;

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
}

function initOrDestroySwiperFeatures2() {
  const screenWidth = window.innerWidth;
  let swiperFeatures2 = null;

  if (screenWidth <= 1050 && !swiperFeatures2) {
    swiperFeatures2 = new Swiper('.features2Swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1.2,
      grabCursor: true,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 0,
      autoplay: false,
      pagination: {
        el: '.features2__swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        720: {
          loop: true,
          slidesPerView: 2.2,
          grabCursor: true,
          spaceBetween: 15,
          centeredSlides: true,
          initialSlide: 0,
          autoplay: false,
          pagination: {
            el: '.features2__swiper-pagination',
            clickable: true,
          },
        },
        950: {
          loop: true,
          slidesPerView: 3.1,
          grabCursor: true,
          spaceBetween: 15,
          centeredSlides: true,
          initialSlide: 0,
          pagination: {
            el: '.features2__swiper-pagination',
            clickable: true,
          },
        },
      },
    });
  } else if (screenWidth > 1050 && swiperFeatures2) {
    swiperFeatures2.destroy(true, true);
    swiperFeatures2 = null;
  }
}
function initOrDestroySwiperHowToPlay() {
  const screenWidth = window.innerWidth;
  let swiperHowToPlay = null;

  if (screenWidth <= 799 && !swiperHowToPlay) {
    swiperHowToPlay = new Swiper('.howToPlaySwiper', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1.2,
      grabCursor: true,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 0,
      autoplay: false,
      pagination: {
        el: '.how-to-play__swiper-pagination',
        clickable: true,
      },
    });
  } else if (screenWidth > 799 && swiperHowToPlay) {
    swiperHowToPlay.destroy(true, true);
    swiperHowToPlay = null;
  }
}

function registrationSMB() {
  //1
  const textBlock = document.querySelector('.item__details--1');
  const textWrapper = document.querySelector('.item__content--1');
  const btn = document.querySelector('.reg__smb1');

  const maxHeightDesktop = 500;
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
  const textBlock2 = document.querySelector('.item__details--2');
  const textWrapper2 = document.querySelector('.item__content--2');
  const btn2 = document.querySelector('.reg__smb2');

  const maxHeightDesktop2 = 500;
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
}

function initPaymentsSwiper() {
  const swiper = new Swiper('.paymentsSwiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 0,

    navigation: {
      nextEl: '.payments__button--next',
      prevEl: '.payments__button--prev',
    },

    autoplay: false,

    pagination: {
      el: '.payments__swiper-pagination',
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
          nextEl: '.payments__button--next',
          prevEl: '.payments__button--prev',
        },

        autoplay: false,

        pagination: {
          el: '.payments__swiper-pagination',
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
          nextEl: '.payments__button--next',
          prevEl: '.payments__button--prev',
        },
        autoplay: false,
      },
      1025: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: '.payments__button--next',
          prevEl: '.payments__button--prev',
        },
        autoplay: false,
      },
      1200: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 3.75,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: '.payments__button--next',
          prevEl: '.payments__button--prev',
        },
        autoplay: false,
      },
    },
  });
}

function startBonusesSwiper() {
  const bonusesSwiper = new Swiper('.bonusesSwiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.bonuses__swiper-pagination',
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
          el: '.bonuses__swiper-pagination',
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
          el: '.bonuses__swiper-pagination',
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
          el: '.bonuses__swiper-pagination',
          clickable: true,
        },
      },
    },
  });
}

function storesShowMoreButtons() {
  const storesTB1 = document.querySelector('.stores__store--1');
  const storesTW1 = document.querySelector('.stores__sub-title--1');
  const storesBtn1 = document.querySelector('.stores__SMB1');

  const storesMaxHeightDesk1 = 85;

  if (storesTB1.scrollHeight > storesMaxHeightDesk1) {
    storesBtn1.classList.add('visible');
    storesTW1.classList.add('short');
  }

  storesBtn1.addEventListener('click', function () {
    storesTW1.classList.toggle('short');
    const storesExpanded1 = storesTB1.classList.toggle('expanded');
    storesBtn1.textContent = storesExpanded1 ? 'Show less' : 'Show more';
    storesBtn1.classList.toggle('less');
  });
  //2
  const storesTB2 = document.querySelector('.stores__store--2');
  const storesTW2 = document.querySelector('.stores__sub-title--2');
  const storesBtn2 = document.querySelector('.stores__SMB2');

  const storesMaxHeightDesk2 = 85;
  if (storesTW2.scrollHeight > storesMaxHeightDesk2) {
    storesBtn2.classList.add('visible');
    storesTW2.classList.add('short');
  }

  storesBtn2.addEventListener('click', function () {
    storesTW2.classList.toggle('short');
    const storesExpanded2 = storesTB2.classList.toggle('expanded');
    storesBtn2.textContent = storesExpanded2 ? 'Show less' : 'Show more';
    storesBtn2.classList.toggle('less');
  });
}

function startSwiperBenefits2() {
  const benefits2Swiper = new Swiper('.benefits2Swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.05,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.benefits2__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
    breakpoints: {
      420: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.benefits2__swiper-pagination',
          clickable: true,
        },
      },
      550: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.benefits2__swiper-pagination',
          clickable: true,
        },
      },
      670: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.benefits2__swiper-pagination',
          clickable: true,
        },
      },
      840: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.benefits2__swiper-pagination',
          clickable: true,
        },
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.benefits2__swiper-pagination',
          clickable: true,
        },
      },
      1325: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 18,
        grabCursor: true,
      },
    },
  });
}

function legalitySMB() {
  const legality__leftBlock = document.querySelector('.legality__card');
  const legality__rightBlock = document.querySelector('.legality__info');
  const legality__textWrapper = document.querySelector('.legality__sub-title');
  const legality__btn = document.querySelector('.legality__showMoreBtn');

  const legality__maxHeightDesktop = legality__leftBlock.offsetHeight;

  if (legality__rightBlock.scrollHeight > legality__maxHeightDesktop) {
    legality__btn.classList.add('visible');
    legality__textWrapper.classList.add('short');
  }

  legality__btn.addEventListener('click', function () {
    legality__textWrapper.classList.toggle('short');
    const legality__expanded = legality__rightBlock.classList.toggle('expanded');
    legality__btn.textContent = legality__expanded ? 'Show less' : 'Show more';
    legality__btn.classList.toggle('less');
  });
}

function faqButtons() {
  const headersBlocks = document.querySelectorAll('.question__header');

  headersBlocks.forEach((headerBlock) => {
    headerBlock.addEventListener('click', () => {
      const faqButton = headerBlock.querySelector('.question__btn');
      const answer = headerBlock.nextElementSibling;
      answer.classList.toggle('active');
      faqButton.classList.toggle('active');
    });
  });
}
