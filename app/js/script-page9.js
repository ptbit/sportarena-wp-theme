/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/footerCookieComponent.js":
/*!****************************************************!*\
  !*** ./src/js/components/footerCookieComponent.js ***!
  \****************************************************/
/***/ (() => {

//localStorage.clear();
const footer = document.querySelector('.footer');
const language = 'EN';
window.addEventListener('load', () => {
  if (localStorage.getItem('cookieStatus') !== 'true') {
    const cookieBlock = document.createElement('div');
    cookieBlock.classList.add('footer__cookie');
    footer.append(cookieBlock);
    let textCookie = '';
    let textBtn = '';
    if (language === 'EN') {
      textCookie = 'This site uses cookies to save data. By continuing to follow the site, you will be welcome to save cookies';
      textBtn = 'Okey';
    } else {
      textCookie = 'Этот сайт использует файлы cookie для сохранения данных. Продолжая следить за сайтом, вы можете сохранить файлы cookie.';
      textBtn = 'Океюшки';
    }
    const closeBtn = `<div class="close-cookie"><span></span> </div>`;
    const imgCookie = `<div class="footer__cookie-img"><img loading="lazy" src="img/general-block-image/footer/cookie.webp" width="40" height="40" alt="image-casino"></div>`;
    const cookieInfo = `<p class="footer__cookie-text">${textCookie}</p>` + `<button type="button" aria-label="button-close" class="footer__cookie-btn orange-btn">${textBtn}</button>`;
    cookieBlock.innerHTML = closeBtn + imgCookie + cookieInfo;
    const closeBtnDoc = cookieBlock.querySelector('.close-cookie');
    const okBtnDoc = cookieBlock.querySelector('.footer__cookie-btn');
    closeBtnDoc.addEventListener('click', () => {
      cookieBlock.classList.add('_hidden');
    });
    okBtnDoc.addEventListener('click', () => {
      localStorage.setItem('cookieStatus', 'true');
      console.log(localStorage.coockieStatus);
      cookieBlock.classList.add('_hidden');
    });
  }
});

/***/ }),

/***/ "./src/js/components/languageComponent.js":
/*!************************************************!*\
  !*** ./src/js/components/languageComponent.js ***!
  \************************************************/
