define(['text!./buy.html',
'Swiper',
'src/pages/buy/buyroute.js',
'css!./buy.css'],function(html,Swiper){

var buy = {
      add:function(){
        $("#main").html(html)
      },
      initMenu:function(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 0,
            freeMode: true,
            onTouchStart:function(swiper,event){
                var active = event.target;
                $(active).siblings('a').removeClass('selected')
                $(active).addClass('selected')
            }
        });


      }
  }

  return buy;
})
