app.controller("MainCtrl", function($scope, varFactory) {
  $scope.potatoes = "bake!"
  $scope.onClickFunction = (arg)=>{
    console.log("my function on scope")
    console.log("arg: ", arg)
  }

  $scope.thingFromFactory = varFactory.getThatVar();

  $scope.setter = (newVal) => {
    console.log("newVal", newVal)
    varFactory.setThatVar(newVal)
    $scope.thingFromFactory = newVal;
  }

})
