/*
app.controller("fuwucon",["$scope","appService","$timeout",function ($scope,appService,$timeout) {
    $timeout(function () {
        var swiper=new Swiper(".swiper-container",{
            loop:true,
            outoplay:3000
            speed:3000

        });


    },1000);


}] )*/
app.controller("fuwucon", function ($scope, $timeout) {
    $timeout(function () {
        var swiper=new Swiper(".swiper-container",{
            loop:true,
            autoplay:1000,
            speed:1000

        });

    },1000);
})
