import {firebaseURL} from 'firebase.js'
import {randomString} from 'functions.js'

var userName = sessionStorage.getItem('user_name');

if (userName === null) {
	UIkit.modal.prompt("輸入姓名：", userName, function(value) {
		userName = value;
		sessionStorage.setItem('user_name', userName);
		setupUser();
	}
	, {labels: {Ok: "確認", Cancel: "離開"}});
}

function setupUser() {
	var ref = new Firebase(firebaseURL + 'room1/users');
	ref.child(sessionStorage.getItem('user_name')).set(true);
}
