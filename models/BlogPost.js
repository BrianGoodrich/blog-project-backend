const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    
creationDate: {
    type: Date,
    required: true,
    default: Date.now,
},
postContent: {
    type: String,
    required: true,
},
postTitle: {
    type: String,
    required: true,
}

})

module.exports = mongoose.model('blogpost', PostSchema)