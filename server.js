const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log("unable to connect the db ", err);
	}
	console.log('connected to mongodb, plz check by robomongo');
	/*db.collection('Todos').insertOne({
		text: 'something to do',
		completed: false
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert Todos ', err);
		}
		return console.log(JSON.stringify(result.ops,undefined, 2));
	});*/
	db.collection('Users').insertOne({
		name: 'xuan',
		age: 28,
		email: 'dtex89@gmail.com'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert Todos ', err);
		}
		return console.log(JSON.stringify(result.ops,undefined, 2));
	});
	db.close();
});