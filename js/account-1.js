/**
 * Created by Administrator on 2016/9/18.
 */

//$(document).ready(function(){
//
//    function myfunction(li,li_a,menu_tab){
//        li.click(function(){
//            var index=$(this).index();
//            menu_tab.eq(index).addClass("active").siblings().removeClass("active");
//            li_a.removeClass("selected");
//            li_a.eq(index).addClass("selected").siblings().removeClass("selected");
//        });
//    }
//
//    myfunction($(".container .menu .ulmenu1 li"),$(".container .ulmenu1 li a"),$(".container .content .menu1 .tab"));
//    myfunction($(".container .menu .ulmenu2 li"),$(".container .ulmenu2 li a"),$(".container .content .menu2 .tab"));
//    myfunction($(".container .menu .ulmenu3 li"),$(".container .ulmenu3 li a"),$(".container .content .menu3 .tab"));
//    myfunction($(".container .menu .ulmenu4 li"),$(".container .ulmenu4 li a"),$(".container .content .menu4 .tab"));
//    myfunction($(".container .menu .ulmenu5 li"),$(".container .ulmenu5 li a"),$(".container .content .menu5 .tab"));
//
//
//    $(function(){
//        $(".menu > ul").eq(0).show();
//        $(".menu h3").click(function(){
//            $(".menu_tab > div").removeClass("active");
//
//            var val=($(this).next().attr('class'));
//            var menu_value=(val.substring(val.length-1));
//            $(".container .content .menu"+menu_value+" .tab:first-child").addClass("active");
//            $(".container .menu .ulmenu"+menu_value+" li>a").removeClass("selected");
//            $(".container .menu .ulmenu"+menu_value+" li a").eq(0).addClass("selected");
//
//            $(this).next().stop().slideToggle();
//            $(this).siblings().next("ul").stop().slideUp();
//        });
//
//    });
//
//    $(function(){   // ���� >
//        $(".container .menu > h3").click(function(){
//
//            $(".container .content .A1").empty().text($(this).text());
//
//        });
//    });
//});
//
//
//$(function(){
//    $('.transform-img').hover(function(){
//        $(this).toggleClass('animated bounce');
//        setTimeout(function(){
//            $(this).removeClass('animated bounce');
//        }, 1000);
//    });
//});