const btnConsultarUsuarios = document.querySelector("#consultarUsuarios")
const btnListarTodosUsuarios = document.querySelector("#listarUsuarios")
const campoSaidaBusca = document.querySelector("#saidaBusca")

const campoBusca = document.querySelector("#busca")

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
async function consultarUsuarios() {
    let usuarios = await pegaUsuarios()
    let busca = campoBusca.value.toLowerCase()

    let usuariosFiltrados = filtraUsuarios(usuarios, busca)
    exibeUsuarios(usuariosFiltrados)

    console.log("chamando consultarUsuarios")
}

/**
 * Função que deverá listar na tela todos os livros do acervo
 */
async function listarTodos() {
    console.log("chamando listarTodos")
    
    let usuarios = await pegaUsuarios()
    
    exibeUsuarios(usuarios)
}

function filtraUsuarios(usuarios, filtro) {
    let usuariosFiltrados = []
    usuarios.forEach((usuario) => {if(usuario.nome.toLowerCase().includes(filtro)) {usuariosFiltrados.push(usuario)}})
    // console.log(usuariosFiltrados)
    return usuariosFiltrados
}

async function pegaUsuarios() {
    let resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=usuario")
    let usuarios = await resposta.json()
    return usuarios
}

function exibeUsuarios(usuarios) {
    campoSaidaBusca.innerHTML = ""
    
    let saida = document.createElement("table")
    saida.border = 1
    
    usuarios.forEach(element => {
        let linha = document.createElement("tr")
        
        let colunaNome = document.createElement("td")
        let colunaEmail = document.createElement("td")
        let colunaSenha = document.createElement("td")
        
        colunaNome.textContent = element.nome
        linha.appendChild(colunaNome)
        
        colunaEmail.textContent = element.email
        linha.appendChild(colunaEmail)
        
        colunaSenha.textContent = element.senha
        linha.appendChild(colunaSenha)
        
        saida.appendChild(linha)
        
    });
    
    campoSaidaBusca.appendChild(saida)
}


/* 
 * Bloco de chamada de eventos
 */ 
btnConsultarUsuarios.addEventListener("click", consultarUsuarios)
btnListarTodosUsuarios.addEventListener("click", listarTodos)