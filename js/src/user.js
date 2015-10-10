import {firebaseURL} from 'firebase.js'

if (sessionStorage.getItem('user_name') === null) {
	UIkit.modal.prompt("輸入姓名：", userName, function(value) {
		userName = value;
		sessionStorage.setItem('user_name', userName);
		setupFirebaseUser();
	}
	, {labels: {Ok: "確認", Cancel: "離開"}});
}

function setupFirebaseUser() {
	var ref = new Firebase(firebaseURL + 'users');
	ref.child(sessionStorage.getItem('user_name')).set(true);
}

export var userName = sessionStorage.getItem('user_name');
