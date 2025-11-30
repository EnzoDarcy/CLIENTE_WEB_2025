const btnConsultarLivros = document.querySelector("#consultarLivros")
const btnListarTodosLivros = document.querySelector("#listarLivros")
const btnCadastrarLivro = document.querySelector("#cadastrarLivro")
const btnRegistrarRetirada = document.querySelector("#registrarRetirada")
const btnRemoverUsuario = document.querySelector("#registrarRemovida")
const campoRegistrarRemovida = document.querySelector("#issnRemovida")
const campoSaidaBusca = document.querySelector("#saidaBusca")
const campoBusca = document.querySelector("#busca")

const campoIssn = document.querySelector("#novoIssn")
const campoTitulo = document.querySelector("#novoTitulo")
const campoAutor = document.querySelector("#novoAutor")
const campoEditora = document.querySelector("#novoEditora")
const campoAno = document.querySelector("#novoAno")
const campoGenero = document.querySelector("#novoGenero")
const campoLocal = document.querySelector("#novoLocal")
const campoQtd = document.querySelector("#novoQtd")

/**
 * Função construtora de Exemplares da Biblioteca
 * @param {*} nome
 * @param {*} email 
 * @param {*} senha
 */
function Usuario(nome, email, senha) {
    this.nome = nome
    this.email = email
    this.senha = senha
}

/**
 * Função que deverá pegar os dados do formulário e gerar um novo 
 * exemplar na lista de livros da biblioteca
 * 
 */

async function enviaUsuario(usuario, metodo) {
    const resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=usuario", {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
    })

    const dados = await resposta.json()
    return dados
}

async function removeUsuario() {
    let dados = await pegaUsuarios()
    dados.forEach((usuario) => {
        if (usuario.id === campoRegistrarRemovida.value) {
            enviaUsuario(usuario, "DELETE")
        }
    })
}

async function pegaUsuarios() {
    let resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=usuario")
    let usuarios = await resposta.json()
    return usuarios
}


/* 
 * Bloco de chamada de eventos
*/
btnRemoverUsuario.addEventListener("click", removeUsuario)