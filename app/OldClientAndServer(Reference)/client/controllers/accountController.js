angular.module('myApp.controllers')
  .controller('AccountController', function($scope, $q, $http, RouterService) {
    $scope.data = {};
    $scope.data.logo = [];
    $scope.populatePage = function() {
      console.log('Usercache = ' + RouterService.showUserPage());
      angular.extend($scope.data, RouterService.showUserPage());
    };
    $scope.populatePage();
  });
