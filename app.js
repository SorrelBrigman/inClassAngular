
var app = angular.module("monkeyButtApp", ['ngRoute'])


app.config(($routeProvider)=>{
  $routeProvider
    .when("/", {
      controller: "MainCtrl",
      templateUrl: "partials/main.html"
    })
    .when("/list", {
      controller: "ListCtrl",
      templateUrl: "partials/list.html"
    })
})

app.controller("MainCtrl", function($scope) {
  $scope.potatoes = "bake!"
})



app.controller("ListCtrl", function($scope){
  console.log("Here in the list controller")
})
