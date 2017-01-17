
const app = angular.module("monkeyButtApp", ['ngRoute'])


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



app.controller("ListCtrl", function($scope, $http){
  console.log("Here in the list controller")

  $http.get("list.json")
  .then((val)=> {
    console.log("list.json", val.data);
    $scope.list = val.data.list;
  })
  .catch(()=>{
    console.log("rejected!")
  })
})
