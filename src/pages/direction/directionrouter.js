define(['src/myroute.js'],function(router){

  router
  .addRoute('#/direction/riben', function(req,next){

     require(['src/pages/direction/riben/riben.js'],function(riben){
        riben.add();
        riben.initWaterFall();
     })
  })
  .addRoute('#/direction/hanguo', function(req,next){
     $("#main").html("韩国")

    //  require(['src/pages/direction/hanguo/hanguo.js'],function(hanguo){
    //     hanguo.add();
    //  })
  })
})
