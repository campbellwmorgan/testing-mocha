Contacts = require("./inject.js");

var User = {};

User.get = function(req,res){
	'use strict';
	Contacts
	.find(function (err,item){
		if(err){
			res.send({err:"err"});
		};
		res.send(item);
	});
};

module.exports = User;