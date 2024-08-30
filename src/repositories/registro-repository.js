//Classe para ir na base de dados
const mongoose = require('mongoose')
const tickets_de_atendimento = require('../models/tickets_de_atendimento')
const Registro = mongoose.model('Registro')

exports.get = async() => {
    const result = await Registro.find({})
    return result
}

exports.create = async(data) => {
    const registro = Registro(data)
    await registro.save()
}

exports.update = async(id, data)=> {
    await Registro.findByIdAndUpdate(id, {
        $set:{
            texto: data.texto,
            motivoAtendimento: data.motivoAtendimento,
            ticket: data.ticket,
            idAtendente: data.idAtendente
        }
    })
}

exports.delete = async (id) => {
     const result = await Registro.findByIdAndDelete(id);  
};