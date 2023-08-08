/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/shortComponents/short5-component.js":
/*!***************************************************************!*\
  !*** ./src/js/components/shortComponents/short5-component.js ***!
  \***************************************************************/
/***/ (() => {

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
      const elHeader = e.target.closest(".casino-accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".casino-accordion__item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector(".casino-accordion__body");
    if (elBody.classList.contains("collapsing") || el.classList.contains("casino-accordion__item_show")) {
      return;
    }
    elBody.style["display"] = "block";
    const height = elBody.offsetHeight;
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.add("collapsing");
    el.classList.add("casino-accordion__item_slidedown");
    elBody.offsetHeight;
    elBody.style["height"] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      el.classList.remove("casino-accordion__item_slidedown");
      elBody.classList.add("collapse");
      el.classList.add("casino-accordion__item_show");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector(".casino-accordion__body");
    if (elBody.classList.contains("collapsing") || !el.classList.contains("casino-accordion__item_show")) {
      return;
    }
    elBody.style["height"] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style["display"] = "block";
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove("collapse");
    el.classList.remove("casino-accordion__item_show");
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
    el.classList.contains("casino-accordion__item_show") ? this.hide(el) : this.show(el);
  }
}
new ItcAccordion(document.querySelector(".casino-accordion"), {
  alwaysOpen: false
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
/*!**************************!*\
  !*** ./src/js/short5.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_shortComponents_short5_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shortComponents/short5-component.js */ "./src/js/components/shortComponents/short5-component.js");
/* harmony import */ var _components_shortComponents_short5_component_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_shortComponents_short5_component_js__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=short5.map