const conexao = require('../config/conexaoBD')
const livroModel = require('../models/livro')

exports.listar = (callback) => {
    const sql = "SELECT * FROM livro";
    conexao.query(sql, (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

exports.inserir = (livro, callback) => {
    const sql = "INSERT INTO livro(nome,autor,isbn,editora,ano) VALUES (?,?,?,?,?)"
    conexao.query(sql, [livro.nome,livro.autor,livro.isbn,livro.editora,livro.ano],
        (erro, rows) => {
        if(erro){
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

exports.buscarPorId = (id, callback) => {
    const sql = "SELECT * FROM livro WHERE id=?";
    conexao.query(sql, [id], (erro, rows) => {
        if(erro){
            const error = {
                status: 500,
                msg: erro
            }
            callback(error, null);
        }
        else {
            if(rows && rows.length > 0) {
                callback(null,rows[0])
            }
            else {
                const error = {
                    status: 404,
                    msg: "Livro não encontrado"
                }
                callback(error, null)
            }
        }
    })
}

exports.deletar = (id, callback) => {
    const sql = `DELETE FROM livro WHERE id=?`;
    conexao.query(sql, [id], (erro, rows) => {
        if(erro){
            const error = {
                status: 500,
                msg: erro
            }
            callback(erro,null);
        }
        else {
            if(rows.affectedRows){
                callback(null,id)
            }            
            else {
                const error = {
                    status: 500,
                    msg: erro
                }
                callback(erro,null)
            }
        }
    })
}

