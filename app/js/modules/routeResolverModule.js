'use strict';

define([], function () {

    var routeResolverModule = angular.module('routeResolverModule', []);

    routeResolverModule.provider('routeResolver', function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var viewsDirectory = '/views/',
                controllersDirectory = '/js/controllers/',

            setBaseDirectories = function (viewsDir, controllersDir) {
                viewsDirectory = viewsDir;
                controllersDirectory = controllersDir;
            },

            getViewsDirectory = function () {
                return viewsDirectory;
            },

            getControllersDirectory = function () {
                return controllersDirectory;
            };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function (routeConfig) {

            var resolve = function (baseName, path, hasController) {
                if (!path) path = '';

                var routeDef = {};
                routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
                if(hasController) {
                    routeDef.controller = baseName + 'ViewController';
                    routeDef.resolve = {
                        load: ['$q', '$rootScope', function ($q, $rootScope) {
                            var dependencies = [routeConfig.getControllersDirectory() + path + baseName + 'ViewController.js'];
                            return resolveDependencies($q, $rootScope, dependencies);
                        }]
                    };
                }
                return routeDef;
            },

            resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply()
                });

                return defer.promise;
            };

            return {
                resolve: resolve
            }
        }(this.routeConfig);

    });

    return routeResolverModule;

});