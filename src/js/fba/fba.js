import '../../less/fba/fba.less';

import '../common/common';

$(function () {
    var $sideNav = $('.fba-nav');
    var scrollTimer = null;
    var navTop = $sideNav.offset().top;
    var achorNav = getUrlParam('nav');
    var achorTop = achorNav ? $('#' + achorNav).offset().top - 80 : 0;

    function getUrlParam(paramKey, urlSearch) {
        paramKey = paramKey || '';
        let val = '';
        let query = urlSearch || window.location.search || '';
        query = query[0] === '?' ? query.slice(1) : query;
        let params = query.split('&');
        params.forEach(function (item) {
            item = item || '';
            let kv = item.split('=');
            if (kv && kv.length === 2 && kv[0] === paramKey) {
                val = kv[1];
            }
        });
        return val;
    }

    function setSideNavFixed() {
        var cTop = $(window).scrollTop();
        if (cTop <= navTop - 60) {
            $sideNav.removeClass('fixed');
        } else {
            $sideNav.addClass('fixed');
        }
    }

    $sideNav.on('click', 'span', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        var hrefId = $(this).attr('href');
        if ($(hrefId).length > 0) {
            $(this).addClass('active').siblings('span').removeClass('active');
            $('.fba-content .content-item').hide();
            $(hrefId).fadeIn(300);
            $('body, html').animate({
                scrollTop: navTop - 100
            }, 200);
        }
    });

    $(window).scrollTop(achorTop);

    setSideNavFixed();

    $(window).scroll(function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(setSideNavFixed, 10);
    });
});