/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/burger.js":
/*!*****************************!*\
  !*** ./assets/js/burger.js ***!
  \*****************************/
/***/ (() => {

var headerElements = document.querySelector('.header');
var btnBurger = document.querySelector('.burger');
var burgerWhite = document.querySelector('.header--our');
var blocksHeader = headerElements.querySelectorAll('div');
var burgerIcon = headerElements.querySelector('span');
var nav = headerElements.querySelector('.nav');
var navLink = nav.querySelectorAll('.nav__link');
var logoBurger = headerElements.querySelector('.burger__logo');
var shadow = document.querySelector('.shadow');
var widthWindow; // Remove all classes

function removeClass() {
  document.body.classList.remove('active');
  nav.classList.remove('active');
  blocksHeader.forEach(function (x) {
    return x.classList.remove('active');
  });
  burgerIcon.classList.remove('active');
  logoBurger.classList.remove('active__logo');
  shadow.classList.remove('active');
  navLink.forEach(function (x) {
    if (x.querySelector('#text-our')) {
      x.querySelector('a').classList.add('link--our');
      x.querySelector('a').classList.remove('link');

      if (x.querySelector('.active--color')) {
        x.querySelector('a').classList.add('active--link-our');
        x.querySelector('a').classList.remove('active--link');
      }
    }
  });

  if (burgerWhite) {
    burgerWhite.classList.remove('active');
    logoBurger.classList.add('logo--pets');
  }
}

; // Click

if (btnBurger) {
  btnBurger.onclick = function () {
    document.body.classList.toggle('active');
    nav.classList.toggle('active');
    blocksHeader.forEach(function (x) {
      return x.classList.toggle('active');
    });
    burgerIcon.classList.toggle('active');
    logoBurger.classList.toggle('active__logo');
    shadow.classList.toggle('active');

    if (burgerWhite) {
      burgerWhite.classList.toggle('active');
    }

    if (logoBurger.classList.contains('logo--pets')) {
      logoBurger.classList.remove('logo--pets');
    } else {
      if (burgerWhite) {
        logoBurger.classList.add('logo--pets');
      }
    }

    navLink.forEach(function (x) {
      if (x.querySelector('#text-our')) {
        x.querySelector('a').classList.toggle('link--our');
        x.querySelector('a').classList.toggle('link');
      }

      if (x.querySelector('.active--color')) {
        x.querySelector('a').classList.toggle('active--link-our');
        x.querySelector('a').classList.toggle('active--link');
      }
    });
  };
}

navLink.forEach(function (x) {
  return x.onclick = function (el) {
    removeClass();
  };
}); // Remove

window.addEventListener("orientationchange", removeClass);
window.addEventListener('resize', function (el) {
  widthWindow = window.innerWidth;

  if (widthWindow > 767) {
    removeClass();
  }
});
shadow.addEventListener('click', removeClass);

/***/ }),

/***/ "./assets/js/pagination.js":
/*!*********************************!*\
  !*** ./assets/js/pagination.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main/pets.json */ "./main/pets.json");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./assets/js/popup.js");



var BUTNS = document.querySelector('.btns__slider-pets');
var pagBlocks = document.querySelectorAll('.pagination__block');
var allPagBtns = BUTNS.querySelectorAll('.btn__our-pets');
var numberStr = document.querySelector('.num__page-slider');
var btnR = BUTNS.querySelector('.pets--right');
var btnAllR = BUTNS.querySelector('.pets--all__right');
var btnL = document.querySelector('.pets--left');
var btnAllL = document.querySelector('.pets--left__all');
var arrays = [];
var bigArrays = [];
BUTNS.addEventListener('click', function (ev) {
  if (ev.target.className === 'btn__our-pets pets--right') {
    numberStr.innerHTML = +numberStr.textContent + 1;
    allPagBtns.forEach(function (x) {
      return x.classList.remove('inactive');
    });

    if (+numberStr.textContent !== 1 && +numberStr.textContent !== 6) {
      allPagBtns.forEach(function (x) {
        return x.classList.remove('inactive');
      });
      allPagBtns.forEach(function (x) {
        return x.removeAttribute('disabled');
      });
    }
  }

  if (ev.target.className === 'btn__our-pets pets--left') {
    numberStr.innerHTML = +numberStr.textContent - 1;
    allPagBtns.forEach(function (x) {
      return x.classList.remove('inactive');
    });

    if (+numberStr.textContent !== 1 && +numberStr.textContent !== 6) {
      allPagBtns.forEach(function (x) {
        return x.classList.remove('inactive');
      });
    }
  }

  if (ev.target.className === 'btn__our-pets pets--all__right' || ev.target.className === 'btn__our-pets pets--left__all') {
    allPagBtns.forEach(function (x) {
      return x.classList.remove('inactive');
    });
    numberStr.innerHTML = 6;
  }

  if (ev.target.className === 'btn__our-pets pets--left__all') {
    allPagBtns.forEach(function (x) {
      return x.classList.remove('inactive');
    });
    numberStr.innerHTML = 1;
  }

  if (+numberStr.textContent === 6) {
    btnR.classList.add('inactive');
    btnR.setAttribute("disabled", "disabled");
    btnAllR.classList.add('inactive');
    btnAllR.setAttribute("disabled", "disabled");
    btnL.classList.remove('inactive');
    btnL.removeAttribute("disabled");
    btnAllL.classList.remove('inactive');
    btnAllL.removeAttribute("disabled");
  }

  if (+numberStr.textContent === 1) {
    btnL.classList.add('inactive');
    btnL.setAttribute("disabled", "disabled");
    btnAllL.classList.add('inactive');
    btnAllL.setAttribute("disabled", "disabled");
    btnR.classList.remove('inactive');
    btnR.removeAttribute("disabled");
    btnAllR.classList.remove('inactive');
    btnAllR.removeAttribute("disabled");
  }
});

