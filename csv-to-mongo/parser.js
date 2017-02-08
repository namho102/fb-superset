var csv = require('csv');
var fs = require('fs')
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/footballdb';
var collection;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
	collection = db.collection("results");
	// console.log(collection)
  	console.log("Connected successfully to server");

  	// Date,HomeTeam,AwayTeam,HG,AG,FTR

	var parser = csv.parse({delimiter: ','}, function(err, data){
	  // console.log(data);
	  // console.log(collection)
	  data.forEach((row) => {
	  	let obj = {
	  		Date: row[0],
	  		HomeTeam: row[1],
	  		AwayTeam: row[2],
	  		HG: row[3],
	  		AG: row[4],
	  		FTR: row[5]
	  	}
		collection.insertOne(obj, function(err, res) {
			// console.log("Inserted document into the collection");
		})  	
	  })
	});

	fs.createReadStream('E0.csv').pipe(parser);

	db.close()
});



