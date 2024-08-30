const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheme = new Schema({
    texto:{
        type: String, 
        required: true,
        trim: true 
    },
    
    motivoAtendimento:{
        type: String,
        required: true
    },

    ticket:{
        type: Number,
        required: true
    },

    idAtendente:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Registro', scheme)