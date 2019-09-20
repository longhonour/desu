import '../../less/contact/contact.less';

import '../common/common';

$(function () {
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(113.291165, 23.140853), 15);

    var data_info = [
        [113.291165, 23.140853, "德速电商物流（广州）有限公司", "地址：广州市越秀区建设六马路33号宜安广场1708"],
        [114.083941, 22.628186, "德速电商物流（广州）有限公司深圳分公司", "地址：深圳市龙岗区坂田街道中兴路11号城市山海中心C栋4楼418"],
        [118.099461, 24.518289, "德速电商物流（广州）有限公司厦门分公司", "地址：厦门市湖里区象屿保税区自贸时代广场B栋416"],
        [113.288429, 23.251813, "德速电商物流广州仓", "地址：广州市白云区七星岗环岗一路1号A栋A2单元（可导航至“德速电商物流广州仓”）"],
        [114.157403, 22.69672, "德速电商物流深圳仓", "地址：深圳市龙岗区凤凰大道668号深圳喜年实业发展园区1号仓库"]
    ];
    var opts = {
        width: 300,     // 信息窗口宽度
        height: 70,     // 信息窗口高度
        title: "地址", // 信息窗口标题
        enableMessage: true//设置允许信息窗发送短息
    };

    for (var i = 0; i < data_info.length; i++) {
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1]));  // 创建标注
        var content = data_info[i][2];
        map.addOverlay(marker);               // 将标注添加到地图中
        addClickHandler(content, marker);
    }

    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

    function addClickHandler(content, marker) {
        marker.addEventListener("click", function (e) {
            openInfo(content, e);
        });
    }

    function openInfo(content, e) {
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    }

    $('.mark-list span').on('click', function () {
        var index = $(this).index();
        var content = data_info[index][3];
        opts.title = data_info[index][2];
        var point = new BMap.Point(data_info[index][0], data_info[index][1]);
        var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
        $(this).addClass('active').siblings('span').removeClass('active');

        setTimeout(function () {
            map.panTo(new BMap.Point(data_info[index][0], data_info[index][1]));
        }, 300);
        setTimeout(function () {
            map.centerAndZoom(new BMap.Point(data_info[index][0], data_info[index][1]), 15);
        }, 1200);
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });
});
