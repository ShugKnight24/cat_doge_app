"use strict";

var catDoge = angular.module("catDoge");

catDoge.controller("navController",["$scope", "$location", function($scope, $location){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }
}]);
