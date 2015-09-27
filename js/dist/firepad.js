System.register(['firebase.js', 'codemirror.js'], function (_export) {
  'use strict';

  var firebaseURL, codeMirror;
  return {
    setters: [function (_firebaseJs) {
      firebaseURL = _firebaseJs.firebaseURL;
    }, function (_codemirrorJs) {
      codeMirror = _codemirrorJs.codeMirror;
    }],
    execute: function () {

      Firepad.fromCodeMirror(new Firebase(firebaseURL + 'room1/codepad'), codeMirror);
    }
  };
});