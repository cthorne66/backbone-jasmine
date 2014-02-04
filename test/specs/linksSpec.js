define([
	'views/linksView',
	'test/helpers/basicFixture',
	'core'
], function (linkView) {

	describe("an example spec ", function () {
		var view;

		beforeEach(function () {
			view = new linkView({
				el: '#testing-section'
			});
		});

		it('should start with 2 links in the collection', function () {
			expect(view.collection.length).toEqual(2);
		});

		it('should start by rendering 2 links in the view', function () {
			view.render();
			expect(view.$('.example-links').length).toEqual(2);
		});



	});

});
