'use strict';

angular.module('shanmancomApp')
  .controller('NavCtrl', function ($scope, $location, $state) {
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
    $scope.gotoprojects = function(){
      $state.go('projects');
    };
    $scope.gotoexperience = function(){
      $state.go('experience');
    };
});

