const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "biblioteca-senac"
});

module.exports = conexao