const mongoose = require('mongoose');
const validator = require('validator');


// user = new User({email:1});
// console.log(user.validate);

var User = mongoose.model('User', {
      email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
          validator: validator.isEmail
        }
      },
      password: {
        type: String,
        require: true,
        minlength: 6
      },
      tokens: [{
          access: {
            type: String,
            required:true
          },
          token: {
            type: String,
            required: true
          }
        }]
      });

    module.exports = {
      User
    };
