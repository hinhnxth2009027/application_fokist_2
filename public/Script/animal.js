document.addEventListener('DOMContentLoaded', function () {
    var btn_start_domestic_animals = document.querySelector('.btn_start_domestic_animals') //động vật trong nhà
    var btn_start_wild_animals = document.querySelector('.btn_start_wild_animals') //đọng vật hoang giã
    var btn_start_insect = document.querySelector('.btn_start_insect') // côn trùng
    var btn_start_marine_animals = document.querySelector('.btn_start_marine_animals') //động vật biển

    var content_domestic_animals = document.querySelector('.content_domestic_animals')
    var content_wild_animals = document.querySelector('.content_wild_animals')
    var content_insect = document.querySelector('.content_insect')
    var content_marine_animals = document.querySelector('.content_marine_animals')
    var all_selecter = document.querySelector('.all_selecter')


    var btn_back = document.querySelector('.btn_back')
    var show_back = document.querySelector('.back_container')

    var audio_animal = ['', '../audio/audi0-animal/1.mp3', '../audio/audi0-animal/2.mp3', '../audio/audi0-animal/3.mp3', '../audio/audi0-animal/4.mp3', '../audio/audi0-animal/5.mp3', '../audio/audi0-animal/6.mp3', '../audio/audi0-animal/7.mp3', '../audio/audi0-animal/8.mp3', '../audio/audi0-animal/9.mp3', '../audio/audi0-animal/10.mp3', '../audio/audi0-animal/11.mp3', '../audio/audi0-animal/12.mp3', '../audio/audi0-animal/13.mp3', '../audio/audi0-animal/14.mp3', '../audio/audi0-animal/15.mp3', '../audio/audi0-animal/16.mp3', '../audio/audi0-animal/17.mp3', '../audio/audi0-animal/18.mp3', '../audio/audi0-animal/19.mp3', '../audio/audi0-animal/20.mp3', '../audio/audi0-animal/21.mp3', '../audio/audi0-animal/22.mp3', '../audio/audi0-animal/23.mp3', '../audio/audi0-animal/24.mp3', '../audio/audi0-animal/25.mp3', '../audio/audi0-animal/26.mp3', '../audio/audi0-animal/27.mp3', '../audio/audi0-animal/28.mp3', '../audio/audi0-animal/29.mp3', '../audio/audi0-animal/30.mp3', '../audio/audi0-animal/31.mp3', '../audio/audi0-animal/32.mp3', '../audio/audi0-animal/33.mp3', '../audio/audi0-animal/34.mp3', '../audio/audi0-animal/35.mp3', '../audio/audi0-animal/36.mp3',]
    var nameAnimal = ['', 'bird', 'cows', 'butterfly', 'seahorses', 'Bee', 'cat', 'penguin', 'Dragonfly', 'mouse', 'kangaroo', 'Peacock', 'crocodile', 'chicken', 'giraffe', 'monkey', 'camel', 'Lion', 'pig', 'deer', 'Zebra', 'Panda', 'turtle', 'snake', 'squirrel', 'rabbit', 'shrimp', 'Buffalo', 'parrot', 'duck', 'elephant', 'owl', 'crab', 'eagle bird', 'dog', 'bat', 'frog']
    var media = document.querySelector('.media')
    var content = document.querySelector('.content')
    // for (let i = 1; i <= 36; i++) {
    //     content.innerHTML += `<div class="col-4 col-s-4 i" id="${i}"><img src="../Img/img_animal/${i}.jpg"><br><h1>${nameAnimal[i]}</h1><i class="fa fa-volume-up" aria-hidden="true"></i></div>`
    //     console.log(`'../audio/audi0-animal/${i}.mp3',`)
    // }
    var btnplayAudio = document.querySelectorAll('.i')
    for (let i = 0; i < btnplayAudio.length; i++) {
        btnplayAudio[i].onclick = function () {
                media.innerHTML = ` <audio controls autoplay><source src="${this.id}"></audio>`
            }
            btnplayAudio[i].onblur = function () {
                media.innerHTML = ''
            }
        }
    btn_start_domestic_animals.onclick = function (){
        content_domestic_animals.classList.remove('hiden')
        content_wild_animals.classList.add('hiden')
        content_insect.classList.add('hiden')
        content_marine_animals.classList.add('hiden')
        all_selecter.classList.add('hiden')
        show_back.classList.remove('hiden')
    }

    btn_start_wild_animals.onclick = function (){
        content_domestic_animals.classList.add('hiden')
        content_wild_animals.classList.remove('hiden')
        content_insect.classList.add('hiden')
        content_marine_animals.classList.add('hiden')
        all_selecter.classList.add('hiden')
        show_back.classList.remove('hiden')
    }

    btn_start_insect.onclick = function (){
        content_domestic_animals.classList.add('hiden')
        content_wild_animals.classList.add('hiden')
        content_insect.classList.remove('hiden')
        content_marine_animals.classList.add('hiden')
        all_selecter.classList.add('hiden')
        show_back.classList.remove('hiden')
    }
    btn_start_marine_animals.onclick = function (){
        content_domestic_animals.classList.add('hiden')
        content_wild_animals.classList.add('hiden')
        content_insect.classList.add('hiden')
        content_marine_animals.classList.remove('hiden')
        all_selecter.classList.add('hiden')
        show_back.classList.remove('hiden')
    }



    btn_back.onclick = function (){
        content_domestic_animals.classList.add('hiden')
        content_wild_animals.classList.add('hiden')
        content_insect.classList.add('hiden')
        content_marine_animals.classList.add('hiden')
        all_selecter.classList.remove('hiden')
        show_back.classList.add('hiden')
    }

})
