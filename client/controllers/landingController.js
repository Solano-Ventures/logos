angular.module('myApp.controllers')
  .controller('LandingController', function ($scope, $q, $http, RouterService) {
    $scope.data = {};
    $scope.data.firstName = "";
    $scope.data.lastName = "";
    $scope.data.definedBy = "";
    //$scope.data.color = "";
    $scope.clickSubmit = function () {
      if ($scope.data.firstName && $scope.data.lastName && $scope.data.definedBy ) {
        RouterService.formPost($scope.data);
      } else { console.log('Need Inputs!'); }
    };
  });
