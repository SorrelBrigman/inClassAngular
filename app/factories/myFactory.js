app.factory("myFactory", function($http) {


return {
  getListItems : () => {

      return $http.get(`list.json`)
      .then(function(val) {
        return val.data.list

      })
    }
  }

})
