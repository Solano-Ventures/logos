angular.module('myApp', ['ngRoute'])
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
  })
  .controller('FormController', function ($scope, $q, RouterService) {
    $scope.myForm = {};
    $scope.myForm.name = "";
    $scope.myForm.email = "";
    $scope.myForm.value = "";
    $scope.clickSubmit = function () {
      if ($scope.myForm.name && $scope.myForm.email && $scope.myForm.value) {
        console.log('Click Submit Fired! in formController - app.js');
        RouterService.formPostTest($scope.myForm);
      } else { console.log('Need Inputs!'); }
    };
  })

  .controller('LoginController', function ($scope, $q, RouterService) {
    $scope.loginForm = {}; 
    $scope.loginForm.email = "";
    $scope.loginForm.password = "";
    $scope.loginSubmit = function(){
      if($scope.loginForm.email && $scope.loginForm.password){
        console.log("Login Submit was fired!")
        RouterService.formPostTest($scope.loginForm)
      } else {
         console.log("needs all inputs")
      }
    }
  })

  .controller('SignupController', function ($scope, $q, RouterService) {
    $scope.signupForm = {}; 
    $scope.signupForm.email = "";
    $scope.signupForm.password = "";
    $scope.signupSubmit = function(){
      if($scope.signupForm.email && $scope.signupForm.password){
        console.log("Signup Submit was fired!")
        RouterService.formPostTest($scope.signupForm)
      } else {
         console.log("needs all inputs")
      }
    }
  })
