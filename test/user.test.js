var expect     = require("chai").expect;
var root       = __dirname + "/../";
var Ctrl       = require(root + "/ctrl/user.js");

describe("User controller, method get", function(){
	it("should respond with user obj", function (done){
		/**
		 *	NOTICE: The test has passed. However I required only 'Ctrl',
		 *	I didn't required 'Contacts'.
		 * 
		 *	This is a problem since I want to mock it in order to return
		 *	an error and testing the if statements in line 7 in the 'user.js'
		**/
		var res = {
			send:function(item){
				expect(item.name).to.equal("Bes");
				done();
			}
		};
		Ctrl.get({},res);
	});
});