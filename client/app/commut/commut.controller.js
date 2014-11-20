'use strict';

angular.module('shanmancomApp', ['uiGmapgoogle-maps'])
  .controller('CommutCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
