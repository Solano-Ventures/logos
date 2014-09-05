/**
 * Created by Macnube on 9/4/14.
 */
angular.module('myApp')
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
  });
