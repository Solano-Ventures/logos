angular.module('myApp.controllers')
  .controller('SignupController', function ($scope, $q, RouterService) {
    $scope.data = {};
    $scope.data.email = "";
    $scope.data.password = "";
    $scope.clickSubmit = function(){
      console.log('Click Submit Fired!');
      if($scope.data.email && $scope.data.password){
        RouterService.postSignUp($scope.data);
      } else {
        console.log("needs all inputs");
      }
    };
  });