'use strict';

require.config({
	baseUrl: '/scripts',
	paths: {
		'angular': '/bower_components/angular/angular',
		'angular-route': '/bower_components/angular-route/angular-route',
		'tether': "/scripts/lib/js/tether.min",
		'bootstrapJs': '/scripts/lib/js/bootstrap.min',
		'jquery': '/bower_components/jquery/dist/jquery'
	},
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrapJs']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrapJs': {
			deps: ['jquery', 'tether']
		},
		
	}
});

require(['tether'],function(tether){
	window.Tether = tether;
});

require
	(
		[
			'app'
		],
		function (app) {
			angular.bootstrap(document, ['app']);
		}
	);