function newArrNames() {
  pagBlocks.forEach(function (x) {
    return arrays.push(x.querySelector('.our__pets--slider').textContent);
  });
}

newArrNames();

function randName() {
  for (var i = 0; i < arrays.length; i++) {
    var arrN = [];
  }
}

/***/ }),

/***/ "./assets/js/popup.js":
/*!****************************!*\
  !*** ./assets/js/popup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popurRun": () => (/* binding */ popurRun)
/* harmony export */ });
/* harmony import */ var _main_pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main/pets.json */ "./main/pets.json");

var slide = document.querySelector('.pets__slider');
var paginSlide = document.querySelector('.slide__pagination');
var popupPets = document.querySelector('.popup--pets');
var slider = document.querySelector('.slider__carousel');
var popup = document.querySelector('.popup'); // const id = Array.from(document.all).map(i => i.id).filter(i => i != "");

var arrId = ["img", "name", "type", "breed", "description", "age", "inoculations", "diseases", "parasites"];
console.log(paginSlide);
function popurRun() {
  if (slide) {
    slider.querySelectorAll('.slider__block').forEach(function (el) {
      el.addEventListener('click', function (x) {
        var namePet = el.id;
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
        openPopup(namePet);
      });
    });
  } else if (paginSlide) {
    paginSlide.querySelectorAll('.pagination__block').forEach(function (el) {
      el.addEventListener('click', function (x) {
        var namePet = el.id;
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
        openPopup(namePet);
      });
    });
  }
}

var openPopup = function openPopup(el) {
  var namePets = el.slice(0, 1).toUpperCase() + el.slice(1);
  _main_pets_json__WEBPACK_IMPORTED_MODULE_0__.forEach(function (j) {
    if (namePets === j.name) {
      arrId.forEach(function (i) {
        if (i === 'img') {
          if (popupPets) {
            popup.querySelector("#".concat(i)).innerHTML = "<img src=\"../".concat(j[i], "\">");
          } else {
            popup.querySelector("#".concat(i)).innerHTML = "<img src=\"".concat(j[i], "\">");
          }
        } else {
          popup.querySelector("#".concat(i)).innerText = j[i];
        }
      });
    }
  });
};

var closePopup = function closePopup() {
  popup.classList.remove('active');
  document.body.style.overflow = '';
};

popup.addEventListener('click', function (ev) {
  ev.target.classList.forEach(function (x) {
    if (x === 'popup') closePopup();
  });
});
popurRun();
popup.querySelector('.popup__close').addEventListener('click', closePopup);

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ "./assets/js/burger.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./assets/js/popup.js");
/* harmony import */ var _sliderMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliderMain.js */ "./assets/js/sliderMain.js");
/* harmony import */ var _pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.js */ "./assets/js/pagination.js");





/***/ }),

/***/ "./assets/js/sliderMain.js":
/*!*********************************!*\
  !*** ./assets/js/sliderMain.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main/pets.json */ "./main/pets.json");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./assets/js/popup.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var slide = document.querySelector('.pets__slider');
var item = document.querySelectorAll('.item');
var BTN_LEFT = document.querySelector(".btn__left");
var BTN_RIGHT = document.querySelector(".btn__right");
var CAROUSEL = document.querySelector("#slider__carousel");
var ITEM_LEFT = document.querySelector("#item-left");
var ITEM_RIGHT = document.querySelector("#item-right");
var namesPets = ['sophia', 'timmy', 'scarlet', 'freddie', 'charly', 'woody', 'jennifer', 'katrine'];
var arrCards = [];
var arr = [];
var num = 0;
var count = 0;
var numCards = 0;

var lengthItem = function lengthItem(numCards) {
  return item.forEach(function (x) {
    x.querySelectorAll('.slider__block').forEach(function (i, l) {
      if (l >= numCards) i.remove('div');
    });
  });
};

