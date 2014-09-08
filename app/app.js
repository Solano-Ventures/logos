angular.module('LogosMain',
  ['ui.router',
  'ngAnimate',
  'LogosMain.controllers',
  'LogosMain.directives',
  'LogosMain.services'])
  .run(
    ['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParms = $stateParams;
      $state.transitionTo('home');
    }
    ]
  )
  .config(
    ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      //configure $urlRoutes Here
      $urlRouterProvider
      .otherwise('/');

      //configure $stateRouters Here

      //States Container

      $stateProvider
      .state('home', {
        url: '/',
        views: {
          'feed' :  {url: '', templateUrl: 'feed/feed.html', controller: 'FeedController'},
          'create' : {url: '', templateUrl: 'feed/create.html', controller: 'CreateController'}
        }
      })
      .state('feed.logos', {
        templateUrl: 'feed/feed.logos.html',
        controller: 'LogosController',
      });

    }
    ]
);
