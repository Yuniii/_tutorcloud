import {firebaseURL} from 'firebase.js'
import {userName} from 'user.js'
import {escapeHTML, nl2br, tab2spaces} from 'functions.js'

var ref = new Firebase(firebaseURL + 'chat');

setupChat();

$('#chatInput').keydown(function(e) {
	var $this = $(this),
		content = $(this).val();

	if (e.keyCode === 13 && content !== '') {
		ref.push({
			'user': userName,
			'content': content
		}, () => {
			$(this).val('');
		});
	}
});

function setupChat() {
	ref.limitToLast(20).on('child_added', function(data) {
		var entry = data.val();
		appendEntry(entry);
	});
}

function appendEntry(entry) {
	var user = escapeHTML(entry.user),
		content = tab2spaces(nl2br(escapeHTML(entry.content))),
		entryHtml = '<div class="chat-entry"><span class="chat-user">' + user + '</span>: <span class="chat-content">' + content + '</span></div>';
	
	$('#chatItems').append(entryHtml);
}
