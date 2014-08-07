'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('shanmancomApp'));

  var ExperienceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperienceCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
