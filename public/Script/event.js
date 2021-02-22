document.addEventListener('DOMContentLoaded', function () {
    var btn_login = $('.btn_login')
    var btn_register = $('.btn_register')
    var only = $('.only')
    var form_login = $('.form1')
    var form_register = $('.form2')


$('.btn_show').click(function (){
    $('.all_form').toggleClass('hiden')
    $('.container_event').toggleClass('hiden')
})



    btn_login.click(function (){
        only.css({'transform':'translateX(0)'})
       form_login.css({'display':'block'})
        form_register.css({'display':'none'})
    })


    btn_register.click(function (){
        only.css({'transform':'translateX(133%)'})
        form_register.css({'display':'block'})
        form_login.css({'display':'none'})
    })

    $('#register_form').validate({
        rules: {
            user_email:{
                required:true,
                minlength:10,
                email:true
            },
            user_name:{
                required:true,
                minlength:2,
                maxlength:40,
            },
            password:{
                required:true,
                minlength:2,
                maxlength:40,
            },
            comfirm_Password:{
                equalTo:'#password'
            }
        },
        messages: {
            user_email:{
                required:'Email field cannot be left blank',
                minlength:'email not found',
                email:'wrong email format',
            },
            user_name:{
                required:'User Name field cannot be left blank',
            },
            password:{
                required:'Password field cannot be left blank',
                minlength:'Weak password',
                maxlength:'You will have problems if the password is too long',
            },
            comfirm_Password:{
                equalTo:"password incorrect"
            },


        }
    })





    $("#login-form").validate({
        rules: {
            user_email: {
                required: true,
                minLength: 2
            },
            password: {
                required: true,
            }
        },
        messages: {
            user_email: {
                required: "Enter email or phoneNumber",
                minLength: "No user found",
                return:false
            },
            password: {
                required: "Please enter a password",
                return:false
            }
        }
    });
    var show_bar = $('#show_bar')
    var bar = $('.sidebar_event')
    var close = $('.fa-times')

    close.click(function (){
        bar.toggleClass('menu_hide')
        show_bar.css('display','block')
    })

    show_bar.click(function (){
        bar.toggleClass('menu_hide')
        show_bar.css('display','none')
    })
})