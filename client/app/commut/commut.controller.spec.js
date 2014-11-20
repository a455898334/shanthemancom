'use strict';

describe('Controller: CommutCtrl', function () {

  // load the controller's module
  beforeEach(module('shanmancomApp'));

  var CommutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperienceCtrl = $controller('CommutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
