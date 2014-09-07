angular.module('myApp.controllers')
  .controller('d3Controller', function($scope, RouterService) {
    $scope.data = {};
    $scope.data.logo = [];
    $scope.getLogo = function() {
        $scope.data.logo = RouterService.getLogoFromStorage();
    };
    $scope.getSignUp = function() {
      RouterService.getSignUpPage({logo: $scope.data.logo});
    };
    $scope.getLogo();
  });
