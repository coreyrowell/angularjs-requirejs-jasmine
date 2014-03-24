'use strict';

define(
    [
        'angular-route',
        'angular-resource',
        'route-resolver'

    ], function () {

    var app = angular.module('app', ['ngRoute', 'ngResource', 'routeResolverModule']);

    return app;

});
