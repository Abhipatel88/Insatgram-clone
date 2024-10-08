const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    picture:String,
    caption:String,
    // like:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"user"
    // }]
    comments: {
        type: Array,
        default: []
      },
      date: {
        type: Date,
        default: Date.now
      },
})

module.exports = mongoose.model("post",postSchema);