var widthWindow = function widthWindow() {
  var size = window.innerWidth;
  if (size > 1279) numCards = 3;

  if (size <= 1279 && size > 767) {
    numCards = 2;
    lengthItem(numCards);
  }

  ;

  if (size <= 767) {
    numCards = 1;
    lengthItem(numCards);
  }

  ;
};

setInterval(widthWindow, 100);

var newCard = function newCard() {
  if (count === numCards) {
    count = 0;
    arr = arrCards.slice();
    arrCards = [];
  }

  var card = document.createElement('div');

  while (arrCards.length < numCards) {
    num = Math.floor(Math.random() * 8);

    if (!arr.includes(namesPets[num]) && !arrCards.includes(namesPets[num])) {
      arrCards.push(namesPets[num]);
    }
  }

  var _iterator = _createForOfIteratorHelper(_main_pets_json__WEBPACK_IMPORTED_MODULE_0__),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var j = _step.value;
      var card_img = document.createElement("div");
      var img = document.createElement("img");
      var card_text = document.createElement("div");
      var btn = document.createElement('button');
      var title = document.createElement('h3');

      if (count < numCards) {
        card.classList.add('slider__block');

        if (arrCards[count] === j['name'].toLowerCase()) {
          card.classList.add("slider__block");
          btn.classList.add('btn', 'btn__white');
          btn.innerText = 'Learn more';
          card_text.classList.add('slider__title');
          title.classList.add('our__pets--slider');
          img.src = j.img;
          card_img.classList.add('slider__img');
          title.innerText = j.name;
          card_text.appendChild(title);
          card_img.appendChild(img);
          card.appendChild(card_img);
          card.appendChild(card_text);
          card.appendChild(btn);
          card.id = "".concat(j.name.toLowerCase());
          count++;
          return card;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

if (slide) {
  var moveLeft = function moveLeft() {
    CAROUSEL.classList.add("transition-left");
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
  };

  var moveRight = function moveRight() {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
  CAROUSEL.addEventListener("animationend", function (ev) {
    var itemChange;

    if (ev["animationName"] === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      itemChange = ITEM_LEFT;
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove("transition-right");
      itemChange = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    itemChange.innerHTML = '';
    widthWindow();

    for (var i = 0; i < numCards; i++) {
      var card = newCard();
      itemChange.append(card);
      (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.popurRun)();
    }
  });
}

/***/ }),

/***/ "./main/index.html":
/*!*************************!*\
  !*** ./main/index.html ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/start-screen-puppy.png */ "./assets/img/start-screen-puppy.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/about-pets.png */ "./assets/img/about-pets.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/left.svg */ "./assets/icons/left.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-katrine.png */ "./assets/img/pets-katrine.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-jennifer.png */ "./assets/img/pets-jennifer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-woody.png */ "./assets/img/pets-woody.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-charly.png */ "./assets/img/pets-charly.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-freddie.png */ "./assets/img/pets-freddie.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-scarlet.png */ "./assets/img/pets-scarlet.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-sophia.png */ "./assets/img/pets-sophia.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-timmy.png */ "./assets/img/pets-timmy.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/right.svg */ "./assets/icons/right.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-pet-food.svg */ "./assets/icons/icon-pet-food.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-transportation.svg */ "./assets/icons/icon-transportation.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons//icon-toys.svg */ "./assets/icons/icon-toys.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-bowls-and-cups.svg */ "./assets/icons/icon-bowls-and-cups.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-shampoos.svg */ "./assets/icons/icon-shampoos.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-vitamins.svg */ "./assets/icons/icon-vitamins.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-medicines.svg */ "./assets/icons/icon-medicines.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-collars-leashes.svg */ "./assets/icons/icon-collars-leashes.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-sleeping-area.svg */ "./assets/icons/icon-sleeping-area.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/donation-dog.png */ "./assets/img/donation-dog.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/credit-card.svg */ "./assets/icons/credit-card.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-email.svg */ "./assets/icons/icon-email.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-phone.svg */ "./assets/icons/icon-phone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-marker.svg */ "./assets/icons/icon-marker.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#left" });
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___, { hash: "#right" });
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___, { hash: "#food" });
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___, { hash: "#transplont" });
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___, { hash: "#toy" });
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___, { hash: "#cup" });
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___, { hash: "#shampoo" });
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___, { hash: "#vit" });
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___, { hash: "#med" });
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___, { hash: "#colar" });
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___, { hash: "#sleep" });
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___, { hash: "#card" });
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___, { hash: "#mail" });
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___, { hash: "#phone" });
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___, { hash: "#marker" });
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Cozy House</title>\n</head>\n\n<body class=\"act\">\n  <div class=\"shadow\"></div>\n\n  <!--Header-->\n  <header class=\"header\">\n    <div class=\"container container__start\">\n      <div class=\"header__content\">\n        <div class=\"header__logo\">\n          <a href=\"#\">\n            <h1 class=\"logo__title\">Cozy House</h1>\n            <div class=\"logo__subtitle\">Shelter for pets in Boston</div>\n          </a>\n        </div>\n\n        <div class=\"header__nav\">\n          <nav class=\"nav\">\n            <ul class=\"list__nav\">\n              <li class=\"nav__link active\">\n                <a class=\"link active--link\" href=\"#\">About the shelter</a>\n              </li>\n              <li class=\"nav__link\">\n                <a class=\"link\" href=\"./pages/pets.html\">Our pets</a>\n              </li>\n              <li class=\"nav__link\">\n                <a class=\"link\" href=\"#help\">Help the shelter</a>\n              </li>\n              <li class=\"nav__link\">\n                <a class=\"link\" href=\"#footer\">Contacts</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"block__color\">\n            <div class=\"header__logo burger__logo\">\n              <a href=\"#\">\n                <h1 class=\"logo__title\">Cozy House</h1>\n                <div class=\"logo__subtitle\">Shelter for pets in Boston</div>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"burger\">\n          <span></span>\n        </div>\n      </div>\n    </div>\n\n  </header>\n\n  <!-- Main/ Start screen -->\n  <main class=\"main\">\n    <section class=\"start__screen\">\n      <div class=\"container\">\n        <div class=\"start__content\">\n          <div class=\"start__description\">\n            <div class=\"section__title start__title\">\n              <h2 class=\"content__title\">\n                Not only people need a house\n              </h2>\n            </div>\n\n            <div class=\"start__text\">\n              <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she\n                will love you more than anybody else in the world, you will see!</p>\n            </div>\n            <form action=\"#friend\">\n              <button class=\"btn btn--start\">\n                Make a friend\n              </button>\n            </form>\n          </div> <!-- ./start__description -->\n\n          <div class=\"start__image\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"img\">\n          </div>\n        </div> <!-- ./start__content -->\n      </div>\n    </section>\n  </main>\n\n  <!-- About -->\n  <section class=\"about\">\n    <div class=\"container\">\n      <div class=\"about__content\">\n        <div class=\"about__image\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n        </div>\n\n        <div class=\"about__descr\">\n          <div class=\"section__title\">\n\n            <div class=\"about__title\">\n              <h2 class=\"title\">About the shelter &ldquo;Cozy House&rdquo;</h2>\n            </div>\n          </div> <!-- ./section__title -->\n          <div class=\"about__text\">\n            <p>\n              Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will\n              find a family. The others will continue to live with us and will be waiting for a lucky chance to\n              become dearly loved.\n\n            </p>\n            <p>\n              We feed our wards with the best food and make sure that they do not get sick, feel comfortable\n              (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various\n              skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals,\n              they become attached to the pets and would hardly ever leave them alone.\n            </p>\n          </div> <!-- ./about__text -->\n\n        </div> <!-- ./about__descr -->\n      </div> <!-- ./about__content -->\n    </div> <!-- ./container -->\n  </section>\n\n  <!--Slider -->\n  <section class=\"pets\" id=\"friend\">\n    <div class=\"container\">\n      <div class=\"pets__content\">\n        <div class=\"section__title title--pets\">\n          <h2 class=\"title\">Our friends who<br>\n            are looking for a house</h2>\n        </div>\n\n        <div class=\"pets__slider\" id=\"pets-slider\">\n          <button class=\"btn btn__left\" type=\"button\" id=\"btn__left\">\n            <svg class=\"icon\">\n              <use class=\"icon__color\" xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"></use>\n            </svg>\n          </button>\n          <div class=\"slider__cards\" id=\"slider cards\">\n\n            <div class=\"slider__carousel\" id=\"slider__carousel\">\n              <div class=\"item\" id=\"item-left\">\n                <div class=\"slider__block\" id=\"katrine\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Katrine</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n                <div class=\"slider__block\" id=\"jennifer\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Jennifer</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n                <div class=\"slider__block\" id=\"woody\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Woody</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n              </div>\n              <div class=\"item\" id=\"item-active\">\n                <div class=\"slider__block\" id=\"charly\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Charly</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n                <div class=\"slider__block\" id=\"freddie\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Freddie</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n                <div class=\"slider__block\" id=\"scarlet\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Scarlet</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"item\" id=\"item-right\">\n                <div class=\"slider__block\" id=\"sophia\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Sophia</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n                <div class=\"slider__block\" id=\"timmy\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Timmy</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n                <div class=\"slider__block\" id=\"katrine\">\n                  <div class=\"slider__img\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                  </div>\n                  <div class=\"slider__title\">\n                    <h3 class=\"our__pets--slider\">Katrine</h3>\n                  </div>\n                  <button class=\"btn btn__white\">\n                    Learn more\n                  </button>\n                </div>\n              </div>\n            </div> <!-- ./slider__carousel -->\n          </div> <!-- slider__cards -->\n\n          <button class=\"btn btn__right\" type=\"button\" id=\"btn__right\">\n            <svg class=\"icon\">\n              <use class=\"icon__color\" xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"></use>\n            </svg>\n          </button>\n\n        </div> <!-- ./pets__slider -->\n        <form action=\"./pages/pets.html\"><button class=\"btn btn__pets\">Get to know the rest</button></form>\n\n      </div> <!-- ./pets__content -->\n    </div> <!-- ./container -->\n\n  </section>\n\n  <!-- Help -->\n  <section class=\"help\" id=\"help\">\n    <div class=\"container container__help\">\n      <div class=\"section__title\">\n        <h2 class=\"title  title__help\">How you can help\n          our shelter</h2>\n      </div>\n\n      <div class=\"help__list\">\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"></use>\n            </svg>\n          </div>\n          <div class=\"help__title\">\n            <h3>Pet food</h3>\n          </div>\n        </div>\n\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"></use>\n            </svg>\n          </div>\n          <div class=\"help__title\">\n            <h3>Transportation</h3>\n          </div>\n        </div>\n\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"></use>\n            </svg>\n          </div>\n          <div class=\"help__title\">\n            <h3>Toys</h3>\n          </div>\n        </div>\n\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"></use>\n            </svg>\n          </div>\n          <div class=\"help__title\">\n            <h3>Bowls and cups</h3>\n          </div>\n        </div>\n\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\"></use>\n            </svg>\n          </div>\n\n          <div class=\"help__title\">\n            <h3>Shampoos</h3>\n          </div>\n        </div>\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"></use>\n            </svg>\n          </div>\n\n          <div class=\"help__title\">\n            <h3>Vitamins</h3>\n          </div>\n        </div>\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"></use>\n            </svg>\n          </div>\n          <div class=\"help__title\">\n            <h3>Medicines</h3>\n          </div>\n        </div>\n\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\"></use>\n            </svg>\n          </div>\n          <div class=\"help__title\">\n            <h3>Collars &sol; leashes</h3>\n          </div>\n        </div>\n\n        <div class=\"help__cards\">\n          <div class=\"help__img\">\n            <svg class=\"help__icon\">\n              <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"></use>\n            </svg>\n          </div>\n          <div class=\"help__title\">\n            <h3>Sleeping areas</h3>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n  <section class=\"donation\">\n    <div class=\"container\">\n      <div class=\"donation__content\">\n        <div class=\"donation__img\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\n        </div>\n\n        <div class=\"donation__pay\">\n          <div class=\"section__title donation__title\">\n            <h2 class=\"title\">You can also make a donation</h2>\n          </div>\n          <div class=\"donation__subtitle\">\n            Name of the bank &sol; Type of bank account\n          </div>\n          <div class=\"donation__card\">\n            <a class=\"donation__number\" href=\"#Smile-buddy!\"> <svg class=\"donation__icon\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"></use>\n              </svg>\n              8380 2880 8028 8791 7435</a>\n          </div>\n          <div class=\"donation__descr\">\n            <p>Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at\n              libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et\n              malesuada fames ac ante ipsum primis in faucibus.</p>\n          </div>\n        </div> <!-- ./donation__pay -->\n      </div>\n    </div>\n  </section>\n\n  <!-- Footer -->\n  <footer class=\"footer\" id=\"footer\">\n    <div class=\"container\">\n      <div class=\"footer__content\">\n        <div class=\"footer__contact\">\n          <div class=\"footer__title\">\n            <h2 class=\"title title__contact\">For questions and suggestions</h2>\n          </div>\n          <div class=\"footer__mail\">\n            <a href=\"mailto:email@shelter.com\">\n              <svg class=\"footer__icon\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\"></use>\n              </svg>\n              email@shelter.com</a>\n          </div>\n          <div class=\"footer__phone\">\n            <a href=\"tel:+136745677554\">\n              <svg class=\"footer__icon\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\"></use>\n              </svg>\n              +13 674 567 75 54</a>\n          </div>\n        </div>\n\n        <div class=\"footer__adress\">\n          <div class=\"footer__title title__place\">\n            <h2 class=\"title title__contact\">We are waiting for your visit</h2>\n          </div>\n          <div class=\"footer__place--boston\">\n            <a href=\"https://goo.gl/maps/yAYDNJviHgs3WfMSA\" target=\"_blank\">\n              <svg class=\"footer__icon icon--place\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\"></use>\n              </svg>\n              1 Central Street, Boston <span>&lpar;entrance from the store&rpar;</span>\n            </a>\n          </div>\n\n          <div class=\"footer__place--london\">\n            <a href=\"https://goo.gl/maps/eqpXF9i1YW45VvHE6\" target=\"_blank\">\n              <svg class=\"footer__icon icon--place-2\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\"></use>\n              </svg>\n              18 South Park, London</a>\n          </div>\n        </div>\n        <div class=\"img__bloock\">\n          <div class=\"footer__img\"></div>\n        </div>\n      </div>\n    </div>\n  </footer>\n\n  <div class=\"popup\">\n    <div class=\"popup__card\">\n      <div class=\"popup__close\"></div>\n      <div class=\"popup__img\" id=\"img\">\n      </div>\n      <div class=\"popup__descr\">\n        <div class=\"popup__name\">\n          <h2 class=\"title popup--color title--size\" id=\"name\"></h2>\n        </div>\n        <div class=\"popup__type\">\n          <h3 class=\"popup__title popup--color\"><span id=\"type\"></span> &ndash; <span id=\"breed\"></span></h3>\n        </div>\n        <div class=\"popup__text\" id=\"description\">\n\n        </div>\n        <ul class=\"popup__list\">\n          <li class=\"popup__info\">\n            Age&#58; <span id=\"age\"></span></li>\n          <li class=\"popup__info\">\n            <p>Inoculations&#58;<span id=\"inoculations\"></span></p>\n          </li>\n          <li class=\"popup__info\">\n            Diseases&#58;<span id=\"diseases\"></span></li>\n          <li class=\"popup__info\">\n            Parasites&#58;<span id=\"parasites\"></span></li>\n        </ul>\n\n      </div>\n    </div>\n  </div>\n\n\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./main/pets.html":
/*!************************!*\
  !*** ./main/pets.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-katrine.png */ "./assets/img/pets-katrine.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-jennifer.png */ "./assets/img/pets-jennifer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-woody.png */ "./assets/img/pets-woody.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-sophia.png */ "./assets/img/pets-sophia.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-timmy.png */ "./assets/img/pets-timmy.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-charly.png */ "./assets/img/pets-charly.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-scarlet.png */ "./assets/img/pets-scarlet.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-freddie.png */ "./assets/img/pets-freddie.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-email.svg */ "./assets/icons/icon-email.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-phone.svg */ "./assets/icons/icon-phone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icon-marker.svg */ "./assets/icons/icon-marker.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___, { hash: "#mail" });
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___, { hash: "#phone" });
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___, { hash: "#marker" });
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Our pets</title>\n</head>\n\n<body>\n  <header class=\"header header--our\">\n    <div class=\"container__start\">\n      <div class=\"container header__content\">\n        <div class=\"header__logo header__logo--pets\">\n          <a href=\"../index.html\">\n            <h1 class=\"logo__title title--our\">Cozy House</h1>\n            <div class=\"logo__subtitle subtitle--our\">Shelter for pets in Boston</div>\n          </a>\n        </div>\n        <div class=\"header__nav\">\n          <nav class=\"nav\">\n            <ul class=\"list__nav\">\n              <li class=\"nav__link\">\n                <a class=\"link--our \" href=\"../index.html\" id=\"text-our\">About the shelter</a>\n              </li>\n              <li class=\"nav__link active\">\n                <a class=\"link--our  active--link-our active--color\" href=\"#\" id=\"text-our\">Our pets</a>\n              </li>\n              <li class=\"nav__link\">\n                <a class=\"link--our \" href=\"../index.html#help\" id=\"text-our\">Help the shelter</a>\n              </li>\n              <li class=\"nav__link\">\n                <a class=\"link--our \" href=\"#footer\" id=\"text-our\">Contacts</a>\n              </li>\n            </ul>\n          </nav>\n\n          <div class=\"block__color\">\n            <div class=\"header__logo burger__logo logo--pets active\">\n              <a href=\"../index.html\">\n                <h1 class=\"logo__title\">Cozy House</h1>\n                <div class=\"logo__subtitle\">Shelter for pets in Boston</div>\n              </a>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"burger burger-our\">\n          <span></span>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <section class=\"pets\" id=\"pets\">\n    <div class=\"container\">\n      <div class=\"pets__content header__logo--pets pets__content--our\">\n        <div class=\"section__title title--pets title--pets-our\">\n          <h2 class=\"title\">Our friends who<br>\n            are looking for a house</h2>\n        </div>\n\n        <div class=\"pets__pagination\">\n\n          <div class=\"slide__pagination  slider__cards--our\">\n            <div class=\"pagination__block\" id=\"katrine\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Katrine</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n            <div class=\"pagination__block\" id=\"jennifer\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Jennifer</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n            <div class=\"pagination__block\" id=\"woody\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Woody</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n            <div class=\"pagination__block none-320\" id=\"sophia\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Sophia</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n            <div class=\"pagination__block none-320\" id=\"timmy\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Timmy</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n            <div class=\"pagination__block none-320\" id=\"charly\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Charly</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n            <div class=\"pagination__block none\" id=\"scarlet\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Scarlett</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n            <div class=\"pagination__block none\" id=\"freddie\">\n              <div class=\"slider__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\n              </div>\n              <div class=\"slider__title our--title\">\n                <h3 class=\"our__pets--slider\">Freddie</h3>\n              </div>\n              <button class=\"btn btn__white\">\n                Learn more\n              </button>\n            </div>\n          </div>\n        </div> <!-- ./pets__slider -->\n\n      </div> <!-- ./pets__content -->\n      <div class=\"btns__slider-pets\">\n        <button class=\"btn__our-pets pets--left__all inactive\" disabled>&lt;&lt;</button>\n        <button class=\"btn__our-pets pets--left inactive\" disabled>&lt;</button>\n        <div class=\"our__pets--num\">\n          <div class=\"num__page-slider\">1</div>\n        </div>\n        <button class=\"btn__our-pets pets--right\">&gt;</button>\n        <button class=\"btn__our-pets pets--all__right\">&gt;&gt;</button>\n      </div>\n\n    </div> <!-- ./container -->\n  </section>\n  <!-- Footer -->\n  <footer class=\"footer\" id=\"footer\">\n    <div class=\"container\">\n      <div class=\"footer__content\">\n        <div class=\"footer__contact\">\n          <div class=\"footer__title\">\n            <h2 class=\"title title__contact\">For questions and suggestions</h2>\n          </div>\n          <div class=\"footer__mail\">\n            <a href=\"mailto:email@shelter.com\">\n              <svg class=\"footer__icon\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></use>\n              </svg>\n              email@shelter.com</a>\n          </div>\n          <div class=\"footer__phone\">\n            <a href=\"tel:+136745677554\">\n              <svg class=\"footer__icon\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"></use>\n              </svg>\n              +13 674 567 75 54</a>\n          </div>\n        </div>\n\n        <div class=\"footer__adress\">\n          <div class=\"footer__title title__place\">\n            <h2 class=\"title title__contact\">We are waiting for your visit</h2>\n          </div>\n          <div class=\"footer__place--boston\">\n            <a href=\"https://goo.gl/maps/yAYDNJviHgs3WfMSA\" target=\"_blank\">\n              <svg class=\"footer__icon icon--place\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"></use>\n              </svg>\n              1 Central Street, Boston <span>&lpar;entrance from the store&rpar;</span>\n            </a>\n          </div>\n\n          <div class=\"footer__place--london\">\n            <a href=\"https://goo.gl/maps/eqpXF9i1YW45VvHE6\" target=\"_blank\">\n              <svg class=\"footer__icon icon--place-2\">\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"></use>\n              </svg>\n              18 South Park, London</a>\n          </div>\n        </div>\n        <div class=\"img__bloock\">\n          <div class=\"footer__img\"></div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <div class=\"shadow\" ></div>\n\n  <div class=\"popup popup--pets\">\n    <div class=\"popup__card\">\n      <div class=\"popup__close\"></div>\n      <div class=\"popup__img\"  id=\"img\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\".\">\n      </div>\n      <div class=\"popup__descr\">\n        <div class=\"popup__name\">\n          <h2 class=\"title popup--color title--size\" id=\"name\">Jennifer</h2>\n        </div>\n        <div class=\"popup__type\">\n          <h3 class=\"popup__title popup--color\"><span id=\"type\">Dog</span> &ndash; <span id=\"breed\">Labrador</span></h3>\n        </div>\n        <div class=\"popup__text\" id=\"description\">\n          Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl\n          really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if\n          she has all of her favorite toys.\n        </div>\n        <ul class=\"popup__list\">\n          <li class=\"popup__info\">\n            Age&#58; <span id=\"age\">2 months </span></li>\n          <li class=\"popup__info\">\n            <p>Inoculations&#58; <span id=\"inoculations\">none</span></p></li>\n          <li class=\"popup__info\">\n            Diseases&#58; <span id=\"diseases\">none</span></li>\n          <li class=\"popup__info\">\n            Parasites&#58; <span id=\"parasites\">none</span></li>\n        </ul>\n\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/icons/credit-card.svg":
/*!**************************************!*\
  !*** ./assets/icons/credit-card.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/credit-card.svg";

/***/ }),

