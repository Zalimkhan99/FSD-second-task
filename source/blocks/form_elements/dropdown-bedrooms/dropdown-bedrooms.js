$(document).ready(function(){
    $(".dropdown-list").hide();
    
    $(".dropdown-icon").click(function(){
      $(this).parent().next().slideToggle();
    });
  
  // плюс
      $('.controls__plus-sleeping').click(function ($countVal) {
  
  
           $countVal = $(".sleeping");
          $countVal.html(parseInt($countVal.html() )+maxi);
          $countVal.change();
          suma();
          complete();
          cleans();
      });
      $('.controls__plus-bed').click(function ($countVal) {
  
  
          $countVal = $(".bed");
          $countVal.html(parseInt($countVal.html() )+maxi);
          $countVal.change();
          suma();
          complete();
          cleans();
      });
      $('.controls__plus-bathroom').click(function ($countVal) {
  
          if(parseInt($(".sleeping").html())==0){
              blockVal();
          }
          if(parseInt($(".sleeping").html())>0){
              maxi = 1;
              complete();
          }
          $countVal = $(".bathroom");
          $countVal.html(parseInt($countVal.html() )+maxi);
          $countVal.change();
          suma();
          cleans();
  
      });
  var mini=1;
  var maxi =1;
      function blockVal() {
          mini = 0;
          maxi = 0;
      }
  
  // минус
      $('.controls__minus-sleeping').click(function ($countVal) {
  
  
          $countVal = $(".sleeping");
          if(parseInt($countVal.html())==0){
              blockVal();
          }
          if(parseInt($countVal.html())>0){
              mini = 1;
          }

          if(parseInt($countVal.html())==1 && parseInt($(".bathroom").html())>0){
            blockVal();
        }
  
          $countVal.html(parseInt($countVal.html() )-mini);
          $countVal.change();
          suma();
          complete();
          cleans();
      });
      $('.controls__minus-bed').click(function ($countVal) {
  
  
          $countVal = $(".bed");
          if(parseInt($countVal.html())==0){
              blockVal();
          }
          if(parseInt($countVal.html())>0){
              mini = 1;
          }
          $countVal.html(parseInt($countVal.html() )-mini);
          $countVal.change();
          suma();
          complete();
          cleans();
      });
      $('.controls__minus-bathroom').click(function ($countVal) {
  
  
          $countVal = $(".bathroom");
          if(parseInt($countVal.html())==0){
              blockVal();
          }
          if(parseInt($countVal.html())>0){
              mini = 1;
          }
          $countVal.html(parseInt($countVal.html() )-mini);
          $countVal.change();
          suma();
          complete()
          cleans()
      });
  
  
      function suma() {
          let dropdownName= document.querySelector('.dropdown__name')
          let sleeping = $(".sleeping");
          let bed = $(".bed");
          let bathroom = $(".bathroom");
  
          let allValue = parseInt(bathroom.html()) + parseInt(sleeping.html()) + parseInt(bed.html());
           let roombath = parseInt(bathroom.html())  ;
           let sleep = parseInt(sleeping.html());
           let bedroom = parseInt(bed.html());
          let wordSleeping='';
          let wordbed='';
          let wordRoomBath='';
          if(roombath>0){
              wordRoomBath= '';
          }
          if (allValue==0 && roombath==0){
              wordRoomBath='Сколько спален и кроватей?'
          }
  
           if(sleep>0 && sleep<2){
               wordSleeping = sleep + ' Спальня, '
           }
          if(sleep>1 && sleep<5){
              wordSleeping = sleep +' Спальни, '
          }
          if(sleep>4){
              wordSleeping = sleep +' Спален, '
          }
  
          if(bedroom>0 && bedroom<2){
              wordbed = bedroom + ' Кровать'
          }
          if(bedroom>1 && bedroom<5){
              wordbed =  bedroom +' Кровати...'
          }
          if(bedroom>4){
              wordbed = bedroom +' Кроватей...'
          }
  
           if(allValue== 0){
               dropdownName.innerText= 'Сколько спален и кроватей?'
           }
          dropdownName.innerText= wordSleeping + wordbed + wordRoomBath;
  
      }
  
      function complete() {
          let sleeping = $(".sleeping");
          let bed = $(".bed");
          let bathroom = $(".bathroom");
          let allValue = parseInt(sleeping.html()) + parseInt(bed.html()) + parseInt(bathroom.html());
          if(allValue> 14){
              maxi =0;
          }
          if(allValue<15){
              maxi =1;
          }
      }
  
      function cleans() {
          let sleeping = $(".sleeping");
          let bed = $(".bed");
          let bathroom = $(".bathroom");
          let allValue = parseInt(sleeping.html()) + parseInt(bed.html()) + parseInt(bathroom.html());
          let visual= $('.dropdown-list__button_clean')
  
              if (allValue>0){
              visual.css("display","block")
  
              }
              if (allValue<1){
                  visual.css("display","none")
  
              }
  
      }
      $('.dropdown-list__button_clean').click(function ($countVal) {
          let sleeping = $(".sleeping");
          let bed = $(".bed");
          let bathroom = $(".bathroom");
          let dropdownName= document.querySelector('.dropdown__name')
  
          sleeping.html(0);
          bed.html(0);
          bathroom.html(0);
          dropdownName.innerText= 'Сколько спален и кроватей?'
          cleans();
      });
  
  
  
      $('.dropdown-list__button_apply').click(function () {
  
    $('.dropdown__list').css("display","none")
  
  
  
      });
  
  });
  
  
  