function renderTabela(livros){
  var str=`
  <h1>Biblioteca Senac - Acervo</h1>
  <a id='novo' href="#" style='margin-bottom: 5px;'>Novo</a>
  <div id="tabela">

  <table id="livros-table">
      <tr>
          <th style='text-align: left;'>Id</th>
          <th style='text-align: left;'>Nome</th>
          <th style='text-align: left;'>Autor</th>
          <th style='text-align: left;'>ISBN</th>
          <th style='text-align: left;'>Editora</th>
          <th style='text-align: left;'>Ano</th>
          <th colspan="2">Ação</th>
      </tr>`;

  for(var i in livros){
      str+=`<tr id=${livros[i].id}>
              <td>${livros[i].id}</td>
              <td>${livros[i].nome}</td>
              <td>${livros[i].autor}</td>
              <td>${livros[i].isbn}</td>
              <td>${livros[i].editora}</td>
              <td>${livros[i].ano}</td>
              <td style='text-align: center;'><a class="edit" href="#" 
                  data-id="${livros[i].id}">Editar</a></td>
              <td style='text-align: center;'><a class="delete" href="#" 
                  data-id="${livros[i].id}">Deletar</a></td>
          </tr>`;
          
  } 
  str+= `
  </table>
  </div>`;

  var tabela = document.querySelector("main");
  tabela.innerHTML = str;

  var linkNovo = document.querySelector("#novo");
  linkNovo.onclick = function(event){
      carregarForm();
  }

  const linksDelete = document.querySelectorAll(".delete");
  for(let linkDelete of linksDelete) {
      linkDelete.onclick = function(event){
          onDeletar(event.target.getAttribute("data-id"));
      }
  }

  const linksEdit = document.querySelectorAll(".edit");
    for(let linkEdit of linksEdit) {
        linkEdit.onclick = function(event){
            onEdit(event.target.getAttribute("data-id"));
        }
    }

}