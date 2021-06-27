const express = require('express');
const rotas = express.Router();
const usuarioController = require('../controllers/usuario-controller')

rotas.get('/', usuarioController.listar)
rotas.post('/', usuarioController.inserir)
rotas.get('/busca', usuarioController.buscarPorLogin)
rotas.get('/:id', usuarioController.buscarPorId)
rotas.put('/:id', usuarioController.atualizar)
rotas.delete('/:id', usuarioController.deletar)


module.exports = rotas
