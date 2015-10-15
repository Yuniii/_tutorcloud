import {firebaseURL} from 'firebase.js'
import {codeMirror} from 'codemirror.js'

var firepad = null;

export function getAllCodepad(callback) {
	var ref = new Firebase(firebaseURL + 'codepad_list');
	ref.once("value", function(snap) {
		var data = snap.val();
		callback(data);
	});
}

export function addCodepadToList(padName) {
	var ref = new Firebase(firebaseURL + 'codepad_list');
	ref.child(padName).set(1);
}

export function applyFirepad(padName) {
	if (firepad !== null) {
		firepad.dispose();
		codeMirror.setValue('');
	}
	firepad = Firepad.fromCodeMirror(new Firebase(firebaseURL + 'codepad/' + padName), codeMirror);
}
