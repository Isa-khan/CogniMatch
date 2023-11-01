const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    title: { type: String, required: true },  //node js is upper case S for string and general datatypes
    content: { type: String, required: true}
});


module.exports = mongoose.model('Post', postSchema);


