class Livro {
    constructor(nome, isbn, autor, editora, ano) {
        this.nome = nome;
        this.isbn = isbn;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
    }
}

const livro = new Livro()

module.exports = livro