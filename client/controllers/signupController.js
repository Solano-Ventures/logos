angular.module('myApp')
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
  });
