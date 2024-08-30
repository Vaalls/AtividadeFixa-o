//Classe para ir na base de dados
const mongoose = require('mongoose')
const Ticket = mongoose.model('Ticket')

exports.get = async() => {
    const result = await Ticket.find({})
    return result
}
 
exports.create = async(data) => {
    const ticket = Ticket(data)
    await ticket.save()
}

exports.update = async(id, data)=> {
    await Ticket.findByIdAndUpdate(id, {
        $set:{
            titulo: data.titulo,
            telefone: data.preco,
            idpessoa: data.idpessoa
        }
    })
}

exports.delete = async (id) => {  
    console.log(id)
    await Ticket.findByIdAndDelete(id);
};

