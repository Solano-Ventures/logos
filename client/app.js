angular.module('myApp', ['ngFx','myApp.directives', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landingView.html',
        /*controller: 'landingController'*/
      })

      .when('/login',{
        templateUrl: 'views/loginView.html',
       /* controller: 'LoginController'*/
      })

      .when('/signup',{
        templateUrl: 'views/signupView.html',
     /*   controller: 'SignupController'*/
      })

      .otherwise({redirectTo:'/'});
  });

