'use strict';

define(['app'], function (app) {

    return app.config(['$routeProvider', '$locationProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function ($routeProvider, $locationProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        app.controller  = $controllerProvider.register;
        app.directive   = $compileProvider.directive;
        app.filter      = $filterProvider.register;
        app.factory     = $provide.factory;
        app.service     = $provide.service;
        app.constant    = $provide.constant;

        var route = routeResolverProvider.route,
            hasController = true;

        $routeProvider
            .when('/',          route.resolve('home',   '',   hasController))
            .when('/about',     route.resolve('about',  '',  hasController))
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
});
