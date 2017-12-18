// const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err) {
  return console.log('Can not connect to the DB');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').find({
//   _id: new ObjectID('5a2665780871ed145746de83')
// }).toArray().then((docs) => {
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('unable to fetch Todos', err);
// });

// db.collection('Todos').find().count().then((count) => {
// console.log(`Todos Count: ${count}`);
// }, (err) => {
//   console.log('unable to fetch Todos', err);
// });

db.collection('People').find({name: "Rohan"}).toArray().then((docs) => {
console.log(JSON.stringify(docs,undefined, 2));
}, (err) => {
  console.log('unable to fetch People', err);
});

// db.close();

});
