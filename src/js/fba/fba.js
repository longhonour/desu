import '../../less/fba/fba.less';

import '../common/common';

$(function () {
    $('.fba-nav').on('click', 'span', function () {
        if ($(this).hasClass('active')) {
            return;
        }
        var hrefId = $(this).attr('href');
        if ($(hrefId).length > 0) {
            $(this).addClass('active').siblings('span').removeClass('active');
            $('.fba-content .content-item').hide();
            $(hrefId).fadeIn(300);
        }
    })
});