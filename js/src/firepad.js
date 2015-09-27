import {firebaseURL} from 'firebase.js'
import {codeMirror} from 'codemirror.js'

Firepad.fromCodeMirror(new Firebase(firebaseURL + 'room1/codepad'), codeMirror);
