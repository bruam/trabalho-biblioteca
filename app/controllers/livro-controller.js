const conexao = require('../config/conexaoBD')
const livroRepository = require('../repository/livro-repository')

exports.listar = (req, res) => {
    livroRepository.listar((erro,livros) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(livros)
        }
    })
}

exports.inserir = (req, res) => {
    const livro = req.body
    livroRepository.inserir(livro, (erro,livroSalvo) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.status(201).json(livroSalvo)
        }
    })
}

exports.buscarPorId = (req, res) => {
    const id = +req.params.id;
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um número"
        }
        res.status(error.status).json(error)
    }
    else {
        livroRepository.buscarPorId(id, (erro,livro) => {
            if(erro) {
                res.status(erro.status).json(erro)
            }
            else {
                res.json(livro)
            }
        })
    }
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const livro = req.body;

    const sql = `UPDATE livro SET nome=?,autor=?,isbn=?,editora=?,ano=? WHERE id=?`;
    conexao.query(sql, [livro.nome,livro.autor,livro.isbn,livro.editora,livro.ano, id], 
        (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            livro.id = +id;
            res.json(livro);
        }
    })
}

exports.deletar = (req, res) => {
    const id = +req.params.id //convertido para number
    if(isNaN(id)) {
        const error = {
            status: 400,
            msg: "Id deve ser um número"
        }
        res.status(error.status).json(error)
    }
    else {
        livroRepository.buscarPorId(id, (erro, livro) => {
            if(erro) {
                res.status(erro.status).json(erro)
            }
            else {
                livroRepository.deletar(id, (erro, id) => {
                    if(erro) {
                        res.status(erro.status).json(erro)
                    }
                    else {
                        res.json(livro)
                    }
                })
            }
        })
    }
}