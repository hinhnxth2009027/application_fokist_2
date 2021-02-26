var btnShowMenu = document.querySelector('.navbar-icon')
var menuTop = document.querySelector('.menutop')
btnShowMenu.onclick = function () {
    menuTop.classList.toggle('tran')
    menuTop.classList.toggle('width')
}
var txt_email_contact_page = document.querySelector('.contact_page_email')
var txt_user_contact_page = document.querySelector('.contact_page_user')
var txt_comment_contact_page =document.querySelector('.contact_page_comment')
var msg_email_contact_page = document.querySelector('.msg_email')
var msg_user_contact_page = document.querySelector('.msg_user')
var msg_comment_contact_page = document.querySelector('.msg_comment')
var btn_submit_contact_page = document.querySelector('button[name=btnsubmit_contactpage]')
btn_submit_contact_page.onclick=function (){
    if (txt_email_contact_page.value.length<1||txt_user_contact_page.value.length<1||txt_comment_contact_page.value.length<=1){
        msg_email_contact_page.innerHTML='Email invalidate'
        msg_email_contact_page.classList.add('err')
        msg_user_contact_page.innerHTML='Username is too short or already exists'
        msg_user_contact_page.classList.add('err')
        msg_comment_contact_page.innerHTML='Please do not leave this field submitting a review'
        msg_comment_contact_page.classList.add('err')
        return false;
    }else if (txt_email_contact_page.value.length>10&&txt_user_contact_page.value.length>1&&txt_comment_contact_page.value.length>=1){
        alert('submited')
        return true;
    }else if (txt_email_contact_page.value.length<=10&&txt_email_contact_page.value.length>=1&&txt_user_contact_page.value.length>1&&txt_comment_contact_page.value.length>=1){
        alert('Submit Failed Email invalidate')
        return false;
    }
}
txt_email_contact_page.onkeyup=function (){
    msg_email_contact_page.innerHTML=''
}
txt_user_contact_page.onkeyup=function (){
    msg_user_contact_page.innerHTML=''
}
txt_comment_contact_page.onkeyup=function (){
    msg_comment_contact_page.innerHTML=''
}
txt_email_contact_page.onblur = function (){
    if (txt_email_contact_page.value.length<=10||txt_email_contact_page.value.length>=100){
        msg_email_contact_page.innerHTML='Email invalidate'
        msg_email_contact_page.classList.add('err')
        msg_email_contact_page.classList.remove('succes')
    }else if (txt_email_contact_page.value.length>=11||txt_email_contact_page.value.length<=99){
        msg_email_contact_page.innerHTML='Email is in the correct format'
        msg_email_contact_page.classList.remove('err')
        msg_email_contact_page.classList.add('succes')
    }
}
txt_user_contact_page.onblur = function (){
    if (txt_user_contact_page.value.length<2||txt_user_contact_page.value.length>=40){
        msg_user_contact_page.innerHTML='Username is too short or already exists'
        msg_user_contact_page.classList.add('err')
        msg_user_contact_page.classList.remove('succes')
    }else if (txt_user_contact_page.value.length>=2||txt_user_contact_page.value.length<=39){
        msg_user_contact_page.innerHTML='Valid username'
        msg_user_contact_page.classList.remove('err')
        msg_user_contact_page.classList.add('succes')
    }
}
txt_comment_contact_page.onblur = function (){
    if (txt_comment_contact_page.value.length<=1||txt_comment_contact_page.value.length>=10000){
        msg_comment_contact_page.innerHTML='Please do not leave this field submitting a review'
        msg_comment_contact_page.classList.add('err')
        msg_comment_contact_page.classList.remove('succes')
    }else if (txt_comment_contact_page.value.length>=2||txt_comment_contact_page.value.length<=9999){
        msg_comment_contact_page.innerHTML='Your opinion will be of great value to us'
        msg_comment_contact_page.classList.remove('err')
        msg_comment_contact_page.classList.add('succes')
    }
}