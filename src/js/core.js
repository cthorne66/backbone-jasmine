define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap'
], function ($, _, Backbone) {
	/**
	 * Overriding the default templating syntax used by underscore to look more like
	 * handlebars or mustache
	 */
	_.templateSettings = {
		evaluate: /{{([\s\S]+?)}}/g,
		interpolate: /{{=([\s\S]+?)}}/g,
		escape: /{{-([\s\S]+?)}}/g
	};

});
