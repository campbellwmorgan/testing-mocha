var app      = require('express')();
var UserCtrl = require("./ctrl/user.js");

app.get("/", UserCtrl.get);

app.listen(5000);