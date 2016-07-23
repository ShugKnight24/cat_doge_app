var catDoge = angular.module("catDoge", ["ngRoute"]);

catDoge.config(function($routeProvider){
  $routeProvider
    .when("/",
      {
        controller: "catDogeController",
        templateUrl: "partials/cat.html"
      })
    .when("/cat",
      {
        controller: "catDogeController",
        templateUrl: "partials/cat.html"
      })
    .when("/mice",
      {
        controller: "catDogeController",
        templateUrl: "partials/mice.html"
      })
    .when("/doge",
      {
        controller: "catDogeController",
        templateUrl: "partials/doge.html"
      })
    .when("/whale",
      {
        controller: "catDogeController",
        templateUrl: "partials/whale.html"
      })
    .otherwise({ redirectTo: "/whale" });
});
