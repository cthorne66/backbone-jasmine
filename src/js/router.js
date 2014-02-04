define([
	'core'
], function () {

	var view,
	mainContainer = '#main-container';

	return Backbone.Router.extend({
		initialize: function () {},

		routes: {
			'': 'indexView',
			'links': 'linksView'
		},


		indexView: function () {
			require(['views/homeView'], function (HomeView) {
				view = new HomeView({
					el: mainContainer
				});
				view.render();
			});
		},

		linksView: function () {
			require(['views/linksView'], function (LinksView) {
				view = new LinksView({
					el: mainContainer
				});
				view.render();
			});
		}

	});
});
