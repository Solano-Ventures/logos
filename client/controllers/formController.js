angular.module('myApp')
  .controller('FormController', function ($scope, $q, $http, RouterService) {
    $scope.myForm = {};
    $scope.myForm.name = "";
    $scope.myForm.email = "";
    $scope.myForm.value = "";
    $scope.clickSubmit = function () {
      if ($scope.myForm.name && $scope.myForm.email && $scope.myForm.value) {
        console.log('Click Submit Fired! in formController ');
        RouterService.formPost($scope.myForm);
      } else { console.log('Need Inputs!'); }
    };
  });
