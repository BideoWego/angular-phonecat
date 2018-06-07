describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('creates a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);
  }));

  it('has a name model with the page title', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', { $scope: scope });
    expect(scope.name).toBe('Phones Index');
  }));

});
