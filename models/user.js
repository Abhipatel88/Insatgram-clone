const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://210120107008:phhPwCKCibXvawSd@renting.1rkcy.mongodb.net/instagram?retryWrites=true&w=majority&tls=true")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }],
  bio: String,

    profilepic: {
        type: String,
        default: "default.jpeg",
      },
      posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post" 
      }],
      followers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user" 
        } 
      ],
      following: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user" 
        }
      ]

})

module.exports= mongoose.model("user",userSchema);
