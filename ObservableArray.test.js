(function(ObservableArray) {
	'use strict';

	function assert(expected, actual, message) {
		if (expected !== actual) {
			throw message + ': expected ' + expected + ', got ' + actual;
		}
	}

	var oa = new ObservableArray();
	oa.listen(function() { console.log(arguments); })

	oa.extend(['foo', 'bar', 'baz']);
	assert(oa[0], 'foo', 'Extend failed');
	assert(oa[1], 'bar', 'Extend failed');
	assert(oa[2], 'baz', 'Extend failed');

	oa.push('trollol');
	assert(oa[3], 'trollol', 'Push failed');

	oa.push('hi', 'bye');
	assert(oa[4], 'hi', 'Push multiple failed');
	assert(oa[5], 'bye', 'Push multiple failed');

	oa.remove('trollol');
	assert(oa.indexOf('trollol') === -1, true, 'Remove failed');

	oa.remove('foo', 'bar');
	assert(oa.indexOf('foo') === -1, true, 'Remove failed');
	assert(oa.indexOf('bar') === -1, true, 'Remove failed');

	console.log('Tests passed.');

})(window.ObservableArray)