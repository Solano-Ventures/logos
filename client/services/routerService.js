angular.module('myApp')
  .service('RouterService', function ($http, $q) {
    //API


    //public methods
    function formPost (formObj) {
      var name = formObj.name;
      var email = formObj.email;
      var value = formObj.value;

      var request = $http({
        method: 'POST',
        url: 'http://localhost:8000/logo',
        data: {
          name: name,
          email: email,
          value: value
        }
      });

      return (request.then(handleSuccess, handleError));

    }

    function formPostTest(formObj) {
      return console.log(formObj);
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
      console.log(response);
      console.log('response received!');
      return response.data;
    }


    return({
      formPost: formPost,
      formPostTest: formPostTest
    });
  });