/***/ (() => {

const languageSelect = document.querySelector('.header__language-select');
const languageSelectEn = document.querySelector('.header__language-en');
const languageSelectPt = document.querySelector('.header__language-pt');
const languageList = document.querySelector('.header__language-list');
const headerLanguage = document.querySelector('.header__language');
languageSelectEn.addEventListener('click', () => {
  languageSelect.classList.remove('_pt');
  languageSelect.classList.add('_en');
  languageSelectPt.classList.remove('_active');
  languageSelectEn.classList.add('_active');
});
languageSelectPt.addEventListener('click', () => {
  languageSelect.classList.add('_pt');
  languageSelect.classList.remove('_en');
  languageSelectPt.classList.add('_active');
  languageSelectEn.classList.remove('_active');
});
if (window.innerWidth <= 1024) {
  headerLanguage.addEventListener('click', () => {
    languageList.classList.toggle('_open');
    headerLanguage.classList.toggle('_open');
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

/***/ "./src/js/functions/accorderon.js":
/*!****************************************!*\
  !*** ./src/js/functions/accorderon.js ***!
  \****************************************/
/***/ (() => {

if (document.querySelector(".accordion") != null) {
  class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === "string" ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener("click", e => {
        const elHeader = e.target.closest(".accordion__header");
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector(".accordion__item_show");
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
          }
        }
        this.toggle(elHeader.parentElement);
      });
    }
    show(el) {
      const elBody = el.querySelector(".accordion__body");
      if (elBody.classList.contains("collapsing") || el.classList.contains("accordion__item_show")) {
        return;
      }
      elBody.style["display"] = "block";
      const height = elBody.offsetHeight;
      elBody.style["height"] = 0;
      elBody.style["overflow"] = "hidden";
      elBody.style["transition"] = `height ${this._config.duration}ms ease`;
      elBody.classList.add("collapsing");
      el.classList.add("accordion__item_slidedown");
      elBody.offsetHeight;
      elBody.style["height"] = `${height}px`;
      window.setTimeout(() => {
        elBody.classList.remove("collapsing");
        el.classList.remove("accordion__item_slidedown");
        elBody.classList.add("collapse");
        el.classList.add("accordion__item_show");
        elBody.style["display"] = "";
        elBody.style["height"] = "";
        elBody.style["transition"] = "";
        elBody.style["overflow"] = "";
      }, this._config.duration);
    }
    hide(el) {
      const elBody = el.querySelector(".accordion__body");
      if (elBody.classList.contains("collapsing") || !el.classList.contains("accordion__item_show")) {
        return;
      }
      elBody.style["height"] = `${elBody.offsetHeight}px`;
      elBody.offsetHeight;
      elBody.style["display"] = "block";
      elBody.style["height"] = 0;
      elBody.style["overflow"] = "hidden";
      elBody.style["transition"] = `height ${this._config.duration}ms ease`;
      elBody.classList.remove("collapse");
      el.classList.remove("accordion__item_show");
      elBody.classList.add("collapsing");
      window.setTimeout(() => {
        elBody.classList.remove("collapsing");
        elBody.classList.add("collapse");
        elBody.style["display"] = "";
        elBody.style["height"] = "";
        elBody.style["transition"] = "";
        elBody.style["overflow"] = "";
      }, this._config.duration);
    }
    toggle(el) {
      el.classList.contains("accordion__item_show") ? this.hide(el) : this.show(el);
    }
  }
  new ItcAccordion(document.querySelector(".accordion"), {
    alwaysOpen: false
  });
}

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
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (menuItem) {
  const submenu = menuItem.querySelector('.sub-menu');
  const submenu2 = menuItem.querySelector('.sub-menu-2');
  const submenu3 = menuItem.querySelector('.sub-menu-3');
  const link = menuItem.querySelector('a');
  menuItem.addEventListener('mouseenter', function () {
    if (window.innerWidth > 1024) {
      if (submenu) submenu.style.display = 'block';
    }
  });
  menuItem.addEventListener('mouseleave', function () {
    if (window.innerWidth > 1024) {
      if (submenu) submenu.style.display = 'none';
    }
  });
  link.addEventListener('click', function (event) {
    if (window.innerWidth <= 1024) {
      menuItem.classList.toggle('mobile-active');
      let nextElement = link.nextElementSibling;
      if (nextElement !== null) {
        event.preventDefault();
      }
      if (nextElement !== null && nextElement.classList.contains('sub-menu-2')) {
        submenu2.classList.toggle('_open');
      }
      if (nextElement !== null && nextElement.classList.contains('sub-menu-3')) {
        submenu3.classList.toggle('_open');
      }
    }
  });
});

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
/*!********************************!*\
  !*** ./src/js/script-page9.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_languageComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/languageComponent.js */ "./src/js/components/languageComponent.js");
/* harmony import */ var _components_languageComponent_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_languageComponent_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footerCookieComponent */ "./src/js/components/footerCookieComponent.js");
/* harmony import */ var _components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scrollTopComponent */ "./src/js/components/scrollTopComponent.js");
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/accorderon */ "./src/js/functions/accorderon.js");
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_functions_accorderon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabsBtnNewsComponent.js */ "./src/js/components/tabsBtnNewsComponent.js");
/* harmony import */ var _components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_5__);
//Реализация бургер-меню


//Language


//Footer cookie


//btn scrollTop


//Acordeon


// Реализация скрола по якорю
//import { scrollAnchors } from './functions/scrollAnchors';

//News Tabs

})();

/******/ })()
;
//# sourceMappingURL=script-page9.map