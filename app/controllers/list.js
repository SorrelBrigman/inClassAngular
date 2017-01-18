
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
