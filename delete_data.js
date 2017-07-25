const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server', err);
	}
	console.log('connected to MongoDB server');
	
	//deleteMany
	//db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
	//	console.log(result);
	//});
	//deleteOne
	//db.collection('Todos').deleteOne({completed: false}).then((result) =>{
	//	console.log(result);
	//});
	//findOneAndDelete
	db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});
});