'use strict';

require.config({
    baseUrl: '/scripts',
    paths: {
		'angular': '/bower_components/angular/angular',
		'angular-route': '/bower_components/angular-route/angular-route',
		'bootstrapJs': '/scripts/lib/js/bootstrap.min',
		'jquery': '/bower_components/jquery/dist/jquery',
        // 'tether':"/scripts/lib/js/tether.min",
		"web":"/scripts/web/main"
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrapJs']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrapJs': {
			deps: ['jquery']
		},
		'web':{
			deps:['jquery']
		}

	}
});

require
(
    [
        'app','bootstrapJs','web'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);