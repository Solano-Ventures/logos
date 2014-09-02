var app = angular.module('myApp', []);

app.config(function($routeProvider) {
  .when('/', {
    templateUrl: views/formView.html,
    controller: 'FormController'
  })
});
app.controller('FormController', function($scope, $q, RouterService, $http) {
    $scope.myForm = {};
    $scope.myForm.name = "";
    $scope.myForm.email = "";
    $scope.myForm.value = "";
    $scope.clickSubmit = function() {
      if ($scope.myForm.name && $scope.myForm.email && $scope.myForm.value) {
        console.log('Click Submit Fired! in formController - app.js');
        RouterService.formPostTest($scope.myForm);
      } else { console.log('Need Inputs!')}
    }
  });



