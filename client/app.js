
angular.module('myApp', [
  'ngFx',
  'myApp.directives',
  'myApp.controllers',
  'myApp.services',
  'ngRoute'
   ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landingView.html',
        controller: 'LandingController'
      })
      .when('/login',{
        templateUrl: 'views/loginView.html',
        controller: 'LoginController'
      })
      .when('/signup',{
        templateUrl: 'views/loginview.html',
        controller: 'SignupController'
      })
      .when('/logo', {
        templateUrl: 'views/logoView.html',
        controller: 'd3Controller'
      })
      .otherwise({redirectTo:'/'});
  });

angular.module('myApp.controllers', []);
angular.module('myApp.directives', []);
angular.module('myApp.services', []);
