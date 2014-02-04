define([
	'models/link',
	'core'
], function (Link) {

	return Backbone.Collection.extend({

		initialize: function () {
			this.generateLinks();
		},

		model: Link,

		/**
		 * Generate some sample/dummy data
		 */
		generateLinks: function () {
			var link1, link2;

			link1 = new Link({
				url: 'http://www.google.com',
				display: 'Google',
				target: '_blank'
			});

			link2 = new Link({
				url: 'http://www.github.com',
				display: 'github',
				target: '_blank'
			});

			this.add(link1);
			this.add(link2);
		}

	});

});
