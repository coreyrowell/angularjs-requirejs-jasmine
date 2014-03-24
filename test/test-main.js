var tests = [];
for (var file in window.__karma__.files)
{
	if (window.__karma__.files.hasOwnProperty(file))
	{
		if (/Spec\.js$/.test(file))
		{
			tests.push(file);
		}
	}
}

requirejs.config
({
	// Karma serves files from '/base'
    baseUrl: '/base/app/js',
    paths: {
        'app':              'app',
        'routes':           'routes',
		'angular':          '/base/bower_components/angular/angular',
		'angular-route':    '/base/bower_components/angular-route/angular-route',
		'angular-resource': '/base/bower_components/angular-resource/angular-resource',
		'angular-mocks':    '/base/bower_components/angular-mocks/angular-mocks',
        'route-resolver':   'modules/routeResolverModule',
		'bootstrap':        '../lib/bootstrap/js/bootstrap.min',
		'jquery':           '/base/bower_components/jquery/dist/jquery'
    },
	shim: {
		'app':              { deps: ['angular', 'angular-route', 'angular-resource', 'angular-mocks', 'route-resolver', 'bootstrap'] },
		'angular-route':    { deps: ['angular'] },
		'angular-resource': { deps: ['angular'] },
		'angular-mocks':    { deps: ['angular-resource'] },
		'route-resolver':   { deps: ['angular'] },
		'bootstrap':        { deps: ['jquery'] }
	},

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);