function renderForm(livro) {

  if(!livro) {
    livro = {};
  }

  var str = `
  <h2>Formulario de Livros</h2>
  <form id="formulario">
      <input type="hidden" id="idLivro"/>
      <label for="txtnome">Nome:</label>
      <input type="text" id="txt-nome" value="${livro.nome ? livro.nome : ''}">
      <br />
      <label for="txtuso">Autor:</label>
      <input type="text" id="txt-autor" value="${livro.autor ? livro.autor : ''}">
      <br />
      <label for="txtuso">ISBN:</label>
      <input type="text" id="txt-isbn" value="${livro.isbn ? livro.isbn : ''}">
      <br />
      <label for="txtuso">Editora:</label>
      <input type="text" id="txt-editora" value="${livro.editora ? livro.editora : ''}">
      <br />
      <label for="txtuso">Ano:</label>
      <input type="text" id="txt-ano" value="${livro.ano ? livro.ano : ''}">
      <br />
      <br />
      <input type="submit" id="btnsalvar" value="Salvar">
      <input type="reset" value="Cancelar">
      <br />
  </form>
  `;

  let containerForm = document.querySelector("main");
  containerForm.innerHTML = str;

  var form = document.querySelector("#formulario");

  form.onsubmit = function(event){
      event.preventDefault();
      onSalvar(getDataLivro(livro));            
  }

  form.onreset = function(event){
      event.preventDefault();
      onCancelar();
  }
  
}

function getDataLivro(livro){
  livro.nome = document.querySelector("#txt-nome").value;
  livro.autor = document.querySelector("#txt-autor").value;
  livro.isbn = document.querySelector("#txt-isbn").value;
  livro.editora = document.querySelector("#txt-editora").value;
  livro.ano = document.querySelector("#txt-ano").value;
  return livro;
}

function limparCampos(){
  document.querySelector("#txt-nome").value="";
  document.querySelector("#txt-autor").value="";
  document.querySelector("#txt-isbn").value="";
  document.querySelector("#txt-editora").value="";
  document.querySelector("#txt-ano").value="";
}

