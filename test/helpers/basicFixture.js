require(['jquery'], function () {
	if ($('#testing-section').length === 0) {
		$('body').append('<div id="testing-section"></div>');
	}
});
