/**
	* Created by Macnube on 8/29/14.
	*/
angular.module('myApp', [])
.controller('formController', function($scope) {
				$scope.myForm = {};
				$scope.myForm.name = "";
				$scope.myForm.email = "";
				$scope.myForm.value = "";
				$scope.clickSubmit = function() {
						if ($scope.myForm.name && $scope.myForm.email && $scope.myForm.value) {
								//callPost($scope.form.name, $scope.form.email, $scope.form.value);
								console.log('Click Submit Fired!');
						}
						else { console.log('Need Inputs!')}
				}
		});

angular.module('d3', [])
.factory('d3Service', ['$document', '$q', '$rootScope',

				function($document, $q, $rootScope) {
						var d = $q.defer();

						function onScriptLoad() {
								$rootScope.$apply(function() {d.resolve(window.d3); });
						}

						var scriptTag = $document[0].createElement('script');
						scriptTag.type ='text/javascript';
						scriptTag.async = true;
						scriptTag.src = 'http://d3js.org/d3.v3.min.js';
						scriptTag.onreadystatechange = function () {
								if (this.readyState == 'complete') onScriptLoad();
						};
						scriptTag.onload = onScriptLoad;

						var body = $document[0].getElementsByTagName('body')[0];
						body.appendChild(scriptTag);

				return {
						d3 : function() { return	d.promise; }
				};

		}]);

