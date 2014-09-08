angular.module('LogosMain.services', [])
  .service('RouterService', function($http, $q, $location) {

    //Public API
    return {
      postLogos: postLogos,
      getPublicFeed: getPublicFeed,
      signUp : signUp
    };

    function signUp(user) {
      $http({
        method : 'POST',
        url : '/signup',
        data : user
      })
      .then(
        function(value) { return value; },
        function(reason) { return reason; }
        );
    }

    function postLogos(userLogos) {
      /*userLogos = {
        firstName : 'firstName',
        lastName : 'lastName',
        'definedBy' : 'definedBy',
        'color' : RGBA(r,g,b,a)
        }
        */
      $http({
        method : 'POST',
        url : '/logo',
        data : userLogos
      })
      .then(
        function(value) { return value; },
        function(reason) { console.log(reason); return false;}
      );
    }

    function getPublicFeed() {
      $http({
        method : 'GET',
        url : '/publicfeed'
      })
      .then(
        function(value) { return value; },
        function(reason) { return reason; }
      );
    }


  })
  .service('UtilityService', function($http, $q, $location) {

    //Public API
    return {
      createValidate : createValidate,
      parseFeed : parseFeed
    };

    function createValidate(userLogos) {
      if (userLogos.firstName &&
          userLogos.lastName &&
          userLogos.definedBy) {
        return true;
      }
      return false;
    }

    function parseFeed(usersObject) {
      return usersObject.people;
    }
  });
