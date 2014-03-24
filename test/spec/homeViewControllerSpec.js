'use strict';

module('app', function(app)
{
    console.log(app)
});

define([
    'angular',
    'angular-mocks',
    'app',
    'controllers/homeViewController'
], function (angular, mocks, app, homeViewController)
{

	describe("The 'homeViewController'", function()
	{
		var $rootScope;
		var $controller;
		var $scope;

		beforeEach(function()
		{
			module('app');

			inject
			([
				'$injector',
				'$rootScope',
				'$controller',

				function($injector, _$rootScope, _$controller)
				{
					$rootScope = _$rootScope;
					$scope = $rootScope.$new();
					$controller = _$controller;
				}
			]);

			$controller('homeViewController', {$scope: $scope});
		});

		it("should set the page heading to 'Welcome'", function()
		{
			expect($scope.page.heading).toBe('Welcome');
		});
	});
});