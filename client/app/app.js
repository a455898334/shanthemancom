'use strict';

angular.module('shanmancomApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function(){
      $('html, body').animate({ scrollTop: 0 },500, function(){
        $('.homebutton').animate({ opacity: 1 },500);
      });
    });

  }); 