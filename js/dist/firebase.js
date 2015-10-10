System.register([], function (_export) {
  'use strict';

  var firebaseURL;
  return {
    setters: [],
    execute: function () {
      firebaseURL = 'https://teamcloud.firebaseio.com/room1/';

      _export('firebaseURL', firebaseURL);
    }
  };
});