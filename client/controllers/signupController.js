angular.module('myApp.controllers')
  .controller('SignupController', function ($scope, $q, RouterService) {
    $scope.data = {};
    $scope.data.email = "";
    $scope.data.password = "";
    $scope.signupSubmit = function(){
      if($scope.data.email && $scope.data.password){
        console.log("Signup Submit was fired!");
        RouterService.formPostTest($scope.data);
      } else {
        console.log("needs all inputs");
      }
    };
  });
