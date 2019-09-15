import '../../less/about/about.less';

import '../common/common';

$(function () {
    var floorTop = [],
        navEle = $('.module-nav a');

    navEle.each(function (index, item) {
        var floorId = $(this).attr('href');
        floorTop[index] = $(floorId).offset().top - 60;
    })

    navEle.click(function (e) {
        var cIndex = $(this).index();
        $('body,html').animate({
            scrollTop: floorTop[cIndex]
        }, 400)
        e.preventDefault();
    })
});