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
            password_qr:{
                required:true,
                minlength:6
            },
            phone:{
                required:true,
                minlength:11
            },
            phone_num:{
                required:true
            },
            yq_num:{
                required:true
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
            password_qr: {
                required: " (密码不一致)"
            },
            phone: {
                required: " (手机号不能为空)",
                maxlength: " (手机号不能大于 11 位数)"
            },
            yq_num: {
                required: " (手机验证码不能为空)"
            },
            phone_num: {
                required: " (验证码不能为空)"
            }
        }
    });
});

$.validator.setDefaults({
    submitHandler: function() {
        alert("注册成功!");
        window.location.href="zc_success.html";
    }
});