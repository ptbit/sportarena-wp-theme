//Реализация бургер-меню
import { burger } from './functions/burger';

//Language
// import { languageComponent } from './components/languageComponent.js';

//Acordeon
import { accorderon } from './functions/accorderon';

//Footer cookie
// import { footerCookie } from './components/footerCookieComponent';

//btn scrollTop
import { scrollTop } from './components/scrollTopComponent';

//Blocks
import { bestItemMobButton } from './components/home/bestItem-mobButtonComponent';

// Реализация скрола по якорю
//import { scrollAnchors } from './functions/scrollAnchors';

//News Tabs
// import { tabsBtnNews } from './components/tabsBtnNewsComponent.js';

// import { footerMenu } from './new-page-scripts/footer-menu.js';
// console.log('footer menu');
document.addEventListener('DOMContentLoaded', footerMenu);
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
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// const swiper = new Swiper('.info__swiper', {

  // autoplay: {
  //   delay: 5000,
  // },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // bulletActiveClass: 'swiper-pagination-bullet-active',

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
// });
