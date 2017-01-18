
app.controller("ListCtrl", function($scope, $http, myFactory){
  console.log("Here is the list controller")




myFactory.getListItems()
  .then((val)=> {
    $scope.list = val;
  })
  .catch(()=>{
    console.log("rejected!")
  })
})
