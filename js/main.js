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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Hello from main.js!');

$('.insurance-products').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    prevArrow: $('.insurance__top .prevSlick'),
    nextArrow: $('.insurance__top .nextSlick'),
    responsive: [{
        breakpoint: 475,
        settings: {
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

function opacitySlide() {
    var slideActive = $('.insurance-products .slick-active');
    var slide = $('.insurance-products .slick-slide');
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
    focusOnSelect: true,
    prevArrow: $('.clients-caption__top .prevSlick'),
    nextArrow: $('.clients-caption__top .nextSlick')
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

// about__text()

function naw__menu() {
    $('body').on('click', '.nav__link, .header__wrapper__about__item__lang', function () {
        $('.nav__link__sub').click(function (event) {
            event.stopPropagation();
        });
        if ($(this).find('.nav__link__sub').length > 0 && !$(this).hasClass('open')) {
            $('.nav__link').removeClass('open');
            $(this).addClass('open');
        } else if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        }
    });
}
naw__menu();

$(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".nav__link, .header__wrapper__about__item__lang"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {
        // и не по его дочерним элементам
        $('.nav__link, .header__wrapper__about__item__lang').removeClass('open'); // скрываем его
    }
});

$('.hero__bg__wrap').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.slider__wrap__hero'
});
// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
$('.slider__wrap__hero').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.hero__bg__wrap',
    dots: true,
    centerMode: false,
    focusOnSelect: true
});
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

//табы для фильтра==================================
function filterTabs() {
    var filterSelect = $('.filter__item__select');
    $(filterSelect).on('click', function () {
        $(this).parent().find('.filter__item__list').toggleClass('open');
        if ($(this).parent().find('.filter__item__list').hasClass('open')) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }

        $(this).parent().find('.filter__item__list .item').on('click', function () {
            console.log($(this).parent().parent());
            var text = $(this).text();
            $(this).parent().parent().find('.filter__item__select__caption').text(text);
            $(this).parent().removeClass('open');
            $(this).parent().parent().find('.filter__item__select').removeClass('open');
        });
    });
}

filterTabs();
//табы для фильтра==================================end

//рейтинг - звезды ======================================
function starRang() {
    var stars = $('.stars');
    var rating = $('.rating').text();
    console.log(rating);
}

starRang();
//рейтинг - звезды ======================================end


$('.tabs-bar__wrap__button').find('.item').on('click', function () {
    $('.tabs-bar__wrap__button').find('.item').removeClass('active');
    $(this).addClass('active');
});

$('.filter__item').find('.item').on('click', function () {
    $('.filter__item').find('.item').removeClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function () {
    var btnTop = $('.social__fix');
    if ($(window).scrollTop() > 500) {
        $(".social__fix").addClass("fixed");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".social__fix").removeClass("fixed");
    }
});
// $(window).on("scroll", function () {
//     if (come("#btnTop")) {
//         $(".go-to-top").removeClass("fixed");
//     }
// });
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 40) {
        $('.container-header').addClass('mini');
    } else {
        $('.container-header').removeClass('mini');
    }
});
//аккордеон========================================================
function acordion() {
    $('.open_acordion').on('click', function () {

        if ($(this).parent().parent().find('.block__acordion').hasClass('open')) {
            $(this).parent().parent().find('.block__acordion').removeClass('open');
            $(this).find('span').text('Раскрыть').addClass('active');
            $(this).removeClass('active');
        } else {
            $('.block__acordion').removeClass('open');
            $(this).parent().parent().find('.block__acordion').addClass('open');
            $('.open_acordion').find('span').text('Раскрыть');
            $(this).find('span').text('Cвернуть').removeClass('active');
            $(this).addClass('active');
        }
    });
}

acordion();
//аккордеон========================================================end


$(function () {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
        emojiable_selector: '[data-emojiable=true]',
        assetsPath: 'lib/img/',
        popupButtonClasses: 'uil uil-smile-squint-wink-alt'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
});

//menu mobile
$('.mobile__menu').on('click', function () {
    $('.mibile__menu__wrap').addClass('open');
    if ($(window).width() < 589) {
        $('body').addClass('no__scroll');
    }
});
$('.mibile__menu__wrap').find('.btn__close').on('click', function () {
    $('.mibile__menu__wrap').removeClass('open');
    $('body').removeClass('no__scroll');
});

