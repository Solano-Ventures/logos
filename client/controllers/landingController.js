angular.module('myApp.controllers')
  .controller('LandingController', function ($scope, $q, $http, RouterService) {
    $scope.data = {};
    $scope.data.firstName = "";
    $scope.data.lastName = "";
    $scope.data.value = "";
    $scope.data.logos = [];
    $scope.clickSubmit = function () {
      if ($scope.data.firstName && $scope.data.lastName && $scope.data.value) {
        RouterService.formPost($scope.data);
      } else { console.log('Need Inputs!'); }
    };
  });
