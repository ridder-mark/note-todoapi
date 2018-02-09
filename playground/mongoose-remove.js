const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove ({}).then((result) => {
// console.log(result);
// });


// Todo.findOneAndRemove

Todo.findByIdAndRemove('5a7d69caad2494522ce26470').then((todo)=>{
  console.log('todo deleted',todo);

})
