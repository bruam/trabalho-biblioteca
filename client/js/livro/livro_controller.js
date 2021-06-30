function iniciaLivros(){
  carregarLivros()
}

function carregarLivros() {
  buscarLivros((erro, livros) => {
      console.log(livros);
      renderTabela(livros);
  })
}

function carregarForm(){
  renderForm();
}

function salvarLivro(livro){
  inserirProduto(livro, (erro,livro)=> {
      carregarLivros();
      limparCampos();
  })    
}

//Eventos
function onSalvar(){
  salvarLivro (getDataProduto())
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


