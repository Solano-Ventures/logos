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
        templateUrl: 'feed/feed.html',
        controller: 'FeedController',
      })
      .state('feed.logos', {
        templateUrl: 'feed/feed.logos.html',
        controller: 'LogosController',
      })
      .state('showLogo', {
        templateUrl : 'feed/showlogo.html',
        controller: 'ShowLogoController'
      })
      .state('account', {
        templateUrl : 'feed/account.html',
      });
    }
    ]
);
