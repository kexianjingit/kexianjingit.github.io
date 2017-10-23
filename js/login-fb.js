/**
 * Created by Administrator on 2016/8/29.
 */


$().ready(function() {

    // 提交时验证表单
    var validator = $("#login123").validate({

        errorPlacement: function(error, element) {
            // Append error within linked label
            $( element )
                .closest( "form" )
                .find( "em[id='" + element.attr( "id" ) + "']" )
                .append( error );
        },

        rules:{
            user:{
                required:true,
                minlength:2
            },
            password:{
                required:true,
                minlength:6
            },
            yz_num:{
                required:true,
            }
        },

        messages: {
            user: {
                required: " (账号不能为空)",
                minlength: " (账号不能少于 2 个字母)"
            },
            password: {
                required: " (密码不能为空)",
                minlength: " (密码不能少于 6 位数)",
                maxlength: " (密码不能大于 12 位数)"
            },
            yz_num: {
                required: " (验证码不能为空)"
            }
        }

    });
});


//验证成功，2秒钟后显示用户名、退出、消息按钮
$.validator.setDefaults({
    submitHandler: function() {
        alert("登录成功!");
        setTimeout(function(){
            $('#member,#logout,#message').show();
            $('#reg_a,#login_a').hide();
        },2000);
    }
});

//点击退出，返回指定url
$('#logout').click(function () {
    window.location.href = 'https://www.zdcy100.com/';   //跳转指定url
});