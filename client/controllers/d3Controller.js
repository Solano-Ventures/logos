/**
 * Created by Macnube on 9/4/14.
 */
angular.module('myApp')
  .controller('d3Controller', function($scope) {
    $scope.data = [{score: 100}];
    $scope.makeData = function() {
      $scope.data = [];
      console.log('d3 controller fired');
      for (var i = 0; i < 10; i ++) {
        $scope.data.push({score: Math.floor(Math.random() * 100) });
      }
      console.log($scope.data);
    };
  });
