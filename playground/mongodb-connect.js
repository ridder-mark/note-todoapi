// const {MongoClient, ObjectID} = require('mongodb');
const {
  MongoClient,
  ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Can not connect to the DB');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').insertOne({
  //   text: 'something shitty to do',
  //   completed: false
  // }, (err, result) => {
  // if(err) {
  //   return console.log('Unable to insert todo', err);
  // }
  // console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  // insert new doc into Users (name, age, location)

  db.collection('People').insertOne({
    name: 'Rohan',
    age: 29,
    location: 'Hyderabad'
  }, (err, result) => {
    if (err) {
      return console.console.log("Can't Do Shit");
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

  })

  db.close();

});