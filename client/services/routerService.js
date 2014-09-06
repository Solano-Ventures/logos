angular.module('myApp.services')
  .service('RouterService', function ($http, $q, $location) {
    var storage = [];

    //public methods
    function formPost (formObj) {
      // console.log('here is ', formObj);
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
      // console.log(logo);
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
      console.log(data.logo)
      var request = $http({
        method: 'POST',
        url: '/signup',
        data: data
      })
      .then(function(response) {
        console.log('Server response = ' + response.data);
        $location.path('/account')
      }, handleError);
    }
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
