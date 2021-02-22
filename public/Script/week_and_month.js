var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pt-mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
var month = document.querySelector('.content_month')
var audio_month_link = ['','../audio/audio_month/1.mp3','../audio/audio_month/2.mp3','../audio/audio_month/3.mp3','../audio/audio_month/4.mp3','../audio/audio_month/5.mp3','../audio/audio_month/6.mp3','../audio/audio_month/7.mp3','../audio/audio_month/8.mp3','../audio/audio_month/9.mp3','../audio/audio_month/10.mp3','../audio/audio_month/11.mp3','../audio/audio_month/12.mp3']
var month_text = ['','January','February','March','April','May','June','July','August','September','October','November','December']
for (var i = 1; i <= 12; i++) {
    month.innerHTML+=`<div id="${i}" class="col-6 col-s-6 month_div"><h1 class="class-${i} tranfom${i}">${i}</h1><h2 class="tranfom${i+1} class-${i+3}">${month_text[i]}</h2><i class="fa fa-volume-up" aria-hidden="true"> </i></div>`
}
var media = document.querySelector('.media')
document.addEventListener('DOMContentLoaded',function (){
    var month_div = document.querySelectorAll('.month_div')
    for (let i = 0 ; i <= 12 ; i++){
        month_div[i].onclick = function (){
            media.innerHTML = ` <audio controls autoplay><source src="${audio_month_link[this.id]}"></audio>`
        }
    }
})
var audio_week_link = ['','../audio/day_in_week/2.mp3','../audio/day_in_week/3.mp3','../audio/day_in_week/4.mp3','../audio/day_in_week/5.mp3','../audio/day_in_week/6.mp3','../audio/day_in_week/7.mp3','../audio/day_in_week/8.mp3',]
var week_text = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var week = document.querySelector('.content_week')
for (let i = 2 ; i <= 8 ; i++){
    week.innerHTML+= `<div slot="${i}" class="col-6 col-s-12 week_div"><h1 class="class-${i} tranfom${i}">${i}</h1><h2 class="tranfom${i+1} class-${i+3}">${week_text[i-1]}</h2><i class="fa fa-volume-up" aria-hidden="true"> </i></div>`
}
var audio_week  = document.querySelectorAll('.week_div')
for (let i = 1; i < 8; i++){
    audio_week[i-1].onclick = function (){
        media.innerHTML = ` <audio controls autoplay><source src="${audio_week_link[this.slot-1]}"></audio>`
    }
}