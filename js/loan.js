/**
 * Created by Administrator on 2016/8/18.
 */

jQuery(".picScroll").slide({ mainCell:"ul",autoPlay:true,effect:"left", vis:4, scroll:2, autoPage:true, pnLoop:false });

$(function () {
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 1200 ? $('div[class=scroll]').fadeIn() : $('div[class=scroll]').fadeOut();
        });
    }
});
