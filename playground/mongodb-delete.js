// const {MongoClient, ObjectID} = require('mongodb');
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Can not connect to the DB');
  }
  console.log('Connected to MongoDB server');


  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
  //   console.log(result);
  // })


  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=> {
  //   console.log(result);
  // });


  //findOneAndDelete
db.collection('Todos').remove({completed:false}).then((result) => {
  console.log(result);
})


  // db.close();

});
