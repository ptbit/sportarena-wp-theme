/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/dynamicAdaptive.js":
/*!**********************************************!*\
  !*** ./src/js/components/dynamicAdaptive.js ***!
  \**********************************************/
/***/ (() => {

"use strict";
// e.x. data-da=".item,992,2"



function DynamicAdapt(type) {
  this.type = type;
}
DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }
  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ",");
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === "last" || place >= destination.children.length) {
    destination.insertAdjacentElement("beforeend", element);
    return;
  }
  if (place === "first") {
    destination.insertAdjacentElement("afterbegin", element);
    return;
  }
  destination.children[place].insertAdjacentElement("beforebegin", element);
};

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement("beforebegin", element);
  } else {
    parent.insertAdjacentElement("beforeend", element);
  }
};

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === "first" || b.place === "last") {
          return -1;
        }
        if (a.place === "last" || b.place === "first") {
          return 1;
        }
        return a.place - b.place;
      }
      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === "first" || b.place === "last") {
          return 1;
        }
        if (a.place === "last" || b.place === "first") {
          return -1;
        }
        return b.place - a.place;
      }
      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};
const da = new DynamicAdapt("max");
da.init();

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

/***/ }),

/***/ "./src/js/functions/scrollAnchors.js":
/*!*******************************************!*\
  !*** ./src/js/functions/scrollAnchors.js ***!
  \*******************************************/
/***/ (() => {

//скролл по якорю

const anchors = document.querySelectorAll('a[href*="#"]');
for (const anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
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
/*!********************************!*\
  !*** ./src/js/script-page8.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inputHeaderComponent */ "./src/js/components/inputHeaderComponent.js");
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scrollTopComponent */ "./src/js/components/scrollTopComponent.js");
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/accorderon */ "./src/js/functions/accorderon.js");
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_functions_accorderon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_scrollAnchors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/scrollAnchors */ "./src/js/functions/scrollAnchors.js");
/* harmony import */ var _functions_scrollAnchors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_functions_scrollAnchors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabsBtnNewsComponent.js */ "./src/js/components/tabsBtnNewsComponent.js");
/* harmony import */ var _components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_tabsBtnNewsComponent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dynamicAdaptive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dynamicAdaptive.js */ "./src/js/components/dynamicAdaptive.js");
/* harmony import */ var _components_dynamicAdaptive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_dynamicAdaptive_js__WEBPACK_IMPORTED_MODULE_6__);
//Реализация бургер-меню


//header input


//Footer cookie
//import { footerCookie } from './components/footerCookieComponent';

//btn scrollTop


//Acordeon


// Реализация скрола по якорю


//News Tabs


// Dynamic Adaptive

})();

/******/ })()
;
//# sourceMappingURL=script-page8.map