export function escapeHTML(str) {
	return $('<div/>').text(str).html();
}

export function nl2br(str) {   
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
}

export function tab2spaces(str) {
	return str.replace(/\t/g, '&nbsp;&nbsp;').replace(/ /g, '&nbsp;');
}
