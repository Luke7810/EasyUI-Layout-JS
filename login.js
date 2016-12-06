$(function() {
    $("#login").dialog({
        title: "login page",
        width: 300,
        height: 180,
        modal: true,
        iconCls: 'icon-help',
        buttons: '#btn',
    });


    if (!$('#manager').validatebox('isValid')) {
        $('#manager').focus();
    } else if (!$('#password').validatebox('isValid')) {
        $('#password').focus();
    }

    $("#btn a").click(function() {
        if (!$('#manager').validatebox('isValid')) {
            $('#manager').focus();
        } else if (!$('#password').validatebox('isValid')) {
            $('#password').focus();
        } else {
            alert("login........");
            //以下是真正项目是需要写入的Ajax校验方法。
            
            // $.ajax({
            //     url: 'checklogin.action',
            //     type: 'post',
            //     data: {
            //         username: $('#manmager').val(),
            //         password: $('#password').val(),
            //     },
            //     beforeSend: function() {
            //         $.messager.progress({
            //             text: 'logining.....',
            //         });
            //     },
            //     success: function() {
            //         $.messager.progress('close');
            //         if (data > 0) {
            //             location.href = 'admin.jsp';
            //         } else {
            //             $.messager.alert('login fail!', 'username or password is error!', function() {
            //                 $('#password').select();
            //             })
            //         }
            //     }
            // });

        }
    });

});
