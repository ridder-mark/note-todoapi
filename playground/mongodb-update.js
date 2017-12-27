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

  //
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a29764f98330f17e1b5ccc1')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('People').findOneAndUpdate({
    _id: new ObjectID('5a2977ee282faa180e8a1448')
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(
    (result) => {
    console.log(result);
  },
err => {
  console.log('Cant update the item');
});


  // db.close();

});
