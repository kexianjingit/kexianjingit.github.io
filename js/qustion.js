/**
 * Created by Administrator on 2016/9/18.
 */


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
    qiehuan(".qustion_left ul li","det_tit_curspan",".con_box_1");
});