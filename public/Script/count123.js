var content = document.querySelector('.one-to-twenty')
var content1 = document.querySelector('.twenty-to-sixty')
var content2 = document.querySelector('.sixty-to-100')
var count = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty- two ', 'twenty- three', 'twenty- four', 'twenty- five', ' twenty- six', 'twenty- seven', 'twenty- eight', 'twenty- nine', 'thirty', 'thirty- one', 'thirty- two', 'thirty- three', 'thirty- four', 'thirty- five', 'thirty- six', 'thirty- seven', 'thirty- eight', 'thirty- nine', 'forty', 'forty- one', 'forty- two', 'forty- three', 'forty- four', 'forty- five', 'forty- six', 'forty- seven', 'forty- eight', 'forty- nine', 'fifty', 'fifty- one', 'fifty- two', 'fifty- three', ' fifty- four', 'fifty- five', 'fifty- six', 'fifty- seven', 'fifty- eight', 'fifty- nine', 'sixty', 'sixty- one', 'sixty- two', 'sixty- three', 'sixty- four', 'sixty- five', 'sixty- six', 'sixty- seven', 'sixty- eight', 'sixty- nine', 'seventy', 'seventy- one', 'seventy- two', 'seventy- three', 'seventy- four', 'seventy- five', 'seventy- six', 'seventy- seven', 'seventy- eigh', 'seventy- nine', 'eighty', 'eighty- one', ' eighty- two', 'eighty- three', 'eighty- four', 'eighty- five', 'eighty- six', 'eighty- seven', 'eighty- eight', 'eighty- nine', 'ninety', 'ninety- one', 'ninety- two', 'ninety- three', 'ninety- four', 'ninety- five', 'ninety- six', 'ninety- seven', 'ninety- eight', 'ninety- nine', 'one hundred']
var count_audio = ['', '../audio/123-100audio/1.mp3', '../audio/123-100audio/2.mp3', '../audio/123-100audio/3.mp3', '../audio/123-100audio/4.mp3', '../audio/123-100audio/5.mp3', '../audio/123-100audio/6.mp3', '../audio/123-100audio/7.mp3', '../audio/123-100audio/8.mp3', '../audio/123-100audio/9.mp3', '../audio/123-100audio/10.mp3', '../audio/123-100audio/11.mp3', '../audio/123-100audio/12.mp3', '../audio/123-100audio/13.mp3', '../audio/123-100audio/14.mp3', '../audio/123-100audio/15.mp3', '../audio/123-100audio/16.mp3', '../audio/123-100audio/17.mp3', '../audio/123-100audio/18.mp3', '../audio/123-100audio/19.mp3', '../audio/123-100audio/20.mp3', '../audio/123-100audio/21.mp3', '../audio/123-100audio/22.mp3', '../audio/123-100audio/23.mp3', '../audio/123-100audio/24.mp3', '../audio/123-100audio/25.mp3', '../audio/123-100audio/26.mp3', '../audio/123-100audio/27.mp3', '../audio/123-100audio/28.mp3', '../audio/123-100audio/29.mp3', '../audio/123-100audio/30.mp3', '../audio/123-100audio/31.mp3', '../audio/123-100audio/32.mp3', '../audio/123-100audio/33.mp3', '../audio/123-100audio/34.mp3', '../audio/123-100audio/35.mp3', '../audio/123-100audio/36.mp3', '../audio/123-100audio/37.mp3', '../audio/123-100audio/38.mp3', '../audio/123-100audio/39.mp3', '../audio/123-100audio/40.mp3', '../audio/123-100audio/41.mp3', '../audio/123-100audio/42.mp3', '../audio/123-100audio/43.mp3', '../audio/123-100audio/44.mp3', '../audio/123-100audio/45.mp3', '../audio/123-100audio/46.mp3', '../audio/123-100audio/47.mp3', '../audio/123-100audio/48.mp3', '../audio/123-100audio/49.mp3', '../audio/123-100audio/50.mp3', '../audio/123-100audio/51.mp3', '../audio/123-100audio/52.mp3', '../audio/123-100audio/53.mp3', '../audio/123-100audio/54.mp3', '../audio/123-100audio/55.mp3', '../audio/123-100audio/56.mp3', '../audio/123-100audio/57.mp3', '../audio/123-100audio/58.mp3', '../audio/123-100audio/59.mp3', '../audio/123-100audio/60.mp3', '../audio/123-100audio/61.mp3', '../audio/123-100audio/62.mp3', '../audio/123-100audio/63.mp3', '../audio/123-100audio/64.mp3', '../audio/123-100audio/65.mp3', '../audio/123-100audio/66.mp3', '../audio/123-100audio/67.mp3', '../audio/123-100audio/68.mp3', '../audio/123-100audio/69.mp3', '../audio/123-100audio/70.mp3', '../audio/123-100audio/71.mp3', '../audio/123-100audio/72.mp3', '../audio/123-100audio/73.mp3', '../audio/123-100audio/74.mp3', '../audio/123-100audio/75.mp3', '../audio/123-100audio/76.mp3', '../audio/123-100audio/77.mp3', '../audio/123-100audio/78.mp3', '../audio/123-100audio/79.mp3', '../audio/123-100audio/80.mp3', '../audio/123-100audio/81.mp3', '../audio/123-100audio/82.mp3', '../audio/123-100audio/83.mp3', '../audio/123-100audio/84.mp3', '../audio/123-100audio/85.mp3', '../audio/123-100audio/86.mp3', '../audio/123-100audio/87.mp3', '../audio/123-100audio/88.mp3', '../audio/123-100audio/89.mp3', '../audio/123-100audio/90.mp3', '../audio/123-100audio/91.mp3', '../audio/123-100audio/92.mp3', '../audio/123-100audio/93.mp3', '../audio/123-100audio/94.mp3', '../audio/123-100audio/95.mp3', '../audio/123-100audio/96.mp3', '../audio/123-100audio/97.mp3', '../audio/123-100audio/98.mp3', '../audio/123-100audio/99.mp3', '../audio/123-100audio/100.mp3']
var media = document.querySelector('.media')
// for (var i = 1; i <= 21; i++) {
//     content.innerHTML += `<div class="col-4 img-audio" id="${i}"><h1 class="class-${i} tranfom${i}">${i}</h1><i class="fa fa-volume-up" aria-hidden="true"> </i><br><h2 class="class-${i}">${count[i]}</h2></div>`
// }
// for (var i = 21; i <= 60; i++) {
//     content1.innerHTML += `<div class="col-3 img-audio" id="${i}"><h1 class="class-${i} tranfom${i}">${i}</h1><i class="fa fa-volume-up" aria-hidden="true"> </i><br><h2 class="class-${i}">${count[i]}</h2></div>`
// }
// for (var i = 61; i <= 100; i++) {
//     content2.innerHTML += `<div class="col-3 img-audio" id="${i}"><h1 class="class-${i} tranfom${i}">${i}</h1><i class="fa fa-volume-up" aria-hidden="true"> </i><br><h2 class="class-${i}">${count[i]}</h2></div>`
// }
document.addEventListener('DOMContentLoaded', function () {
    var btn_action1 = document.querySelector('.btn_action1')
    var btn_action2 = document.querySelector('.btn_action2')
    var btn_action3 = document.querySelector('.btn_action3')
    var btn_action4 = document.querySelector('.btn_action4')
    var content_1_10 = document.querySelector('.content_1_10')
    var content_11_30 = document.querySelector('.content_11_30')
    var content_31_60 = document.querySelector('.content_31_60')
    var content_61_100 = document.querySelector('.content_61_100')
    var selecter = document.querySelector('.selector')
    var btn_back = document.querySelector('.btn_back')
    btn_back.onclick = function (){
        content_1_10.classList.add('hiden')
        content_11_30.classList.add('hiden')
        content_31_60.classList.add('hiden')
        content_61_100.classList.add('hiden')
        selecter.classList.remove('hiden')
        btn_back.classList.add('hiden')
    }
    btn_action1.onclick = function () {
        content_1_10.classList.remove('hiden')
        content_11_30.classList.add('hiden')
        content_31_60.classList.add('hiden')
        content_61_100.classList.add('hiden')
        selecter.classList.add('hiden')
        btn_back.classList.remove('hiden')
    }
    btn_action2.onclick = function () {
        content_1_10.classList.add('hiden')
        content_11_30.classList.remove('hiden')
        content_31_60.classList.add('hiden')
        content_61_100.classList.add('hiden')
        selecter.classList.add('hiden')
        btn_back.classList.remove('hiden')
    }
    btn_action3.onclick = function () {
        content_1_10.classList.add('hiden')
        content_11_30.classList.add('hiden')
        content_31_60.classList.remove('hiden')
        content_61_100.classList.add('hiden')
        selecter.classList.add('hiden')
        btn_back.classList.remove('hiden')
    }
    btn_action4.onclick = function () {
        content_1_10.classList.add('hiden')
        content_11_30.classList.add('hiden')
        content_31_60.classList.add('hiden')
        content_61_100.classList.remove('hiden')
        selecter.classList.add('hiden')
        btn_back.classList.remove('hiden')
    }
    var number_show = document.querySelector('.number_show')
    var img_show = document.querySelector('.img_show')
    var playaudio = document.querySelectorAll('.audio_count')
    var show_number_text = document.querySelector('.show_number_text')
    for (var a = 0; a <= playaudio.length; a++) {
        playaudio[a].onclick = function () {
            img_show.innerHTML = `<img src="${this.slot}" width="50%" height="auto">`
            number_show.innerHTML = `<div style="text-align: center"><h1 style="font-size: 120px;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: #000000;font-weight: bold" class="class-${this.firstElementChild.slot} audio_count1" >${this.firstElementChild.slot}</h1> <br> <h2 style="-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: #000000; font-size: 80px" class="class-${this.firstElementChild.slot}">${this.firstElementChild.id}</h2></div>`
            media.innerHTML = ` <audio controls autoplay><source src="${this.id}"></audio>`
        }
        playaudio[a].onblur = function () {
            media.innerHTML = ``
        }
    }
})







document.addEventListener('DOMContentLoaded', function () {
    var playaudio = document.querySelectorAll('.img-audio')
    for (var a = 0; a <= playaudio.length; a++) {
        playaudio[a].onclick = function () {
            media.innerHTML = ` <audio controls autoplay><source src="${this.slot}"></audio>`
        }
        playaudio[a].onblur=function (){
            media.innerHTML = ``
        }
    }
})

