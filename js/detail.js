/**
 * Created by Administrator on 2016/8/18.
 */

window.onload = function(){
    jQuery(function() {

        function qiehuan(obj,objcur,boxone)
        {
            $(obj).click(function()
            {
                $(this).addClass(objcur).siblings().removeClass(objcur);
                var index=$(this).index();

                $(boxone).eq(index).show().siblings().hide();
            });
        }
        qiehuan(".detail_con_tit span","det_tit_curspan",".con_box_1");

    });

var flag = "left";
function DY_scroll(wraper,prev,next,img,imga,speed,or){
    var wraper = $(wraper);
    var prev = $(prev);
    var next = $(next);
    var img = $(img).find('ul');
    var imga = $(imga).find('ul li');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function(){
        img.animate({'margin-left':-w}/*,1500,'easeOutBounce'*/,function(){
            img.find('li').eq(0).appendTo(img);
            img.css({'margin-left':0});
        });
        flag = "left";
    });
    prev.click(function(){
        img.find('li:last').prependTo(img);
        img.css({'margin-left':-w});
        img.animate({'margin-left':0}/*,1500,'easeOutBounce'*/);
        flag = "right";
    });
    if(imga.length>4){
        if (or == true){
            ad = setInterval(function() { flag == "left" ? next.click() : prev.click()},s*1000);
            wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() {flag == "left" ? next.click() : prev.click()},s*1000);});
        }
    }

}
DY_scroll('.hl_main5_content','.hl_scrool_leftbtn','.hl_scrool_rightbtn','.hl_main5_content1','.hl_main5_content1',2,false);// true为自动播放，不加此参数或false就默认不自动


$(function(){

    $("#demo1").jcLightBox();

    $("#demo2").jcLightBox({
        speed : 200,
        listSpeed : 200,
        setLood : {
            path : "img/loading.gif",
            width : 32,
            height : 32
        },
        setModal : {
            bgColor : "#000",
            opacity : .6
        },
        state : "fade"
    });

});
};