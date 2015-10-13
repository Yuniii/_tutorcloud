System.register([], function (_export) {
	'use strict';

	_export('escapeHTML', escapeHTML);

	_export('nl2br', nl2br);

	_export('tab2spaces', tab2spaces);

	function escapeHTML(str) {
		return $('<div/>').text(str).html();
	}

	function nl2br(str) {
		return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
	}

	function tab2spaces(str) {
		return str.replace(/\t/g, '&nbsp;&nbsp;').replace(/ /g, '&nbsp;');
	}

	return {
		setters: [],
		execute: function () {}
	};
});