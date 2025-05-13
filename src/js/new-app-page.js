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
  startEveningSwiper2();
  initOrDestroyInfoSwiper();
  window.addEventListener('resize', initOrDestroyInfoSwiper);
  initCasinosSwiper();
  initOrDestroySwiperFeaturesSwiper();
  window.addEventListener('resize', initOrDestroySwiperFeaturesSwiper);
  startSwiperBenefits2();
  initOrDestroyFeatures3Swiper();
  window.addEventListener('resize', initOrDestroyFeatures3Swiper);
  initOrDestroyBonusesAppSwiper();
  window.addEventListener('resize', initOrDestroyBonusesAppSwiper);
  initOrDestroyVSSwiper();
  window.addEventListener('resize', initOrDestroyVSSwiper);
  startDataSwiper();
  startTroubleshootingSwiper();
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

function startEveningSwiper2() {
  const eveningSwiper2 = new Swiper('.eveningSwiper2', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.5,
    spaceBetween: 10,
    initialSlide: 0,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: false,
    pagination: {
      el: '.evening2__swiper-pagination',
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
          el: '.evening2__swiper-pagination',
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
          el: '.evening2__swiper-pagination',
          clickable: true,
        },
        autoplay: false,
      },
      1260: {
        slidesPerView: 5,
        spaceBetween: 20,
        initialSlide: 2,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
      },
    },
  });
}

function initOrDestroyInfoSwiper() {
  const screenWidth = window.innerWidth;
  let infoSwiper = null;

  if (screenWidth <= 620 && !infoSwiper) {
    infoSwiper = new Swiper('.appInfoSwiper', {
      modules: [Pagination],
      loop: true,
      slidesPerView: 1.2,
      grabCursor: true,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 0,
      autoplay: false,
      pagination: {
        el: '.info__swiper-pagination',
        clickable: true,
      },
    });
  } else if (screenWidth > 620 && infoSwiper) {
    infoSwiper.destroy(true, true);
    infoSwiper = null;
  }
}

function initCasinosSwiper() {
  const swiper = new Swiper('.casinosSwiper', {
    modules: [Pagination, Navigation],
    loop: true,
    slidesPerView: 1.1,
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
      el: '.casinos__swiper-pagination',
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
          el: '.casinos__swiper-pagination',
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

function initOrDestroyFeatures3Swiper() {
  let swiperFeatures3 = null;

  const screenWidth = window.innerWidth;

  if (screenWidth <= 799 && !swiperFeatures3) {
    swiperFeatures3 = new Swiper('.features3Swiper', {
      modules: [Navigation, Pagination],

      loop: true,
      slidesPerView: 1.05,
      grabCursor: true,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 0,
      autoplay: false,
      pagination: {
        el: '.features3__swiper-pagination',
        clickable: true,
      },
    });
  } else if (screenWidth > 799 && swiperFeatures3) {
    swiperFeatures3.destroy(true, true);
    swiperFeatures3 = null;
  }
}

function initOrDestroyBonusesAppSwiper() {
  const screenWidth = window.innerWidth;
  let swiperAppBonuses = null;

  if (screenWidth <= 850 && !swiperAppBonuses) {
    swiperAppBonuses = new Swiper('.bonusesAppSwiper', {
      modules: [Navigation, Pagination],

      loop: true,
      slidesPerView: 1.1,
      grabCursor: true,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 0,
      autoplay: false,
      pagination: {
        el: '.bonuses__swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        550: {
          loop: true,
          slidesPerView: 2.5,
          grabCursor: true,
          spaceBetween: 15,
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
  } else if (screenWidth > 850 && swiperAppBonuses) {
    swiperAppBonuses.destroy(true, true);
    swiperAppBonuses = null;
  }
}

function initOrDestroyVSSwiper() {
  const screenWidth = window.innerWidth;
  let swiperVS = null;
  if (screenWidth <= 850 && !swiperVS) {
    swiperVS = new Swiper('.vsSwiper', {
      modules: [Navigation, Pagination],

      slidesPerView: 1.5,
      grabCursor: true,
      spaceBetween: 0,
      centeredSlides: true,
      initialSlide: 1,
      pagination: {
        el: '.vs__swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        550: {
          slidesPerView: 2.5,
          slidesOffsetAfter: 30,
          grabCursor: true,
          spaceBetween: 0,
          centeredSlides: false,
          initialSlide: 0,
          pagination: {
            el: '.vs__swiper-pagination',
            clickable: true,
          },
        },
      },
    });
  } else if (screenWidth > 850 && swiperVS) {
    swiperVS.destroy(true, true);
    swiperVS = null;
  }
}

function startDataSwiper() {
  const dataSwiper = new Swiper('.dataSwiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1.1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.data__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
    breakpoints: {
      420: {
        slidesPerView: 1.1,
        spaceBetween: 25,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.data__swiper-pagination',
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
          el: '.data__swiper-pagination',
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
          el: '.data__swiper-pagination',
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
          el: '.data__swiper-pagination',
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
          el: '.data__swiper-pagination',
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

function startTroubleshootingSwiper() {
  const troubleshootingSwiper = new Swiper('.troubleshootingSwiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.troubleshooting__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.troubleshooting__swiper-pagination',
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
          el: '.troubleshooting__swiper-pagination',
          clickable: true,
        },
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        initialSlide: 0,
        autoplay: false,
        pagination: {
          el: '.troubleshooting__swiper-pagination',
          clickable: true,
        },
      },
      1030: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 10,
        grabCursor: true,
      },
      1325: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
      },
    },
  });
}
