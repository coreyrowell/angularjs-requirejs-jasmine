require.config({
    baseUrl: '/js',
    paths: {
        'app':              'app',
        'routes':           'routes',
		'angular':          '/bower_components/angular/angular',
		'angular-route':    '/bower_components/angular-route/angular-route',
		'angular-resource': '/bower_components/angular-resource/angular-resource',
        'route-resolver':   'modules/routeResolverModule',
		'bootstrap':        '../lib/bootstrap/js/bootstrap.min',
		'jquery':           '/bower_components/jquery/dist/jquery'
    },
	shim: {
		'app':              { deps: ['angular', 'angular-route', 'angular-resource', 'route-resolver', 'bootstrap'] },
		'angular-route':    { deps: ['angular'] },
		'angular-resource': { deps: ['angular'] },
		'route-resolver':   { deps: ['angular'] },
		'bootstrap':        { deps: ['jquery'] }
	}
});

require
(
    [
        'app',
        'routes'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);