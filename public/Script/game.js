var audio_abc = ['', '../audio/read_abc/1.mp3', '../audio/read_abc/2.mp3', '../audio/read_abc/3.mp3', '../audio/read_abc/4.mp3', '../audio/read_abc/5.mp3', '../audio/read_abc/6.mp3', '../audio/read_abc/7.mp3', '../audio/read_abc/8.mp3', '../audio/read_abc/9.mp3', '../audio/read_abc/10.mp3', '../audio/read_abc/11.mp3', '../audio/read_abc/12.mp3', '../audio/read_abc/13.mp3', '../audio/read_abc/14.mp3', '../audio/read_abc/15.mp3', '../audio/read_abc/16.mp3', '../audio/read_abc/17.mp3', '../audio/read_abc/18.mp3', '../audio/read_abc/19.mp3', '../audio/read_abc/20.mp3', '../audio/read_abc/21.mp3', '../audio/read_abc/22.mp3', '../audio/read_abc/23.mp3', '../audio/read_abc/24.mp3', '../audio/read_abc/25.mp3', '../audio/read_abc/26.mp3']
var textlearn = ['', 'a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'g.jpg', 'h.jpg', 'i.jpg', 'j.jpg', 'k.jpg', 'l.jpg', 'm.jpg', 'n.jpg', 'o.jpg', 'p.jpg', 'q.jpg', 'r.jpg', 's.jpg', 't.jpg', 'u.jpg', 'v.jpg', 'w.jpg', 'x.jpg', 'y.jpg', 'z.jpg']
var res = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var meg = document.querySelector('.msg')
var media = document.querySelector('.media')
var hello = document.querySelector('.hello')
var kqtv = document.querySelector('.res_content')
var abc_game = document.querySelector('.btn_next_tap_game')
var math_game = document.querySelector('.btn_next_tap_game1')
var btnaction = document.querySelector('button[name=btnaction]')
var btn_again = document.querySelector('button[name=btn_again]')
var btn_submit = document.querySelector('button[name=btn_submit]')
var listening = document.querySelector('button[name=listening]')
var key_values = document.querySelector("input[name=key_values]")
var all_btn = document.querySelector('.btn_paly_game')
abc_game.onclick = function (){
    abc_game.classList.add('active_page')
    math_game.classList.remove('active_page')
    document.querySelector('.abc_game_page').classList.remove('hiden')
    document.querySelector('.qlpage').classList.add('hiden')
}
math_game.onclick = function (){
    abc_game.classList.remove('active_page')
    math_game.classList.add('active_page')
    document.querySelector('.abc_game_page').classList.add('hiden')
    document.querySelector('.qlpage').classList.remove('hiden')
}
btnaction.onclick = function () {
    btn_again.classList.add('hiden')
    btn_submit.classList.add('hiden')
    listening.classList.remove('hiden')
    key_values.classList.remove('hiden')
    btnaction.classList.add('hiden')
    all_btn.classList.remove('hiden')
    hello.classList.add('hiden')
    meg.innerText='click listening'
}
listening.onclick = function () {
    meg.innerText='What do you hear ?'
    listening.classList.add('hiden')
    kqtv.innerHTML=`<img class="abc_show" src="../Img/dauhoi.png">`
    btn_again.classList.remove('hiden')
    btn_submit.classList.remove('hiden')
    var a = Math.floor(Math.random() * 26) + 1;
    var b = `<audio controls autoplay><source src="${audio_abc[a]}"></audio>`
    media.innerHTML = `<audio controls autoplay><source src="${audio_abc[a]}"></audio>`
    btn_again.onclick = function () {
        meg.innerText='What do you hear ?'
        media.innerHTML = `${b}`
        kqtv.innerHTML=`<img class="abc_show" src="../Img/dauhoi.png">`
    }
    btn_submit.onclick = function () {
        if (key_values.value.length<1){
            meg.innerText=''
            media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/beep-06.mp3"></audio>`
            meg.innerText='Please enter the result first'
        }else if (key_values.value.length>=1){
            if (key_values.value.toLowerCase()===`${res[a]}`){
                media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/success.mp3"></audio>`
                key_values.value=''
                kqtv.innerHTML=`<img src="../img_abc/${textlearn[a]}">`
                btn_again.classList.add('hiden')
                btn_submit.classList.add('hiden')
                listening.classList.remove('hiden')
                key_values.classList.remove('hiden')
                btnaction.classList.add('hiden')
                meg.innerText='mission completed'
            }else if (key_values.value.toLowerCase()!==`${res[a]}`){
                key_values.value=''
                meg.innerText='Mission Failed'
                kqtv.innerHTML=`<img src="../Img/failed.png">`
                media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/failed.mp3"></audio>`
            }
        }
    }
}
var btn_action2 = document.querySelector('.btnaction2');
var Number_1 = document.querySelector('.Number_1');
var Number_2 = document.querySelector('.Number_2');
var bt = document.querySelector('.bt');
var btn_submit2 = document.querySelector('.btn_paly_game2>div>.btn1');
var valuesCheck = document.querySelector('.number_values')
var kq = document.querySelector('.kq')
var bang = document.querySelector('.bang')
var next = document.querySelector('.btn_paly_game2>div>.btn2')
var res2 = document.querySelector('.res_content2')
var input = document.querySelector('.number_values')
btn_action2.onclick = function (){
    document.querySelector('.hello2').classList.add('hiden')
    document.querySelector('.msg2').innerHTML='enter the problem results'
    input.classList.remove('hiden')
    btn_submit2.classList.remove('hiden')
    btn_action2.classList.add('hiden')
    var aa = Math.floor(Math.random() * 5) + 5;
    var bb = Math.floor(Math.random() * 5) + 1;
    var cc = Math.floor(Math.random() * 2) + 1;
    var dd
    var aaa
    bang.innerHTML='='
    kq.innerHTML='..?'
    res2.innerHTML='<img src="../Img/dauhoi.png">'
    if (cc===1){
        dd='+'
        aaa=aa+bb
    }else {
        dd='-'
        aaa=aa-bb
    }
    btn_submit2.onclick = function (){
        if (valuesCheck.value.length<1){
            valuesCheck.value=''
            document.querySelector('.msg2').innerHTML='You have not entered the results'
            media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/beep-06.mp3"></audio>`
        }else if(Number(valuesCheck.value)===aaa){
            valuesCheck.value=''
            document.querySelector('.msg2').innerHTML='Mission Completed'
            media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/success.mp3"></audio>`
            kq.innerHTML=aaa
            res2.innerHTML='<img src="../Img/ngoisao-removebg-preview.png">'
            next.classList.remove('hiden')
            btn_submit2.classList.add('hiden')
        }else if(Number(valuesCheck.value)!==aaa){
            document.querySelector('.msg2').innerHTML='Mission Failed'
            res2.innerHTML='<img src="../Img/failed.png">'
            valuesCheck.value=''
            media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/failed.mp3"></audio>`
            kq.innerHTML='..?'
        }
    }
    Number_1.innerHTML=`${aa}`
    Number_2.innerHTML=`${bb}`
    bt.innerHTML=dd
}
next.onclick=function (){
    next.classList.add('hiden')
    btn_submit2.classList.remove('hiden')
    document.querySelector('.msg2').innerHTML='enter the problem results'
    btn_submit2.classList.remove('hiden')
    btn_action2.classList.add('hiden')
    var aa = Math.floor(Math.random() * 5) + 5;
    var bb = Math.floor(Math.random() * 5) + 1;
    var cc = Math.floor(Math.random() * 2) + 1;
    var dd
    var aaa
    bang.innerHTML='='
    kq.innerHTML='..?'
    res2.innerHTML='<img src="../Img/dauhoi.png">'

    if (cc===1){
        dd='+'
        aaa=aa+bb
    }else {
        dd='-'
        aaa=aa-bb
    }
    btn_submit2.onclick = function (){
        if (valuesCheck.value.length<1){
            valuesCheck.value=''
            document.querySelector('.msg2').innerHTML='You have not entered the results'

            media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/beep-06.mp3"></audio>`
        }else if(Number(valuesCheck.value)===aaa){
            valuesCheck.value=''
            document.querySelector('.msg2').innerHTML='Mission Completed'
            media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/success.mp3"></audio>`
            kq.innerHTML=aaa
            res2.innerHTML='<img src="../Img/ngoisao-removebg-preview.png">'
            next.classList.remove('hiden')
            btn_submit2.classList.add('hiden')
        }else if(Number(valuesCheck.value)!==aaa){
            document.querySelector('.msg2').innerHTML='Mission Failed'
            res2.innerHTML='<img src="../Img/failed.png">'
            valuesCheck.value=''
            media.innerHTML = `<audio controls autoplay><source src="../audio/audio-succes-fales/failed.mp3"></audio>`
            kq.innerHTML='..?'
        }
    }
    Number_1.innerHTML=`${aa}`
    Number_2.innerHTML=`${bb}`
    bt.innerHTML=dd
}