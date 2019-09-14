import '../../less/home/home.less';

$(function () {
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        speed: 800,
        spaceBetween: 0,
        effect: 'fade'
    });

    $(".nav-item a").on('mouseenter', function () {
        var curPos = $(this).position();
        $(".nav-hover").stop(false, false).animate({
            left: curPos.left + 165,
            top: curPos.top
        }, 300);
    });
})