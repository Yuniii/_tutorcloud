System.register(['codemirror.js'], function (_export) {
  'use strict';

  var codeMirror;
  return {
    setters: [function (_codemirrorJs) {
      codeMirror = _codemirrorJs.codeMirror;
    }],
    execute: function () {

      Firepad.fromCodeMirror(new Firebase('https://teamcloud.firebaseio.com/room1/codepad'), codeMirror);
    }
  };
});