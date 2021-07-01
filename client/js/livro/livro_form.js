function renderForm(livro) {

  if(!livro) {
    livro = {};
  }

  var str = `
  <h2>Adição / Edição de livros</h2>
  <div class="form">
    <form id="formulario">
        <input type="hidden" id="idLivro"/>
        <section class="input-div">          
          <div class="item">
            <label for="txtnome">Nome:</label>
            <br />
            <input type="text" id="txt-nome" class="form-control" value="${livro.nome ? livro.nome : ''}">
          </div>          
          <div class="item">
            <label for="txtuso">Autor:</label>
            <br />
            <input type="text" id="txt-autor" class="form-control" value="${livro.autor ? livro.autor : ''}">
          </div>          
          <div class="item">
            <label for="txtuso">ISBN:</label>
            <br />
            <input type="text" id="txt-isbn" class="form-control" value="${livro.isbn ? livro.isbn : ''}">
          </div>          
          <div class="item">
            <label for="txtuso">Editora:</label>
            <br />
            <input type="text" id="txt-editora" class="form-control" value="${livro.editora ? livro.editora : ''}">
          </div>          
          <div class="item">
            <label for="txtuso">Ano:</label>
            <br />
            <input type="text" id="txt-ano" class="form-control" value="${livro.ano ? livro.ano : ''}">
          </div>
        </section>
        <br />
        <div class="btns-form">
          <input type="submit" id="btnsalvar" value="Salvar" class="btn-form">
          <input type="reset" value="Cancelar" class="btn-form">
        </div>
        <br />
    </form>
  </div>
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

