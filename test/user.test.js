var expect     = require("chai").expect;
var root       = __dirname + "/../";
var Ctrl       = require(root + "/ctrl/user.js");

describe("User controller, method get", function(){
	it("should respond with user obj", function (done){
		/**
		 *	NOTICE: The test now fails.
		 *	The result is the creating of a global variable i.e. "Contacts".
		 *
		 *	This is bad practice.
		**/
		Contacts = {
			find:function(cb){
				var item = {name:"Tim"};
				return cb(null, item)
			}
		};
		var res = {
			send:function(item){
				expect(item.name).to.equal("Bes");
				done();
			}
		};
		Ctrl.get({},res);
	});
});