const express = require('express')
const app = express()
//express.json: Configurar para preencher json nos request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydatabase')

//Registrar a model
require('./models/produto')
require('./models/tickets_de_atendimento')
require('./models/registro_de_atendimento')


//Falta incluir a rota
const index = require('.//routes/index')
app.use('/', index)

//Criar rota p/ produto
const produtoRouter = require('./routes/produto-route')
app.use('/produtos', produtoRouter)

const ticketRouter = require('./routes/ticket-route')
app.use('/ticket', ticketRouter)

const registerRouter = require('./routes/registro-route')
app.use('/registro', registerRouter)

module.exports = app;