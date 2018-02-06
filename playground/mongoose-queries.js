const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '5a3944a9cc2300aa706e841e';



User.findById(id).then((user) => {
  if(!user) {
    return console.log('User ID not found');
  }
    console.log( JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });



// if (ObjectID.isValid(id)) {
//   console.log("Valid ID");
// } else { console.log("Invalid ID"); }


// Todo.findById(id).then((todo) => {
// if (!todo) {
//   return console.log('ID not found!')
// }
//   console.log('Todo by ID',todo);
// }).catch((e) => console.log(e));


// 1. add user
// 2. find by id
