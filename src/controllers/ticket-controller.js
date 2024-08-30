//Classe para resposta Http
const repository = require('../repositories/ticket-repository')

exports.get = async(req, res, next)=>{
    const data = await repository.get();
    return res.status(200).send(data);
}

exports.post = async(req, res)=>{
    await repository.create(req.body)
    res.status(201).send({mensagem: "Ticket criado com sucesso"})
}

exports.put = async(req, res)=> {
    const id = req.params.id

    await repository.update(id, req.body)
    res.status(204).send({mensagem: "Ticket atualizado com sucesso"})
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    const result = await repository.delete(id);  
    res.status(200).send({ mensagem: "Ticket deletado com sucesso" });
};