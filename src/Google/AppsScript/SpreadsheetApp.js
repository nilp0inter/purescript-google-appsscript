// module Google.AppsScript.SpreadsheetApp

"use strict";

exports.app = function () {
    return function () {
        return SpreadsheetApp;
    }
}

exports.getUi = function (app) {
    return function () {
        return app().getUi();
    }
}
