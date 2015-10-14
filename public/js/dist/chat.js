System.register(['firebase.js', 'user.js', 'functions.js'], function (_export) {
	'use strict';

	var firebaseURL, userName, escapeHTML, nl2br, tab2spaces, ref;

	function setupChat() {
		ref.limitToLast(20).on('child_added', function (data) {
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
	return {
		setters: [function (_firebaseJs) {
			firebaseURL = _firebaseJs.firebaseURL;
		}, function (_userJs) {
			userName = _userJs.userName;
		}, function (_functionsJs) {
			escapeHTML = _functionsJs.escapeHTML;
			nl2br = _functionsJs.nl2br;
			tab2spaces = _functionsJs.tab2spaces;
		}],
		execute: function () {
			ref = new Firebase(firebaseURL + 'chat');

			setupChat();

			$('#chatInput').keydown(function (e) {
				var _this = this;

				var $this = $(this),
				    content = $(this).val();

				if (e.keyCode === 13 && content !== '') {
					ref.push({
						'user': userName,
						'content': content
					}, function () {
						$(_this).val('');
					});
				}
			});
		}
	};
});