System.register(['firebase.js', 'codemirror.js'], function (_export) {
	'use strict';

	var firebaseURL, codeMirror, firepad;

	_export('applyFirepad', applyFirepad);

	function applyFirepad(padName) {
		if (firepad !== null) {
			firepad.dispose();
			codeMirror.setValue('');
		}
		firepad = Firepad.fromCodeMirror(new Firebase(firebaseURL + 'codepad/' + padName), codeMirror);
	}

	return {
		setters: [function (_firebaseJs) {
			firebaseURL = _firebaseJs.firebaseURL;
		}, function (_codemirrorJs) {
			codeMirror = _codemirrorJs.codeMirror;
		}],
		execute: function () {
			firepad = null;
		}
	};
});