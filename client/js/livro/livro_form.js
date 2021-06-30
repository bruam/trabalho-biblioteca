function renderForm() {
  var str = `
  <h2>Formulario de Livros</h2>
  <form id="formulario">
      <input type="hidden" id="idLivro"/>
      <label for="txtnome">Nome:</label>
      <input type="text" id="txt-nome">
      <br />
      <label for="txtuso">Autor:</label>
      <input type="text" id="txt-autor">
      <br />
      <label for="txtuso">ISBN:</label>
      <input type="text" id="txt-isbn">
      <br />
      <label for="txtuso">Editora:</label>
      <input type="text" id="txt-editora">
      <br />
      <label for="txtuso">Ano:</label>
      <input type="text" id="txt-ano">
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
      onSalvar();            
  }

  form.onreset = function(event){
      event.preventDefault();
      onCancelar();
  }
  
}

function getDataProduto(){
  let produto = {};
  produto.nome = document.querySelector("#txt-nome").value;
  produto.autor = document.querySelector("#txt-autor").value;
  produto.isbn = document.querySelector("#txt-isbn").value;
  produto.editora = document.querySelector("#txt-editora").value;
  produto.ano = document.querySelector("#txt-ano").value;
  return produto;
}

function limparCampos(){
  document.querySelector("#txt-nome").value="";
  document.querySelector("#txt-autor").value="";
  document.querySelector("#txt-isbn").value="";
  document.querySelector("#txt-editora").value="";
  document.querySelector("#txt-ano").value="";
}

