angular.module('myApp.controllers')
  .controller('SignupController', function ($scope, $q, RouterService) {
<<<<<<< HEAD
    $scope.data = {};
    $scope.data.email = "";
    $scope.data.password = "";
    $scope.clickSubmit = function(){
      console.log('Click Submit Fired!');
      if($scope.data.email && $scope.data.password){
        RouterService.postSignUp($scope.data);
=======
    $scope.signupForm = {};
    $scope.signupForm.email = "";
    $scope.signupForm.password = "";
    $scope.signupSubmit = function(){
      if($scope.signupForm.email && $scope.signupForm.password){
        console.log("Signup Submit was fired!");
        RouterService.authPost($scope.signupForm);
>>>>>>> (feat) built basic mongo server
      } else {
        console.log("needs all inputs");
      }
    };
  });
