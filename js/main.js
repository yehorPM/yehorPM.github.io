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

//кастомный селект

var SelectList = {
    fn: {
        prepare: function prepare() {
            $('.select').each(function () {
                var select = $('<div class="select-box"/>');
                var html = '<div class="trigger"></div>';
                html += '<ul class="choices">';
                var $option = $(this);
                $option.find('option').each(function (key, val) {
                    var value = $(val).val();

                    html += '<a href="#" data-value="' + value + '">' + value + '</a>';
                });
                html += '</ul>';
                select.html(html).insertBefore($($option));
            });
        },

        showHide: function showHide() {
            $('.trigger', '.select-box').on('click', function () {
                var $trigger = $(this);
                var list = $trigger.next();
                if (list.is(':hidden')) {
                    list.slideDown(300);
                    list.css('display', 'flex');
                    $(this).addClass('open');
                } else {
                    $(this).removeClass('open');
                    list.slideUp(300);
                }
            });
        },

        view: function view() {
            $('body').on('click', function () {
                var value = $('.select');
                // console.log($(value).val())
            });
        },

        select: function select() {
            var $trigger = $('.trigger');
            var $select = $('.select');
            var $view = $('.view');
            var startText = $($trigger).siblings(".choices").find('a:first-child').text();
            // console.log($($trigger).siblings(".choices").find('li:first-child').text())
            $($trigger).text(startText);
            $('a', '.choices').on('click', function () {
                $(this).parents('.calc__form_row').find('.trigger').removeClass('open');
                var $li = $(this);

                var value = $li.data('value');
                $(this).parents('.select-box').find('.trigger').text(value);

                $li.parent().slideUp(300, function () {

                    $(this).parents('.calc__form_row').find('.select').val(value);
                    $view.trigger('click');
                });
            });
        }
    },

    init: function init() {
        for (var method in this.fn) {
            this.fn[method]();
        }
    }
};

$(function () {
    SelectList.init();
});

// кастомный селект=======================end


function filterTabs() {
    var filterSelect = $('.filter__item__select');
    $(filterSelect).on('click', function () {
        $(this).parent().find('.filter__item__list').toggleClass('open');
        if ($(this).parent().find('.filter__item__list').hasClass('open')) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }
    });
    $('.filter__item__list .item').on('click', function () {
        var text = $(this).text();
        $(filterSelect).find('.filter__item__select__caption').text(text);
        $('.filter__item__list').removeClass('open');
        $(filterSelect).removeClass('open');
    });
}
filterTabs();

// fiter ==================================================
function starRang() {
    var stars = $('.stars');
    var rating = $('.rating').text();
    console.log(rating);
}
starRang();
//===========================================================

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map