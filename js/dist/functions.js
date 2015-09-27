System.register([], function (_export) {
    "use strict";

    _export("randomString", randomString);

    function randomString(n) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < n; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    return {
        setters: [],
        execute: function () {}
    };
});