define([
	'core'
], function () {

	return Backbone.Model.extend({

		// Explicitly listing what attributes to expect in this model
		defaults: {
			url: '',
			display: '',
			target: ''
		},

		initialize: function () {}

	});

});
