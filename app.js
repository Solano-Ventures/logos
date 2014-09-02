/**
	* Created by Macnube on 8/29/14.
	*/
var app = angular.module('myApp', []);

app.controller('formController', function($scope, $q, RouterService, $http) {
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



