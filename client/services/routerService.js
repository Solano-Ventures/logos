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
        getLogoPage();
      }, handleError));
    }

    function getLogoPage() {
        $location.path('/logo');
    }

    function getLogoFromStorage() {
      var logo = storage.pop();
      console.log(logo);
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
        logo: storage.pop()
      };

      var request = $http({
        method: 'POST',
        url: 'http://localhost:8000/signup',
        data: data
      });

      $location.path('/account');
      console.log(data);
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

    return({
      formPost: formPost,
      getLogoPage : getLogoPage,
      getLogoFromStorage : getLogoFromStorage,
      getSignUpPage: getSignUpPage,
      postSignUp: postSignUp
    });
  });
