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
            yz_num:{
                required:true,
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
            yz_num: {
                required: " (��֤�벻��Ϊ��)"
            }
        }

    });
});


//��֤�ɹ���2���Ӻ���ʾ�û������˳�����Ϣ��ť
$.validator.setDefaults({
    submitHandler: function() {
        alert("��¼�ɹ�!");
        //$.cookie('user',$('#user').val() );
        setTimeout(function(){
            $('#member,#logout,#message').show();
            $('#reg_a,#login_a').hide();
            //$('#member').html($.cookie('user'));
        },2000);
    }
});

//����˳�������ָ��url
$('#logout').click(function () {
    window.location.href = 'http://localhost:63342/WWW/zdcy-blue00/index.html';   //��תָ��url
});