//--------------------------------------------
$('.vocabulary__mini').on('click', function () {
    if (event.target != this) {
        return;
    }
    $('.vocabulary__mini').toggleClass('open');
    $(this).find('.close__modal').on('click', function () {
        $('.vocabulary__mini').removeClass('open');
    });
});
$('.request-call,.btn__request-call').on('click', function () {
    $('.modal__call').parents('.modal__wrap.call').addClass('active');
    $('body').addClass('no__scroll');

    $('.modal__call').find('.close__modal').on('click', function () {
        $(this).parents('.modal__wrap').removeClass('active');
        $('body').removeClass('no__scroll');
    });
});
$('.notification__nav__tabs').find('.tabs').on('click', function () {
    $('.notification__nav__tabs').find('.tabs').removeClass('active');
    $(this).addClass('active');
});

$('.request-call__mobile__wrap__button').on('click', function () {
    $('.request-call__mobile__wrap').toggleClass('open');
    $(this).text('Закрыть');

    if (!$('.request-call__mobile__wrap').hasClass('open')) {
        $(this).text('Заказать звонок');
    }
});
$('.btn__modal__termin').on('click', function () {
    $('.modal__content').parents('.modal__wrap.modal__termin').addClass('active');
    $('body').addClass('no__scroll');

    $('.modal__content').find('.close__modal').on('click', function () {
        $(this).parents('.modal__wrap.modal__termin').removeClass('active');
        $('body').removeClass('no__scroll');
    });
});

$('.btn__modal__insurance-1').on('click', function () {
    $('.modal__content').parents('.modal__wrap.modal__insurance__wrap-1').addClass('active');
    $('body').addClass('no__scroll');

    $('.modal__content').find('.close__modal').on('click', function () {
        $(this).parents('.modal__wrap.modal__insurance__wrap-1').removeClass('active');
        $('body').removeClass('no__scroll');
    });
});
$('.btn__modal__insurance-2').on('click', function () {
    $('.modal__content').parents('.modal__wrap.modal__insurance__wrap-2').addClass('active');
    $('body').addClass('no__scroll');

    $('.modal__content').find('.close__modal').on('click', function () {
        $(this).parents('.modal__wrap.modal__insurance__wrap-2').removeClass('active');
        $('body').removeClass('no__scroll');
    });
});
$('.btn__modal__insurance-3').on('click', function () {
    $('.modal__content').parents('.modal__wrap.modal__insurance__wrap-3').addClass('active');
    $('body').addClass('no__scroll');

    $('.modal__content').find('.close__modal').on('click', function () {
        $(this).parents('.modal__wrap.modal__insurance__wrap-3').removeClass('active');
        $('body').removeClass('no__scroll');
    });
});

//====================================container LK tabs

function tabs__personal__area() {

    $(function () {
        $('.persolan-area__conteiner__btn-tabs .item:first').addClass('active');
        $('.personal-area .persolan-area__conteiner__tabs:first').css('display', 'block');
    });
    //обработчик кликов по неактивным табам
    $('.persolan-area__conteiner__btn-tabs .item').not('.active').click(function () {
        //номер таба
        var index = $(this).index();
        //соответствующая закладка
        var content = $('.personal-area .persolan-area__conteiner__tabs').eq(index);
        //таб сделать активным, остальные неактивными
        $(this).addClass('active').siblings().removeClass('active');
        //открыть нужную вкладку, закрыть остальные
        $('.personal-area .persolan-area__conteiner__tabs').css('display', 'none').eq(index).css('display', 'block');
    });
}

tabs__personal__area();

function tabs__personal__area__mobile() {
    var filterSelect = $('.persolan-area__conteiner__select');
    $(filterSelect).on('click', function () {
        $(this).parent().find('.persolan-area__conteiner__btn-tabs').toggleClass('open');
        if ($(this).parent().find('.persolan-area__conteiner__btn-tabs').hasClass('open')) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }

        $(this).parent().find('.persolan-area__conteiner__btn-tabs .item').on('click', function () {
            console.log($(this).parent().parent());
            var text = $(this).text();
            $(this).parent().parent().find('.persolan-area__conteiner__select__caption').text(text);
            $(this).parent().removeClass('open');
            $(this).parent().parent().find('.persolan-area__conteiner__select').removeClass('open');
        });
    });
}

tabs__personal__area__mobile();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map