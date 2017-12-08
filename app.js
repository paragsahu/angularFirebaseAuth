var myApp = angular.module("loginApp" , ["ngRoute" ,"firebase"]);
myApp.config(["$routeProvider" , "$locationProvider" , function($routeProvider, $locationProvider){

    $routeProvider.when("/login" , {
        templateUrl:"views/login.html",
        controller:"regCtr"
    }).
    when('/register' , {
        templateUrl:"views/register.html",
        controller:"regCtr"
       
    }).
    when("/success" , {
        templateUrl:"/views/success.html",
        controller:"successCtr"
    })
    .otherwise({
        redirectTo:"/login"
    });
}]);


