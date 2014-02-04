// RequireJS configuration
require.config({
	paths: {
		html: '../html',
		lib: '../lib',
		jquery: '../lib/jquery/jquery-1.10.2',
		underscore: '../lib/underscore/underscore-1.5.2',
		backbone: '../lib/backbone/backbone-1.1.0',
		text: '../lib/require/text',
		bootstrap: '../lib/bootstrap/bootstrap-3.0.3/js/bootstrap',
		test: '../../test'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery']
		}
	}
});

// Define jQuery as AMD module
define.amd.jQuery = true;

// bootstrap the application
require([
	'router',
	'core'
], function (Router) {

	var router = new Router();
	Backbone.history.start();

});
