angular.module('myApp.controllers')
  .controller('LoginController', function ($scope, $q, RouterService) {
    $scope.data = {};
    $scope.data.email = "";
    $scope.data.password = "";
    $scope.loginSubmit = function(){
      if($scope.data.email && $scope.data.password){
        console.log("Login Submit was fired!");
        RouterService.formPostTest($scope.data);
      } else {
        console.log("needs all inputs");
      }
    };
  });
