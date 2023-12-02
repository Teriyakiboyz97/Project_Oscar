//lib//
const mongoose = require('mongoose');

//ตัวmodelsของapi//
const MovieSchema = new mongoose.Schema({
    mov_name : String,
    mov_studio : String,
    mov_director : String,
    mov_writers : String,
    mov_stars : String,
    mov_year : String,
    mov_Oscar_no : String,
    update_at : {type: Date , default: Date.now}


})

//export models//
module.exports = mongoose.model('Movie', MovieSchema);