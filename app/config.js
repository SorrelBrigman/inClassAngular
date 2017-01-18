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
