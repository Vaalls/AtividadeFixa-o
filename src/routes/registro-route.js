const express = require('express')
const route = express.Router()
const controller = require('../controllers/registro-controller') 

//Fazer roteamento de produtos
route.get('/', controller.get)
route.post('/', controller.post)
route.put('/:id', controller.put)
route.delete('/:id', controller.delete)

module.exports = route