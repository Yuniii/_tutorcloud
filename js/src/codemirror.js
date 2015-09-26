export var codeMirror = CodeMirror(document.getElementById('editor'), {
    mode: "text/x-java",
    matchBrackets: true,
    lineNumbers: true,
    indentUnit: 4,
    viewportMargin: Infinity
});
