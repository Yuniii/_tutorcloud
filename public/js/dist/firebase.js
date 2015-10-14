System.register(['functions.js'], function (_export) {
  'use strict';

  var getRoomName, firebaseURL;
  return {
    setters: [function (_functionsJs) {
      getRoomName = _functionsJs.getRoomName;
    }],
    execute: function () {
      firebaseURL = 'https://teamcloud.firebaseio.com/' + getRoomName() + '/';

      _export('firebaseURL', firebaseURL);
    }
  };
});