System.register(['firebase.js'], function (_export) {
  'use strict';

  var firebaseURL;
  return {
    setters: [function (_firebaseJs) {
      firebaseURL = _firebaseJs.firebaseURL;
    }],
    execute: function () {}
  };
});