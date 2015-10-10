import {firebaseURL} from 'firebase.js'
import {userName} from 'user.js'

var ref = new Firebase(firebaseURL + 'chat');

loadHistory();

$('#chatInput').keydown(function(e) {
	var content = $(this).val();

	if (e.keyCode === 13 && content !== '') {
		ref.push({
			'user': userName,
			'content': content
		});
	}
});

function loadHistory() {
	ref.limitToLast(20).on('child_added', function(data) {
		var entry = data.val();
		appendEntry(entry);
	});
}

function appendEntry(entry) {
	var entryHtml = '<div class="chat-entry"><span class="chat-user">' + entry.user + '</span>: <span class="chat-content">' + entry.content + '</span></div>';
	$('#chatItems').append(entryHtml);
}
