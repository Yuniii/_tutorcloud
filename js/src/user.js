import {firebaseURL} from 'firebase.js'
import {randomString} from 'functions.js'

var userName = localStorage.getItem('user_name'), 
	userId = localStorage.getItem('user_id');

function setupUser() {
	var ref = new Firebase(firebaseURL + 'room1/users');
	ref.child(userId).set({
		'user_name': localStorage.getItem('user_name'),
	});
}

if (userId === null) {
	UIkit.modal.prompt("輸入姓名：", userName, function(value) {
		userName = value;
		userId = randomString(8);

		localStorage.setItem('user_name', userName);
		localStorage.setItem('user_id', userId);

		setupUser();
	}
	, {labels: {Ok: "確認", Cancel: "離開"}});
}