/***/ "./assets/icons/icon-bowls-and-cups.svg":
/*!**********************************************!*\
  !*** ./assets/icons/icon-bowls-and-cups.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-bowls-and-cups.svg";

/***/ }),

/***/ "./assets/icons/icon-collars-leashes.svg":
/*!***********************************************!*\
  !*** ./assets/icons/icon-collars-leashes.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-collars-leashes.svg";

/***/ }),

/***/ "./assets/icons/icon-email.svg":
/*!*************************************!*\
  !*** ./assets/icons/icon-email.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-email.svg";

/***/ }),

/***/ "./assets/icons/icon-marker.svg":
/*!**************************************!*\
  !*** ./assets/icons/icon-marker.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-marker.svg";

/***/ }),

/***/ "./assets/icons/icon-medicines.svg":
/*!*****************************************!*\
  !*** ./assets/icons/icon-medicines.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-medicines.svg";

/***/ }),

/***/ "./assets/icons/icon-pet-food.svg":
/*!****************************************!*\
  !*** ./assets/icons/icon-pet-food.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-pet-food.svg";

/***/ }),

/***/ "./assets/icons/icon-phone.svg":
/*!*************************************!*\
  !*** ./assets/icons/icon-phone.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-phone.svg";

/***/ }),

/***/ "./assets/icons/icon-shampoos.svg":
/*!****************************************!*\
  !*** ./assets/icons/icon-shampoos.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-shampoos.svg";

/***/ }),

