const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const usuarioRota = require('./app/routes/usuario-router')
app.use('/api/usuario',usuarioRota)

const livroRota = require('./app/routes/livro-router')
app.use('/api/livro',livroRota)

const clienteRota = require('./app/routes/cliente-router')
app.use('/api/cliente',clienteRota)

app.listen(PORT, () => {
    console.log(`Executando servidor em http://localhost:${PORT}`)
})