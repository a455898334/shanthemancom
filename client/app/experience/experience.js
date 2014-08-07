'use strict';

angular.module('shanmancomApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('experience', {
        url: '/experience',
        templateUrl: 'app/experience/experience.html',
        controller: 'ExperienceCtrl'
      });
  });