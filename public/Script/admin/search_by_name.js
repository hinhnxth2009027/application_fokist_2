document.addEventListener("DOMContentLoaded",function (){
    var btn_search = $('#btn_search')
    var content_search = $('#search')
    btn_search.click(function (){
        location.href=`${window.location.href.split('?')[0]}?userName=${content_search.val()}`
    })
})