/**
 * Created by Administrator on 2016/9/18.
 */


$(function(){
    $('.transform-img').hover(function(){
        $(this).toggleClass('animated bounce');
        setTimeout(function(){
            $(this).removeClass('animated bounce');
        }, 1000);
    });
});