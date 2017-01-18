

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
