var btnPlayMusic = document.querySelector('.play-music')
var media = document.querySelector('.media')
document.addEventListener('DOMContentLoaded',function (){


    var btn_start_abc = document.querySelector('.start_abc')
    var btn_start_vocabulary = document.querySelector('.start_vocabulary')
    var selector = document.querySelector('.selector_abc_container_master')
    var abc_course_slide = document.querySelector('.slide_abc')
    var abc_course = document.querySelector('.read_abc')
    var vocabulary_course = document.querySelector('.vocabulary')
    var btn_back = document.querySelector('.btn_back')
    var btn_back_container = document.querySelector('.btn_back_container')



    btn_start_abc.onclick = function (){
        selector.classList.add('hiden')
        abc_course_slide.classList.remove('hiden')
        abc_course.classList.remove('hiden')
        vocabulary_course.classList.add('hiden')
        btn_back_container.classList.remove('hiden')
    }
    btn_start_vocabulary.onclick = function (){
        selector.classList.add('hiden')
        abc_course_slide.classList.add('hiden')
        abc_course.classList.add('hiden')
        vocabulary_course.classList.remove('hiden')
        btn_back_container.classList.remove('hiden')
    }
    btn_back.onclick = function (){
        selector.classList.remove('hiden')
        abc_course_slide.classList.add('hiden')
        abc_course.classList.add('hiden')
        vocabulary_course.classList.add('hiden')
        btn_back_container.classList.add('hiden')
    }




document.querySelector('.content123').style.display='block'
    // var audio_abc = ['','../audio/read_abc/1.mp3','../audio/read_abc/2.mp3','../audio/read_abc/3.mp3','../audio/read_abc/4.mp3','../audio/read_abc/5.mp3','../audio/read_abc/6.mp3','../audio/read_abc/7.mp3','../audio/read_abc/8.mp3','../audio/read_abc/9.mp3','../audio/read_abc/10.mp3','../audio/read_abc/11.mp3','../audio/read_abc/12.mp3','../audio/read_abc/13.mp3','../audio/read_abc/14.mp3','../audio/read_abc/15.mp3','../audio/read_abc/16.mp3','../audio/read_abc/17.mp3','../audio/read_abc/18.mp3','../audio/read_abc/19.mp3','../audio/read_abc/20.mp3','../audio/read_abc/21.mp3','../audio/read_abc/22.mp3','../audio/read_abc/23.mp3','../audio/read_abc/24.mp3','../audio/read_abc/25.mp3','../audio/read_abc/26.mp3']

    var btnplay = document.querySelectorAll('.pt-img-abc')
    for (let i = 1;i<=btnplay.length;i++){
        btnplay[i-1].onclick = function () {
            media.innerHTML = ` <audio controls autoplay><source src="${this.id}"></audio>`
        }
        btnplay[i].onblur = function () {
            media.innerHTML = ''
        }
    }






})


document.addEventListener('DOMContentLoaded',function (){
    var audio_vocabulary = document.querySelectorAll('.audio_vocabulary')
    for (var i = 1 ; i <= audio_vocabulary.length;i++){
        audio_vocabulary[i-1].onclick = function (){
            media.innerHTML = ` <audio controls autoplay><source src="${this.id}"></audio>`
        }
        audio_vocabulary[i].onblur = function () {
            media.innerHTML = ''
        }
    }
})



btnPlayMusic.onclick = function (){
    media.innerHTML = ` <audio controls autoplay><source src="../audio/read_abc/ABC-song.mp3"></audio>`
}
btnPlayMusic.ondblclick = function (){
    media.innerHTML = ``
}