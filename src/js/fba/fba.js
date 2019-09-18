import '../../less/fba/fba.less';

import '../common/common';

$(function () {
    var $sideNav = $('.fba-nav');
    var scrollTimer = null;
    var navTop = $sideNav.offset().top;
    $sideNav.on('click', 'span', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        var hrefId = $(this).attr('href');
        if ($(hrefId).length > 0) {
            $(this).addClass('active').siblings('span').removeClass('active');
            $('.fba-content .content-item').hide();
            $(hrefId).fadeIn(300);
        }
    });

    function setSideNavFixed() {
        var cTop = $(window).scrollTop();
        if (cTop <= navTop - 60) {
            $sideNav.removeClass('fixed');
        } else {
            $sideNav.addClass('fixed');
        }
    }

    setSideNavFixed();

    $(window).scroll(function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(setSideNavFixed, 10);
    });
});