angular.module('myApp.controllers')
  .controller('d3Controller', function($scope, RouterService) {
    $scope.data = {};
    $scope.data.logos = [];
    $scope.getLogo = function() {
        $scope.data.logos = RouterService.getLogoFromStorage();
    };
    $scope.getSignUp = function() {
      RouterService.getSignUpPage({logo: $scope.data.logos});
    };
    $scope.getLogo();
  });
