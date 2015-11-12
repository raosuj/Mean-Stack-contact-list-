var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyparser = require('body-parser');



app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());

app.get('/controller', function(req,res){
	console.log("recieved a get request");
	db.contactlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
	
});

app.post('/controller', function(req,res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, docs){
		res.json(docs);
	});

});

app.delete('/controller/:id', function(req,res){
	var id = req.params.id;
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, docs){
		res.json(docs);
	});

});
app.listen(3000);
console.log('server running');