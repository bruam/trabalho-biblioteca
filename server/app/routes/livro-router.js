const express = require('express');
const rotas = express.Router();
const livroController = require('../controllers/livro-controller')

rotas.get('/', livroController.listar)
rotas.post('/', livroController.inserir)
rotas.get('/:id', livroController.buscarPorId)
rotas.put('/:id', livroController.atualizar)
rotas.delete('/:id', livroController.deletar)


module.exports = rotas
