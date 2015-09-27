System.register(['firebase.js', 'functions.js'], function (_export) {
	'use strict';

	var firebaseURL, randomString, userName, userId;

	function setupUser() {
		var ref = new Firebase(firebaseURL + 'room1/users');
		ref.child(userId).set({
			'user_name': localStorage.getItem('user_name')
		});
	}

	return {
		setters: [function (_firebaseJs) {
			firebaseURL = _firebaseJs.firebaseURL;
		}, function (_functionsJs) {
			randomString = _functionsJs.randomString;
		}],
		execute: function () {
			userName = localStorage.getItem('user_name');
			userId = localStorage.getItem('user_id');
			if (userId === null) {
				UIkit.modal.prompt("輸入姓名：", userName, function (value) {
					userName = value;
					userId = randomString(8);

					localStorage.setItem('user_name', userName);
					localStorage.setItem('user_id', userId);

					setupUser();
				}, { labels: { Ok: "確認", Cancel: "離開" } });
			}
		}
	};
});