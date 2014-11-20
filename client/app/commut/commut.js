'use strict';

angular.module('shanmancomApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('commut', {
        url: '/commut',
        templateUrl: 'app/commut/commut.html',
        controller: 'CommutCtrl'
      });
  });