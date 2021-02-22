document.addEventListener('DOMContentLoaded',function (){
    var media = document.querySelector('.media')
    var btnplay = document.querySelectorAll('.pt-vegetable')
    for (let i = 0; i < btnplay.length; i++) {
        btnplay[i].onclick = function () {
            media.innerHTML = ` <audio controls autoplay><source src="${this.id}"></audio>`
        }
        btnplay[i].onblur = function () {
            media.innerHTML = ''
        }
    }
})
document.addEventListener('DOMContentLoaded', function () {
    var content_img = document.querySelectorAll('.pt-wrap-lump')
    var audio_abc = ['','../audio/audio_vegetable/1.mp3','../audio/audio_vegetable/2.mp3','../audio/audio_vegetable/3.mp3','../audio/audio_vegetable/4.mp3','../audio/audio_vegetable/5.mp3','../audio/audio_vegetable/6.mp3','../audio/audio_vegetable/7.mp3','../audio/audio_vegetable/8.mp3','../audio/audio_vegetable/9.mp3','../audio/audio_vegetable/10.mp3','../audio/audio_vegetable/11.mp3','../audio/audio_vegetable/12.mp3','../audio/audio_vegetable/13.mp3','../audio/audio_vegetable/14.mp3','../audio/audio_vegetable/15.mp3','../audio/audio_vegetable/16.mp3','../audio/audio_vegetable/17.mp3','../audio/audio_vegetable/18.mp3','../audio/audio_vegetable/19.mp3','../audio/audio_vegetable/20.mp3','../audio/audio_vegetable/21.mp3','../audio/audio_vegetable/22.mp3','../audio/audio_vegetable/23.mp3','../audio/audio_vegetable/24.mp3','../audio/audio_vegetable/25.mp3','../audio/audio_vegetable/26.mp3','../audio/audio_vegetable/27.mp3','../audio/audio_vegetable/28.mp3','../audio/audio_vegetable/29.mp3','../audio/audio_vegetable/30.mp3','../audio/audio_vegetable/31.mp3','../audio/audio_vegetable/32.mp3','../audio/audio_vegetable/33.mp3','../audio/audio_vegetable/34.mp3','../audio/audio_vegetable/35.mp3','../audio/audio_vegetable/36.mp3']
    for (var i = 1; i <= 36; i++) {
        content_img[i - 1].innerHTML += `<i class="fa fa-volume-up pt-volume pt-volume-white btnplay"></i>`
        console.log(`'../audio/vegetable/${i}.mp3'`)
    }
})
btnPlayMusic.onclick = function () {
    media.innerHTML = ` <audio controls autoplay><source src="../audio/read_abc/ABC-song.mp3"></audio>`
}
btnPlayMusic.ondblclick = function () {
    media.innerHTML = ``
}




