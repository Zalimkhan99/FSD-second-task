$(document).ready(function(){
  $(".dropdown-list").hide();
  
  $(".dropdown-icon").click(function(){
    $(this).parent().next().slideToggle();
  });

// плюс
    $('.controls__plus-adult').click(function ($count) {


         $count = $(".adult");
        $count.html(parseInt($count.html() )+max);
        $count.change();
        sum();
        stop();
        clean();
    });
    $('.controls__plus-child').click(function ($count) {


        $count = $(".child");
        $count.html(parseInt($count.html() )+max);
        $count.change();
        sum();
        stop();
        clean();
    });
    $('.controls__plus-babes').click(function ($count) {

        if(parseInt($(".adult").html())==0){
            blockValue();
        }
        if(parseInt($(".adult").html())>0){
            max = 1;
            stop();
        }
        $count = $(".babes");
        $count.html(parseInt($count.html() )+max);
        $count.change();
        sum();
        clean();

    });
var min=1;
var max =1;
    function blockValue() {
        min = 0;
        max = 0;
    }

// минус
    $('.controls__minus-adult').click(function ($count) {


        $count = $(".adult");
        if(parseInt($count.html())==0){
            blockValue();
        }
        if(parseInt($count.html())>0){
            min = 1;
        }
        if(parseInt($count.html())==1 && parseInt($(".babes").html())>0){
            blockValue();
        }

        $count.html(parseInt($count.html() )-min);
        $count.change();
        sum();
        stop();
        clean();
    });
    $('.controls__minus-child').click(function ($count) {


        $count = $(".child");
        if(parseInt($count.html())==0){
            blockValue();
        }
        if(parseInt($count.html())>0){
            min = 1;
        }
        $count.html(parseInt($count.html() )-min);
        $count.change();
        sum();
        stop();
        clean();
    });
    $('.controls__minus-babes').click(function ($count) {


        $count = $(".babes");
        if(parseInt($count.html())==0){
            blockValue();
        }
        if(parseInt($count.html())>0){
            min = 1;
        }
        $count.html(parseInt($count.html() )-min);
        $count.change();
        sum();
        stop()
        clean()
    });


    function sum() {
        let dropdownName= document.querySelector('.dropdown__name')
        let adult = $(".adult");
        let child = $(".child");
        let babes = $(".babes");
         let allValue = parseInt(adult.html()) + parseInt(child.html());
         let babe = parseInt(babes.html());
        let wordbabe='';
         if(babe>0 && babe<2){
            wordbabe = ', '+babe +' младенец'
         }
        if(babe>1 && babe<5){
            wordbabe = ', ' + babe +' младенеца'
        }
        if(babe>4){
            wordbabe = ', ' + babe +' младенецев'
        }

         if(allValue== 0){
             dropdownName.innerText= 'Сколько гостей'
         }
         if (allValue>0 && allValue <2){
             dropdownName.innerText= allValue + ' Гость' + wordbabe
         }

         if(allValue>1 && allValue<5){
             dropdownName.innerText= allValue + ' Гостя' + wordbabe
         }
         if(allValue>4){
             dropdownName.innerText= allValue + ' Гостей' + wordbabe
         }

    }

    function stop() {
        let adult = $(".adult");
        let child = $(".child");
        let babes = $(".babes");
        let allValue = parseInt(adult.html()) + parseInt(child.html()) + parseInt(babes.html());
        if(allValue> 14){
            max =0;
        }
        if(allValue<15){
            max =1;
        }
    }

    function clean() {
        let adult = $(".adult");
        let child = $(".child");
        let babes = $(".babes");
        let allValue = parseInt(adult.html()) + parseInt(child.html()) + parseInt(babes.html());
        let visual= $('.dropdown-list__button_clean')

            if (allValue>0){
            visual.css("display","block")

            }
            if (allValue<1){
                visual.css("display","none")

            }

    }
    $('.dropdown-list__button_clean').click(function ($count) {
        let adult = $(".adult");
        let child = $(".child");
        let babes = $(".babes");
        let dropdownName= document.querySelector('.dropdown__name')

        adult.html(0);
        child.html(0);
        babes.html(0);
        dropdownName.innerText= 'Сколько гостей'
        clean();
    });



    $('.dropdown-list__button_apply').click(function () {

  $('.dropdown__list').css("display","none")



    });

});