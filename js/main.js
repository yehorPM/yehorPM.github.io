/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Hello from main.js!');

$('.insurance-products').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    prevArrow: $('.insurance__top .prevSlick'),
    nextArrow: $('.insurance__top .nextSlick')
});
function opacitySlide() {
    var slideActive = $('.slick-active');
    var slide = $('.slick-slide');
    $(slide).addClass('opacity');
    $(slide[0]).removeClass('opacity');
    $(slide[1]).removeClass('opacity');
    $(slide[2]).removeClass('opacity');
    $(slideActive).removeClass('opacity');
    $(slideActive[3]).addClass('opacity');
}
opacitySlide();
$('.insurance-products').on('swipe', function (event, slick, currentSlide, nextSlide) {
    opacitySlide();
});
$('.insurance-products').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    opacitySlide();
});
$('.clients').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true
});
$('.reviews__slide__wrap').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.reviews__top .prevSlick'),
    nextArrow: $('.reviews__top .nextSlick')
});

function about__text() {
    var text = $('.text__block');
    $('.showText').on('click', function () {
        if ($(text).hasClass('active')) {
            $(this).parent().find('.text__block').removeClass('active');
            $(this).text('Читать подробнее');
        } else {
            $(this).parent().find('.text__block').addClass('active');
            $(this).text('Скрыть');
        }
    });
}
about__text();

function naw__menu() {
    $('.nav__link').on('click', function () {
        if ($(this).find('.nav__link__sub').length > 0 && !$(this).hasClass('open')) {
            $('.nav__link').removeClass('open');
            $(this).addClass('open');
        } else if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        }
    });
}
naw__menu();

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map