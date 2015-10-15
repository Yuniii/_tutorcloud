System.register(['firebase.js', 'codemirror.js'], function (_export) {
	'use strict';

	var firebaseURL, codeMirror, firepad;

	_export('getAllCodepad', getAllCodepad);

	_export('addCodepadToList', addCodepadToList);

	_export('applyFirepad', applyFirepad);

	function getAllCodepad(callback) {
		var ref = new Firebase(firebaseURL + 'codepad_list');
		ref.once("value", function (snap) {
			var data = snap.val();
			callback(data);
		});
	}

	function addCodepadToList(padName) {
		var ref = new Firebase(firebaseURL + 'codepad_list');
		ref.child(padName).set(1);
	}

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