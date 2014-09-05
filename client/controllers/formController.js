/**
 * Created by Macnube on 9/4/14.
 */
angular.module('myApp')
  .controller('FormController', function ($scope, $q, RouterService) {
    $scope.myForm = {};
    $scope.myForm.name = "";
    $scope.myForm.email = "";
    $scope.myForm.value = "";
    $scope.clickSubmit = function () {
      if ($scope.myForm.name && $scope.myForm.email && $scope.myForm.value) {
        console.log('Click Submit Fired! in formController - app.js');
        RouterService.formPostTest($scope.myForm);
      } else { console.log('Need Inputs!'); }
    };
  });
