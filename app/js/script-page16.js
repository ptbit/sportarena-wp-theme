/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/home/bestItem-mobButtonComponent.js":
/*!***************************************************************!*\
  !*** ./src/js/components/home/bestItem-mobButtonComponent.js ***!
  \***************************************************************/
/***/ (() => {

const bestItemWrapper = document.querySelectorAll('.best__item-wrapper');
const bestList = document.querySelector('.best__list');
bestItemWrapper.forEach(item => {
  let btnShow = item.querySelector('.best__item-reviews-btn');
  let listReviews = item.querySelector('.best__item-reviews');
  btnShow.addEventListener('click', () => {
    const allBtnShow = document.querySelectorAll('.best__item-reviews-btn');
    listReviews.classList.toggle('_show');
    if (!btnShow.classList.contains('_openList')) {
      bestList.classList.add('_openItem');
    } else {
      bestList.classList.remove('_openItem');
    }
    btnShow.classList.toggle('_openList');
    allBtnShow.forEach(item => {
      if (item.classList.contains('_openList')) {
        bestList.classList.add('_openItem');
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/home/slotItem-Component.js":
/*!******************************************************!*\
  !*** ./src/js/components/home/slotItem-Component.js ***!
  \******************************************************/
/***/ (() => {

const slotItem = document.querySelectorAll('.slot__item');
slotItem.forEach(item => {
  let btnItemShow = item.querySelector('.slot__item-info');
  let textItemInfo = item.querySelector('.slot__item-info-text');
  btnItemShow.addEventListener('click', () => {
    textItemInfo.classList.toggle('_show');
  });
});

/***/ }),

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
  !*** ./src/js/script-page16.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/accorderon */ "./src/js/functions/accorderon.js");
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_accorderon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inputHeaderComponent */ "./src/js/components/inputHeaderComponent.js");
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scrollTopComponent */ "./src/js/components/scrollTopComponent.js");
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_home_bestItem_mobButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/bestItem-mobButtonComponent */ "./src/js/components/home/bestItem-mobButtonComponent.js");
/* harmony import */ var _components_home_bestItem_mobButtonComponent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_home_bestItem_mobButtonComponent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_home_slotItem_Component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/slotItem-Component.js */ "./src/js/components/home/slotItem-Component.js");
/* harmony import */ var _components_home_slotItem_Component_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_home_slotItem_Component_js__WEBPACK_IMPORTED_MODULE_5__);
//Реализация бургер-меню


//Acordeon


//header input


//Footer cookie
//import { footerCookie } from './components/footerCookieComponent';

//btn scrollTop


//Blocks


})();

/******/ })()
;
//# sourceMappingURL=script-page16.map