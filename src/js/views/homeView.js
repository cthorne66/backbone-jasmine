define([
	'text!html/tplHome.html',
	'core'
], function (template) {

	return Backbone.View.extend({

		el: '',

		initialize: function () {
		},

		render: function () {
			this.$el.html(template);
		}

	});

});