/***/ "./assets/icons/icon-sleeping-area.svg":
/*!*********************************************!*\
  !*** ./assets/icons/icon-sleeping-area.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-sleeping-area.svg";

/***/ }),

/***/ "./assets/icons/icon-toys.svg":
/*!************************************!*\
  !*** ./assets/icons/icon-toys.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-toys.svg";

/***/ }),

/***/ "./assets/icons/icon-transportation.svg":
/*!**********************************************!*\
  !*** ./assets/icons/icon-transportation.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-transportation.svg";

/***/ }),

/***/ "./assets/icons/icon-vitamins.svg":
/*!****************************************!*\
  !*** ./assets/icons/icon-vitamins.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/icon-vitamins.svg";

/***/ }),

/***/ "./assets/icons/left.svg":
/*!*******************************!*\
  !*** ./assets/icons/left.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/left.svg";

/***/ }),

/***/ "./assets/icons/right.svg":
/*!********************************!*\
  !*** ./assets/icons/right.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/right.svg";

/***/ }),

/***/ "./assets/img/about-pets.png":
/*!***********************************!*\
  !*** ./assets/img/about-pets.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/about-pets.png";

/***/ }),

/***/ "./assets/img/donation-dog.png":
/*!*************************************!*\
  !*** ./assets/img/donation-dog.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/donation-dog.png";

/***/ }),

