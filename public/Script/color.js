document.addEventListener('DOMContentLoaded', function () {
    var colorAudio = ['','../audio/color/1.mp3','../audio/color/2.mp3','../audio/color/3.mp3','../audio/color/4.mp3','../audio/color/5.mp3','../audio/color/6.mp3','../audio/color/7.mp3','../audio/color/8.mp3','../audio/color/9.mp3','../audio/color/10.mp3','../audio/color/11.mp3','../audio/color/12.mp3']
    var colorText = ['','red','blue','green','yellow','purple','orange','black','pink','cyan','grey','violet','brown']
    var content = document.querySelector('.content>div')


    var content_color = document.querySelector('.content_color')
    var btn_Show_content = document.querySelector('.btn_show')
    var btn_back_color = document.querySelector('.back_color')
    var show_back = document.querySelector('.container_back')
    var select_course = document.querySelector('.select_course')


    btn_Show_content.onclick = function (){
        content_color.classList.remove('hiden')
        select_course.classList.add('hiden')
        show_back.classList.remove('hiden')
    }

    btn_back_color.onclick = function (){
        content_color.classList.add('hiden')
        select_course.classList.remove('hiden')
        show_back.classList.add('hiden')
    }




    // for (var i = 1; i <= 12; i++) {
    //     content.innerHTML+=`<div class="col-4 bgcolor${i} i" id="${i}"><h1 class="color${i}">${colorText[i]}</h1><br><i class="fa fa-volume-up color${i}" aria-hidden="true""></i></div>`
    // }

})


document.addEventListener('DOMContentLoaded',function (){
    var media = document.querySelector('.media')
    var playaudio = document.querySelectorAll('.i')
    for (var a = 0; a <= playaudio.length; a++) {
        playaudio[a].onclick = function () {
            media.innerHTML = ` <audio controls autoplay><source src="${this.id}"></audio>`
        }
        playaudio[a].onblur = function () {
            media.innerHTML = ''
        }
    }
})
