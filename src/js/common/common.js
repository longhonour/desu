$(function () {
    var pathName = window.location.pathname;
    var serviceTop = 280;
    var scrollTimer = null;

    if ($('.home-ban').length > 0) {
        serviceTop = $('.home-ban').height() + $('.home-ban').offset().top;
    } else {
        serviceTop = $('.main-ban').height() + $('.main-ban').offset().top;
    }

    $('.nav-item a').each(function (index, item) {
        var hrefLink = $(this).attr('href');
        var leftDis = $(this).position().left + 165;
        if (hrefLink === pathName) {
            $(".nav-hover").css({
                left: leftDis
            }).show();
        }
    })

    $(".nav-item a").on('mouseenter', function () {
        var curPos = $(this).position();
        $(".nav-hover").stop(false, false).animate({
            left: curPos.left + 165,
        }, 300);
    });

    $(".nav-item a").on('mouseleave', function () {
        $('.nav-item a').each(function (index, item) {
            var hrefLink = $(this).attr('href');
            var leftDis = $(this).position().left + 165;
            if (hrefLink === pathName) {
                $(".nav-hover").stop(false, false).animate({
                    left: leftDis,
                }, 300);
            }
        })
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
});