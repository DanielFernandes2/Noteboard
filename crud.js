document.querySelector("#salvar").addEventListener("click", cadastrar);

function cadastrar() {
  const titulo = document.querySelector("#titulo").value;
  const descricao = document.querySelector("#descricao").value;
  const categoria = document.querySelector("#categoria").value;
  const importancia = document.querySelector("#importancia").value;
  const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

  const tarefa = {
    titulo: titulo,
    descricao: descricao,
    categoria: categoria,
    importancia: importancia
  }

  if(!validar(tarefa.titulo, document.querySelector("#titulo"))) return
  if(!validar(tarefa.descricao, document.querySelector("#descricao"))) return

  document.querySelector("#tarefas").innerHTML += createCard(tarefa)

  modal.hide()
}

function validar(valor, campo){ //clean code
    if(valor == ""){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
      }
      campo.classList.remove("is-invalid")
      campo.classList.add("is-valid")
      return true
}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function createCard(tarefa) {
  return `
        <div class="col-lg-3 col-md-6 col-12">
        <div class="card">
        <div class="card-header">
            ${tarefa.titulo}
        </div>
        <div class="card-body">
            <p class="card-text">
                ${tarefa.descricao}
            </p>
            <p>
            <span class="badge text-bg-danger">
                ${tarefa.categoria}
            </span>
            </p>
            <p>
            <span class="badge text-bg-danger">
                ${tarefa.importancia}
            </span>
            </p>
            <a href="#" class="btn btn-success" title="Marcar como concluida">
            <i class="bi bi-check-lg"></i>
            Finalizar
            </a>
            <a onClick="apagar(this)" href="#" class="btn btn-danger" title="Apagar Tarefa">
            <i class="bi bi-trash"></i>
            Apagar
            </a>
        </div>
        </div> <!-- Fechamento do card -->
    </div> <!-- Coluna-->
    ` //template literals
}
