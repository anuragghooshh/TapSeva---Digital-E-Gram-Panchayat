const mongoose = require('mongoose');

const updateShema = new mongoose.Schema({
    update : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('Update', updateShema);