/***/ "./assets/img/pets-charly.png":
/*!************************************!*\
  !*** ./assets/img/pets-charly.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-charly.png";

/***/ }),

/***/ "./assets/img/pets-freddie.png":
/*!*************************************!*\
  !*** ./assets/img/pets-freddie.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-freddie.png";

/***/ }),

/***/ "./assets/img/pets-jennifer.png":
/*!**************************************!*\
  !*** ./assets/img/pets-jennifer.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-jennifer.png";

/***/ }),

/***/ "./assets/img/pets-katrine.png":
/*!*************************************!*\
  !*** ./assets/img/pets-katrine.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-katrine.png";

/***/ }),

/***/ "./assets/img/pets-scarlet.png":
/*!*************************************!*\
  !*** ./assets/img/pets-scarlet.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-scarlet.png";

/***/ }),

/***/ "./assets/img/pets-sophia.png":
/*!************************************!*\
  !*** ./assets/img/pets-sophia.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-sophia.png";

/***/ }),

/***/ "./assets/img/pets-timmy.png":
/*!***********************************!*\
  !*** ./assets/img/pets-timmy.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-timmy.png";

/***/ }),

/***/ "./assets/img/pets-woody.png":
/*!***********************************!*\
  !*** ./assets/img/pets-woody.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/pets-woody.png";

/***/ }),

/***/ "./assets/img/start-screen-puppy.png":
/*!*******************************************!*\
  !*** ./assets/img/start-screen-puppy.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/start-screen-puppy.png";

/***/ }),

/***/ "./main/pets.json":
/*!************************!*\
  !*** ./main/pets.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Jennifer","img":"./assets/img/pets-jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"name":"Sophia","img":"./assets/img/pets-sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"name":"Woody","img":"./assets/img/pets-woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus"," distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"name":"Scarlet","img":"./assets/img/pets-scarlet.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"name":"Katrine","img":"assets/img/pets-katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"name":"Timmy","img":"./assets/img/pets-timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"name":"Freddie","img":"./assets/img/pets-freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"name":"Charly","img":"./assets/img/pets-charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica ","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./main/index.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./main/index.html");
/* harmony import */ var _pets_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pets.html */ "./main/pets.html");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/scss/main.scss */ "./assets/scss/main.scss");
/* harmony import */ var _assets_js_script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/js/script.js */ "./assets/js/script.js");




console.log('Не успел, ставьте оценку как есть');
})();

/******/ })()
;
//# sourceMappingURL=main.js.map