const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to  MongoDB server');
	}
	console.log('connected to MondgoDB server');
	db.collection('Users').find().count().then((count) => {
		console.log(`the Users: ${count}`);
	}		
	, (err)=> {
		console.log('Unable to fetch Users', err);
	}
	);
	
});
