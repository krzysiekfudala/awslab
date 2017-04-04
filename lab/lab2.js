//stub for lab 1_2
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var ec2 = new AWS.EC2();
var params = {};

var task =  function(request, callback){

		ec2.describeInstances(params, function(err, data) {
			  if (err) {
			  		console.log(err, err.stack);
			  		return callback(err);
			  } // an error occurred
			  else {
			  	console.log(data);  
			  	return callback(null,data);
			  }         // successful response	
		});
};
exports.lab = task