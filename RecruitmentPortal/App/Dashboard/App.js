// App.js
var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", { url: "/home", templateUrl: "home.html", controller: "HomeController" })
        .state("user", { url: "/user", templateUrl: "user.html", controller: "UserController" })
        .state("details", { url: "/details/:id", templateUrl: "details.html", controller: "DetailsController" });

    $urlRouterProvider.otherwise('/home');
});
