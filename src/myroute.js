define(['Router'],function(Router){

    var router = new Router()

    .route('#/life', function(req, next){


        require(['src/pages/life/life.js'],function(life){
            // 引入导航栏
            life.add();

            // 导航栏布局
            life.initMenu();
            // 默认页面
            location.href = '#/life/hf'
        })
    })
    .route('#/direction', function(req, next){
        require(['src/pages/direction/direction.js'],function(direction){
            direction.add();

            direction.initMenu();

            location.href='#/direction/riben'
        })
    })
    .route('#/brand', function(req, next){
        require(['src/pages/brand/brand.js'],function(brand){
            brand.add();
        })
    })
    .route('#/buy', function(req, next){
        require(['src/pages/buy/buy.js'],function(buy){
            buy.add();
            buy.initMenu();
            location.href = '#/buy/all'
        })
    })
    .route('#/detail/:id', function(req, next){
        var id = req.params.id;
        console.log('id>>' + id)
        require(['src/pages/detail/detail.js'],function(detail){
            detail.add(id);
        })
    })
    .route('#/goods/:id', function(req, next){
        var id = req.params.id;
        require(['src/pages/goods/goods.js'],function(goods){
            goods.add(id);
        })
    })

    return router;
})
