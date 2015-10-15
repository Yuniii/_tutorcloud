System.register(['user.js', 'firepad.js', 'chat.js', 'editor_tabs.js', 'ui.js'], function (_export) {
  'use strict';

  var applyFirepad;
  return {
    setters: [function (_userJs) {}, function (_firepadJs) {
      applyFirepad = _firepadJs.applyFirepad;
    }, function (_chatJs) {}, function (_editor_tabsJs) {}, function (_uiJs) {}],
    execute: function () {

      applyFirepad('Default');
    }
  };
});