## Tesing ctrl mocking database obj

The code to test in `./ctrl/user.js`
----

```js
var Contacts = require("./inject.js");
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
```

Test in `./test/user.test.js`
----

```js
var expect     = require("chai").expect;
var root       = __dirname + "/../";
var Ctrl       = require(root + "/ctrl/user.js");

describe("User controller, method get", function(){
	it("should respond with user obj", function (done){
		var res = {
			send:function(item){
				expect(item.name).to.equal("Bes");
				done();
			}
		};
		Ctrl.get({},res);
	});
});
```

**The test above passes.**