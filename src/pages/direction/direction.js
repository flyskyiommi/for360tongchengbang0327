// define(['text!./direction.html','css!./direction.css'],function(html){
//   var direction = {
//     add:function(){
//         $("#main").html(html)
//     }
//   }

//   return direction;
// })



define(['text!./direction.html',
'Swiper',
'src/pages/direction/directionrouter.js',
'css!./direction.css'],function(html,Swiper){

var direction = {
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

  return direction;
})
