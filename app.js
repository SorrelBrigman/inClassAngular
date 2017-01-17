
const app = angular.module("monkeyButtApp", ['ngRoute'])


app.config(($routeProvider, $locationProvider)=>{
  $locationProvider.hashPrefix('');

  $routeProvider
    .when("/", {
      controller: "MainCtrl",
      templateUrl: "partials/main.html"
    })
    .when("/list", {
      controller: "ListCtrl",
      templateUrl: "partials/list.html"
    })
    .when("/list/:somevariable", {
      controller: "DetailCtrl",
      templateUrl: "partials/details.html"

    })
    .otherwise( {
      redirectTo: "/"
    })
})

app.controller("MainCtrl", function($scope,) {
  $scope.potatoes = "bake!"
  $scope.onClickFunction = (arg)=>{
    console.log("my function on scope")
    console.log("arg: ", arg)
  }
})



app.controller("ListCtrl", function($scope, $http){
  console.log("Here is the list controller")

  $http.get("list.json")
  .then((val)=> {
    console.log("list.json", val.data);
    $scope.list = val.data.list;
  })
  .catch(()=>{
    console.log("rejected!")
  })
})


app.controller("DetailCtrl", function($scope, $routeParams, $http){
  console.log("Here is the detail controller")

  $scope.thatNumber = $routeParams.somevariable;

  $http.get("list.json")
  .then((val)=> {
    console.log("list.json", val.data);
    let list = val.data.list
    $scope.selectedItem = list[$scope.thatNumber];
  })
  .catch(()=>{
    console.log("rejected!")
  })
})
