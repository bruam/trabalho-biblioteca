const conexao = require('../config/conexaoBD')

exports.listar = (callback) => {
    const sql = "SELECT * FROM cliente";

    conexao.query(sql, (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

exports.inserir = (cliente, callback) => {   
    //SQL
    const sql = "INSERT INTO cliente(matricula,nome,telefone) VALUES (?,?,?)"

    conexao.query(sql, [cliente.matricula, cliente.nome, cliente.telefone],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                cliente.id = rows.insertId;
                callback(null, cliente)
            }
    })    
}

exports.buscarPorId = (id, callback) => {

    const sql = "SELECT * FROM cliente WHERE id=?";

    conexao.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows[0])
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "cliente nao encontrado"
                }
                callback(error, null);
            }
        }
    })
}

exports.deletar = (id, callback) => {
    const sql = `DELETE FROM cliente WHERE id=?`;
    conexao.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(err, null);
        }
        else {
            if(rows.affectedRows){
                callback(null, id);
            }
            else {
                const error = {
                    status: 500,
                    msg: err
                }
                callback(err, null);    
            }
        }
    })            
}