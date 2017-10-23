/**
 * Created by Administrator on 2016/8/29.
 */

$().ready(function() {
    // �ύʱ��֤��
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
                required: " (�˺Ų���Ϊ��)",
                minlength: " (�˺Ų������� 2 ����ĸ)"
            },
            password: {
                required: " (���벻��Ϊ��)",
                minlength: " (���벻������ 6 λ��)",
                maxlength: " (���벻�ܴ��� 12 λ��)"
            },
            password_qr: {
                required: " (���벻һ��)"
            },
            phone: {
                required: " (�ֻ��Ų���Ϊ��)",
                maxlength: " (�ֻ��Ų��ܴ��� 11 λ��)"
            },
            yq_num: {
                required: " (�ֻ���֤�벻��Ϊ��)"
            },
            phone_num: {
                required: " (��֤�벻��Ϊ��)"
            }
        }
    });
});

$.validator.setDefaults({
    submitHandler: function() {
        alert("ע��ɹ�!");
        window.location.href="zc_success.html";
    }
});