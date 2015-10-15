import {firebaseURL} from 'firebase.js'
import {codeMirror} from 'codemirror.js'

var firepad = null;

export function applyFirepad(padName) {
	if (firepad !== null) {
		firepad.dispose();
		codeMirror.setValue('');
	}
	firepad = Firepad.fromCodeMirror(new Firebase(firebaseURL + 'codepad/' + padName), codeMirror);
}
