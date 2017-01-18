app.controller("MainCtrl", function($scope,) {
  $scope.potatoes = "bake!"
  $scope.onClickFunction = (arg)=>{
    console.log("my function on scope")
    console.log("arg: ", arg)
  }
})
