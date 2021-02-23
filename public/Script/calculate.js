document.addEventListener('DOMContentLoaded',()=>{
    var $ = document.querySelector.bind(document)
    var $$ = document.querySelectorAll.bind(document)


    var btn_tabs = $$('.btn_tab_item')
    var tabs = $$('.tabs_item')

    btn_tabs.forEach((tap,index)=>{
        var tab = tabs[index]
        tap.onclick = function (){
            $('.btn_tab_item.index').classList.add('none_active')
            $('.btn_tab_item.index.none_active').classList.remove('index')
            $('.tabs_item.index').classList.add('hiden')
            $('.tabs_item.index.hiden').classList.remove('index')
            this.classList.remove('none_active')
            this.classList.add('index')
            tab.classList.remove('hiden')
            tab.classList.add('index')
        }
    })




    var btn_tabs1 = $$('.btn_tab_item1')
    var tabs1 = $$('.tabs_item1')
    btn_tabs1.forEach((tap,index)=>{
        var tab1 = tabs1[index]
        tap.onclick = function (){
            $('.btn_tab_item1.index').classList.add('none_active')
            $('.btn_tab_item1.index.none_active').classList.remove('index')
            $('.tabs_item1.index').classList.add('hiden')
            $('.tabs_item1.index.hiden').classList.remove('index')
            this.classList.remove('none_active')
            this.classList.add('index')
            tab1.classList.remove('hiden')
            tab1.classList.add('index')

        }
    })

    var select_ter = $('.container_selecter')
    var btn_show_content_addition = $('.start_addition')
    var btn_show_content_subtraction = $('.start_subtraction')
    var content_addition = $('.conten_addition')
    var content_subtraction = $('.conten_subtraction')
    var back_container = $('.back_container')
    var btn_back = $('.back')



    btn_show_content_addition.onclick = function (){
         back_container.classList.remove('hiden')
        content_addition.classList.remove('hiden')
        content_subtraction.classList.add('hiden')
        select_ter.classList.add('hiden')
    }


    btn_show_content_subtraction.onclick = function (){
         back_container.classList.remove('hiden')
        content_addition.classList.add('hiden')
        content_subtraction.classList.remove('hiden')
        select_ter.classList.add('hiden')
    }

    btn_back.onclick = function (){
        back_container.classList.add('hiden')
        content_addition.classList.add('hiden')
        content_subtraction.classList.add('hiden')
        select_ter.classList.remove('hiden')
    }
})