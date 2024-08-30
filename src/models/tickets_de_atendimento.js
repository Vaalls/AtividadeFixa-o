const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const scheme = new Schema({
    tituloTicket:{
        type: String, 
        required: true,
        trim: true 
    },
    
    telefone:{
        type: Number,
        required: true
    },

    idPessoa:{
        type: Number,
        required: true
    }

})
module.exports = mongoose.model('Ticket', scheme)