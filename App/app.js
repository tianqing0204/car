var app=angular.module("myapp",["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/fuwu",{
            templateUrl:"App/View/fuwu.html",
            controller:"fuwucon"


        })
        .when("/jr",{
            templateUrl:"App/View/jr.html",
            controller:"jrcon"


        })
        .otherwise("/fuwu");

})


/*
var app=angular.module("myapp",['ngRoute']);
app.config(function ($routeProvider,  $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/tab",{
            templateUrl:'./App/View/tab.html'

        })
        .when('/slide',{
            templateUrl:'./App/View/slide.html'



        })
        .when('/sfq',{
            templateUrl:'./App/View/sfq.html'



        })

})*/
