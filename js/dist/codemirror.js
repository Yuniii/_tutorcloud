System.register([], function (_export) {
    "use strict";

    var codeMirror;
    return {
        setters: [],
        execute: function () {
            codeMirror = CodeMirror(document.getElementById('editor'), {
                mode: "text/x-java",
                matchBrackets: true,
                lineNumbers: true,
                indentUnit: 4,
                viewportMargin: Infinity
            });

            _export("codeMirror", codeMirror);
        }
    };
});