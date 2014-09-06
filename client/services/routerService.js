angular.module('myApp.services')
  .service('RouterService', function ($http, $q, $location) {
    var storage = [];

    //public methods
    function formPost (formObj) {
      var request = $http({
        method: 'POST',
        url: '/logo',
        data: formObj
      });

      return (request.then(function(response) {
        storage.push(response.data);
        getLogoPage();
      }, handleError));
    }

    function getLogoPage() {
        $location.path('/logo');
    }

    function getLogoFromStorage() {
      var logo = last(storage);
      return logo.logo;
    }

    function getSignUpPage(logo) {
      storage.push(logo);
      $location.path('/signup');
    }

    function postSignUp(user) {
      var data = {
        email : user.email,
        password : user.password,
        logo: last(storage)
      };

      var request = $http({
        method: 'POST',
        url: '/signup',
        data: data
      });

      $location.path('/account');
    }
    // Waiting for Chris on the Server
    //   return request
    //   .then(function(response) {
    //     console.log(response);
    //     $location.path('/account')
    //   }, handleError);
    // }
    //
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

    function last (array) {
      return array[array.length-1];
    }

    return({
      formPost: formPost,
      getLogoPage : getLogoPage,
      getLogoFromStorage : getLogoFromStorage,
      getSignUpPage: getSignUpPage,
      postSignUp: postSignUp
    });
  });
