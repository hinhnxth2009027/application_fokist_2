document.addEventListener('DOMContentLoaded', function () {
    var login_title = $('#login_title')
    var register_title = $('#register_title')
    var bottom_title = $('.bottom_title')
    var text_login_title = $('.login_title')
    var text_register_title = $('.register_title')
    var form_login = $('#user_login')
    var form_register = $('#user_register')
    var account = $('.modal')
    var btnclose = $('.close')
    var btnopen = $('.open')

    register_title.click(function () {
        bottom_title.css({'transform': 'translateX(100%)'})
        text_login_title.removeClass('text_color_orange')
        text_register_title.addClass('text_color_orange')
        form_login.css({'transform': 'translateX(-100%) translateY(-60%)'})
        form_register.css({'transform': 'translateX(0) translateY(-60%)'})
        $('#user_email-error').css({'display': 'none'})
        $('#password-error').css({'display': 'none'})
    })

    login_title.click(function () {
        bottom_title.css({'transform': 'translateX(0)'})
        text_login_title.addClass('text_color_orange')
        text_register_title.removeClass('text_color_orange')
        form_login.css({'transform': 'translateX(0)  translateY(0)'})
        form_register.css({'transform': 'translateX(100%) translateY(0)'})
        $('#user_email-error').css({'display': 'block'})
        $('#password-error').css({'display': 'block'})
    })


    $('#loginform').validate({
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
                return: false
            },
            password: {
                required: "Please enter a password",
                return: false
            }
        }
    })

    $('#registerform').validate({
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
            user_email: {
                required: 'Email field cannot be left blank',
                minlength: 'email not found',
                email: 'wrong email format',
            },
            user_name: {
                required: 'User Name field cannot be left blank',
            },
            password: {
                required: 'Password field cannot be left blank',
                minlength: 'Weak password',
                maxlength: 'You will have problems if the password is too long',
            },
            comfirm_Password: {
                equalTo: "password incorrect"
            }
        }
    })
    btnclose.click(function (){
        account.css({'display':'none'})
    })

    btnopen.click(function (){
        account.css({'display':'block'})
    })
    $('.goto_profile').click(function (){
        window.location.href = location.protocol+"/profile";
        }
    )

    var event_content = $('.event')
    var fa_caret_up = $('.fa-caret-up')

    var show_event = $('.fa-sort-desc')
    show_event.click(function (){
        show_event.css('display','none')
        fa_caret_up.css('display','block')
        event_content.css('height','1000px')
        event_content.css('overflow','scroll')
    })

    fa_caret_up.click(function () {
        show_event.css('display', 'block')
        fa_caret_up.css('display', 'none')
        event_content.css('height', '90px')
        event_content.css('overflow', 'hidden')
    })

    var key_search = $('input[name=search]')

    $('.btn_shearch').click(function (){
        // window.location.href = location.protocol+key_search.val;
        location.href=`${window.location.href.split('?')[0]}?search=${key_search.val()}`
    })
})

