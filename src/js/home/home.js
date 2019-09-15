import '../../less/home/home.less';

import '../common/common';

var serviceTop = $('#service-cont').offset().top;
var scrollTimer = null;
new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 3000,
    speed: 800,
    spaceBetween: 0,
    effect: 'fade'
});

function navScroll() {
    var cTop = $(window).scrollTop();
    if (cTop <= serviceTop) {
        $('.main-nav').removeClass('active');
    } else {
        $('.main-nav').addClass('active');
    }
};
navScroll();

$(window).scroll(function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(navScroll, 10);
});