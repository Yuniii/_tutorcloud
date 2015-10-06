System.register(['firebase.js', 'functions.js'], function (_export) {
	'use strict';

	var firebaseURL, randomString, userName;

	function setupUser() {
		var ref = new Firebase(firebaseURL + 'room1/users');
		ref.child(sessionStorage.getItem('user_name')).set(true);
	}
	return {
		setters: [function (_firebaseJs) {
			firebaseURL = _firebaseJs.firebaseURL;
		}, function (_functionsJs) {
			randomString = _functionsJs.randomString;
		}],
		execute: function () {
			userName = sessionStorage.getItem('user_name');

			if (userName === null) {
				UIkit.modal.prompt("輸入姓名：", userName, function (value) {
					userName = value;
					sessionStorage.setItem('user_name', userName);
					setupUser();
				}, { labels: { Ok: "確認", Cancel: "離開" } });
			}
		}
	};
});