var exec = require("cordova/exec");

exports.init = function (success, error) {
	exec(success, error, "SweetAlert", "init");
};

exports.showAlert = function (title) {
	exec(null, null, "SweetAlert", "showAlert", title);
};
