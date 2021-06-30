function iniciaLivros(){
  carregarLivros()
}

function carregarLivros() {
  buscarLivros((erro, livros) => {
      console.log(livros);
      renderTabela(livros);
  })
}

function carregarForm(livro){
  renderForm(livro);
}

function salvarLivro(livro){
  if(!livro.id) {
    inserirLivro(livro, (erro,produto)=> {
        carregarLivros();
        limparCampos();
    })    
  }
  else {
      atualizarLivro(livro.id, livro, (erro, livro) => {
          carregarLivros();
          limparCampos();
      })
  }
}

//Eventos
function onSalvar(livro){
  console.log("Livro: "+ livro);
  salvarLivro(livro)
}

function onCancelar(){
  carregarLivros();
}

function onDeletar(id){
  deletarLivro(id, (erro, livro) => {
      alert(`Livro ${livro.nome} removido com sucesso!`);
      carregarLivros();
  });
}

function onEdit(id){
  buscarLivro(id, (erro, livro) => {
      console.log("Carregando Livro "+livro.nome);
      carregarForm(livro);
  });
}

