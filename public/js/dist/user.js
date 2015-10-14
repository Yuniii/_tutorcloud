System.register(['firebase.js'], function (_export) {
	'use strict';

	var firebaseURL, userName;

	function setupFirebaseUser() {
		var ref = new Firebase(firebaseURL + 'users');
		ref.child(sessionStorage.getItem('user_name')).set(true);
	}

	return {
		setters: [function (_firebaseJs) {
			firebaseURL = _firebaseJs.firebaseURL;
		}],
		execute: function () {

			if (sessionStorage.getItem('user_name') === null) {
				UIkit.modal.prompt("輸入姓名：", userName, function (value) {
					_export('userName', userName = value);
					sessionStorage.setItem('user_name', userName);
					//setupFirebaseUser();
				}, { labels: { Ok: "確認", Cancel: "離開" } });
			}userName = sessionStorage.getItem('user_name');

			_export('userName', userName);
		}
	};
});