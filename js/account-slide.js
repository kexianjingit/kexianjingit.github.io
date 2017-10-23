/**
 * Created by Administrator on 2016/11/15.
 */

$(document).ready(function(){
    //²à±ßµ¼º½
    function myfunction(li,li_a,menu_tab){
        li.click(function(){
            var index=$(this).index();
            menu_tab.eq(index).addClass("active").siblings().removeClass("active");
            li_a.removeClass("selected");
            li_a.eq(index).addClass("selected").siblings().removeClass("selected");
            li_a.eq(index).parents("ul").siblings().find("a").removeClass("selected");
        });
    }

    myfunction($(".container .menu .ulmenu1 li"),$(".container .ulmenu1 li a"),$(".container .content .menu1 .tab"));
    myfunction($(".container .menu .ulmenu2 li"),$(".container .ulmenu2 li a"),$(".container .content .menu2 .tab"));
    myfunction($(".container .menu .ulmenu3 li"),$(".container .ulmenu3 li a"),$(".container .content .menu3 .tab"));
    myfunction($(".container .menu .ulmenu4 li"),$(".container .ulmenu4 li a"),$(".container .content .menu4 .tab"));
    myfunction($(".container .menu .ulmenu5 li"),$(".container .ulmenu5 li a"),$(".container .content .menu5 .tab"));

});
