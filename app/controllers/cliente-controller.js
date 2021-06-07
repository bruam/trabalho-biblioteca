const conexao = require('../config/conexaoBD')
const clienteRepository = require('../repository/cliente-repository')

exports.listar = (req, res) => {
    clienteRepository.listar((erro,clientes) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(clientes)
        }
    })
}

exports.inserir = (req, res) => {    
    const cliente = req.body;    
    clienteRepository.inserir(cliente, (erro, clienteSlavo) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.status(201).json(clienteSlavo)
        }
    })
}

exports.buscarPorId = (req, res) => {    
    const id = +req.params.id;
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        clienteRepository.buscarPorId(id, (erro, cliente) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                res.json(cliente)
            }
        })
    }
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const cliente = req.body;

    const sql = `UPDATE cliente SET matricula=?, nome=?, telefone=? WHERE id=?`;
    conexao.query(sql, [cliente.matricula, cliente.nome, cliente.telefone, id],
        (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            cliente.id = +id;
            res.json(cliente);
        }
    })
}

exports.deletar = (req, res) => {
    const id = +req.params.id;
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        clienteRepository.buscarPorId(id, (erro, cliente) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                clienteRepository.deletar (id, (erro, id) => {
                    if(erro){
                        res.status(erro.status).json(erro)
                    }
                    else {
                        res.json(cliente)
                    }        
                })
            }
        })
    }
}