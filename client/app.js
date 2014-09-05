angular.module('myApp', ['myApp.directives', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/formView.html',
        controller: 'FormController'
      })

      .when('/login',{
        templateUrl: 'views/loginView.html',
        controller: 'LoginController'
      })

      .when('/signup',{
        templateUrl: 'views/signupView.html',
        controller: 'SignupController'
      })

      .otherwise({redirectTo:'/'})
  });

