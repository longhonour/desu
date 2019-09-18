import '../../less/home/home.less';

import '../common/common';

new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 3000,
    speed: 800,
    spaceBetween: 0,
    effect: 'fade'
});