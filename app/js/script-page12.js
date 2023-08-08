/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/inputHeaderComponent.js":
/*!***************************************************!*\
  !*** ./src/js/components/inputHeaderComponent.js ***!
  \***************************************************/
/***/ (() => {

const inputButton = document.querySelector('.header__search-btn');
const inputText = document.querySelector('.header__search-input');
const inputSearchImage = document.querySelector('.header__search-image');
//menu om search
const searchFilled = document.querySelector('.search-dd__filled');
if (window.innerWidth > 1024) {
  inputButton.addEventListener('click', event => {
    inputText.classList.toggle('_active');
    inputButton.classList.toggle('_active');
    inputSearchImage.classList.toggle('_active');
    searchFilled.classList.toggle('_active');
  });
}

/***/ }),

/***/ "./src/js/components/scrollTopComponent.js":
/*!*************************************************!*\
  !*** ./src/js/components/scrollTopComponent.js ***!
  \*************************************************/
/***/ (() => {

const btnUp = {
  el: document.querySelector('.footer__btn-top'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('_hidden');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('_hidden');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.footer__btn-top').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
  }
};
btnUp.addEventListener();

/***/ }),

/***/ "./src/js/components/tabsBtnBlogComponent.js":
/*!***************************************************!*\
  !*** ./src/js/components/tabsBtnBlogComponent.js ***!
  \***************************************************/
/***/ (() => {

const btnTabsBlogOne = document.querySelector('.blog__tabs-btn-one');
const btnTabsBlogTwo = document.querySelector('.blog__tabs-btn-two');
const blogItemListOne = document.querySelector('.blog__list-one');
const blogItemListTwo = document.querySelector('.blog__list-two');
btnTabsBlogOne.addEventListener('click', () => {
  btnTabsBlogOne.classList.add('_active');
  blogItemListOne.classList.remove('_hidden');
  btnTabsBlogTwo.classList.remove('_active');
  blogItemListTwo.classList.add('_hidden');
});
btnTabsBlogTwo.addEventListener('click', () => {
  btnTabsBlogTwo.classList.add('_active');
  blogItemListTwo.classList.remove('_hidden');
  btnTabsBlogOne.classList.remove('_active');
  blogItemListOne.classList.add('_hidden');
});

/***/ }),

/***/ "./src/js/components/tabsBtnNewsComponent.js":
/*!***************************************************!*\
  !*** ./src/js/components/tabsBtnNewsComponent.js ***!
  \***************************************************/
/***/ (() => {

const btnTabsOne = document.querySelector('.casino-online__tabs-btn-one');
const btnTabsTwo = document.querySelector('.casino-online__tabs-btn-two');
const newsItemListOne = document.querySelector('.casino-online__list-one');
const newsItemListTwo = document.querySelector('.casino-online__list-two');
btnTabsOne.addEventListener('click', () => {
  btnTabsOne.classList.add('_active');
  newsItemListOne.classList.remove('_hidden');
  btnTabsTwo.classList.remove('_active');
  newsItemListTwo.classList.add('_hidden');
});
btnTabsTwo.addEventListener('click', () => {
  btnTabsTwo.classList.add('_active');
  newsItemListTwo.classList.remove('_hidden');
  btnTabsOne.classList.remove('_active');
  newsItemListOne.classList.add('_hidden');
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (() => {

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");
iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
});

//openMenu on mob
const itemMenuSub = document.querySelectorAll('.menu__item-sub_list');
const itemMenuSub2 = document.querySelectorAll('.menu__item-sub_list-2');
const itemMenuSub3 = document.querySelectorAll('.menu__item-sub_list-3');
const itemHoverDesc = document.querySelectorAll('.menu__item-hover-desc');
const itemHoverDesc2 = document.querySelectorAll('.menu__item-hover-desc-2');
const itemHoverDesc3 = document.querySelectorAll('.menu__item-hover-desc-3');
if (window.innerWidth <= 1024) {
  itemHoverDesc.forEach(item => {
    item.classList.remove('menu__item-hover-desc');
  });
  itemHoverDesc2.forEach(item => {
    item.classList.remove('menu__item-hover-desc-2');
  });
  itemHoverDesc3.forEach(item => {
    item.classList.remove('menu__item-hover-desc-3');
  });
  itemMenuSub.forEach(item => {
    let menuSub = item.querySelector('.menu__item-list');
    let menuSubLink = item.querySelector('.menu__link');
    menuSubLink.addEventListener('click', () => {
      menuSub.classList.toggle('_open');
    });
  });
  itemMenuSub2.forEach(item => {
    let menuSub2 = item.querySelector('.menu__item-list-2');
    let menuSub2Link = item.querySelector('.menu__item-link');
    menuSub2Link.addEventListener('click', () => {
      menuSub2.classList.toggle('_open');
    });
  });
  itemMenuSub3.forEach(item => {
    let menuSub3 = item.querySelector('.menu__item-list-3');
    let menuSub3Link = item.querySelector('.menu__item-link');
    menuSub3Link.addEventListener('click', () => {
      menuSub3.classList.toggle('_open');
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/js/script-page12.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inputHeaderComponent */ "./src/js/components/inputHeaderComponent.js");
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scrollTopComponent */ "./src/js/components/scrollTopComponent.js");
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabsBtnNewsComponent.js */ "./src/js/components/tabsBtnNewsComponent.js");
/* harmony import */ var _components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_tabsBtnBlogComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabsBtnBlogComponent.js */ "./src/js/components/tabsBtnBlogComponent.js");
/* harmony import */ var _components_tabsBtnBlogComponent_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_tabsBtnBlogComponent_js__WEBPACK_IMPORTED_MODULE_4__);
//Реализация бургер-меню


//header input


//Footer cookie
//import { footerCookie } from './components/footerCookieComponent';

//btn scrollTop


//Acordeon
//import { accorderon } from './functions/accorderon';

//News Tabs


//Blog Tabs

})();

/******/ })()
;
//# sourceMappingURL=script-page12.map