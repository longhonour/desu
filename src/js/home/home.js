import '../../less/home/home.less';

import '../common/common';

new Swiper('.swiper-container', {
    lazyLoading: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 3000,
    speed: 600,
    spaceBetween: 0,
    effect: 'fade'
});