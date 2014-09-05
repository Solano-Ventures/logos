angular.module('myApp.services')
  .service('RouterService', function ($http, $q, $location) {
    var storage = [];

    //public methods
    function formPost (formObj) {
      var request = $http({
        method: 'POST',
        url: 'http://localhost:8000/logo',
        data: formObj
      });

      return (request.then(function(response) {
        storage.push(response.data);
        logoGet();
      }, handleError));
    }

    function logoGet() {
      var request = $http({
        method: 'GET',
        url: 'http://localhost:8000/signup'
      });

      request.then(function(response) {
        $location.path('/logo');
      });
    }

    function getLogo() {
      var logo = storage.pop();
      console.log(logo);
      return logo.logo;
    }

    //private methods

    function handleError(response) {
      if ( ! angular.isObject(response.data) || ! response.data.message ) {
        return $q.reject('An unknown error occurred.');
      } else {
        return $q.reject(response.data.message);
      }
    }

    function handleSuccess(response) {
      return response.data;
    }


    return({
      formPost: formPost,
      getLogo : getLogo,
      logoGet : logoGet
    });
  });
