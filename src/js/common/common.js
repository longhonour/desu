$(function () {
    var pathName = window.location.pathname;

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
});