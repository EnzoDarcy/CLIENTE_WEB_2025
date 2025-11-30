///const { table } = require("console");

// Lista inicial de 50 livros

const btnCadastrarUsuario = document.querySelector("#cadastrarUsuario")
const btnAtualizarUsuario = document.querySelector("#atualizarUsuario")

const campoId = document.querySelector("#novoId")
const campoNome = document.querySelector("#novoNome")
const campoEmail = document.querySelector("#novoEmail")
const campoSenha = document.querySelector("#novoSenha")

/**
 * Função construtora de Exemplares da Biblioteca
 * @param {*} id
 * @param {*} nome
 * @param {*} email 
 * @param {*} senha
 */
function Usuario(id, nome, email, senha) {
    this.id = id
    this.nome = nome
    this.email = email
    this.senha = senha
}

async function enviaUsuario(usuario, metodo) {
    const resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=usuario", {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
    })

    const dados = await resposta.json()
    return dados
}

async function cadastrarUsuario() {
    let resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=usuario", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(pegaNovoUsuario())
    })
    let repota = await resposta.json()
    console.log(repota.mensagem)
}

async function atualizarUsuario() {
    let dados = await pegaUsuarios()
    dados.forEach((usuario) => {
        if (usuario.id === campoId.value) {
            console.log(usuario)
            usuarioFormulario = pegaNovoUsuario()
            usuarioFormulario.id = campoId.value
            enviaUsuario(usuarioFormulario, "PUT")
        }
    })
}

function pegaNovoUsuario() {
    let nome = campoNome.value
    let email = campoEmail.value
    let senha = campoSenha.value
    return new Usuario(null, nome, email, senha)
}

async function pegaUsuarios() {
    let resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=usuario")
    let usuarios = await resposta.json()
    return usuarios
}

/* 
 * Bloco de chamada de eventos
 */ 
btnCadastrarUsuario.addEventListener("click", cadastrarUsuario)
btnAtualizarUsuario.addEventListener("click", atualizarUsuario)