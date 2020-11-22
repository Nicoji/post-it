const mongoose = require('mongoose');

const postitSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    content: {
        type: Array,
        required: true
    }, 
    color: {
        type: String
    }
})

module.exports = mongoose.model('Postit', postitSchema);