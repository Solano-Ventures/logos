angular.module('myApp.services')
  .service('RouterService', function ($http, $q, $location) {
    var storage = [];
    var userStore = [];
    var userCache = {
      logo : []
    };

    //public methods
    function formPost (formObj) {
      angular.extend(userCache, formObj);
      var request = $http({
        method: 'POST',
        url: '/logo',
        data: formObj
      });

      return (request.then(function(response) {
        userCache.logo.push(response.data);
        getLogoPage();
      }, handleError));
    }

    function getLogoPage() {
      $location.path('/logo');
    }

    function getLogoFromStorage() {
      var logo = last(userCache.logo);
      return logo;
    }

    function getSignUpPage(logo) {
      storage.push(logo);
      $location.path('/signup');
    }

    function postSignUp(user) {
      var request = $http({
        method: 'POST',
        url: '/signup',
        data: userCache
      })
      .then(function(response) {
        getAccount();
      }, handleError);
    }

    function getAccount() {
      $http({
        method: 'GET',
        url: '/account',
        data: userCache.logo
      })
      .then(function(response) {
        console.log('userCache = ' + userCache);
        console.log('Server Response = ' + response);
        $location.path('/account');
      });
    }

    function showUserPage() {
      return userCache;
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
      postSignUp: postSignUp,
      getAccount: getAccount,
      showUserPage: showUserPage
    });
  }
);
