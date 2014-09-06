angular.module('myApp.controllers')
  .controller('LandingController', function ($scope, $q, $http, RouterService) {
    $scope.data = {};
    $scope.data.firstName = "";
    $scope.data.lastName = "";
    $scope.data.definedBy = "";
    $scope.data.color = "";

    $scope.hexToRgb = function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        console.log(hex, result)
        return result ? 'RGBA(' + parseInt(result[1], 16) + ',' + 
                                  parseInt(result[2], 16) + ',' +
                                  parseInt(result[3], 16) + ',1.0)' : null;
    };

    $scope.clickSubmit = function () {
      if ($scope.data.firstName && $scope.data.lastName && $scope.data.definedBy ) {
        $scope.data.color = $scope.hexToRgb($scope.data.color);
        console.log($scope.data.color)
        RouterService.formPost($scope.data);
      } else { console.log('Need Inputs!'); }
    };
  });
