var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp').then(
  ()=> {console.log('MongoDB connected');},
  err => {console.log(err);}
);


module.exports = {mongoose};
