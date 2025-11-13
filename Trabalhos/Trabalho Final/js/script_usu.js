///const { table } = require("console");

// Lista inicial de 50 livros

const btnCadastrarUsuario = document.querySelector("#cadastrarUsuario")

const campoNome = document.querySelector("#novoNome")
const campoEmail = document.querySelector("#novoEmail")
const campoSenha = document.querySelector("#novoSenha")

/**
 * Função construtora de Exemplares da Biblioteca
 * @param {*} nome
 * @param {*} email 
 * @param {*} senha
 */
function Livro(nome, email, senha) {
    this.nome = nome
    this.emaiç = email
    this.senha = senha
}

/**
 * Função que deverá pegar os dados do formulário e gerar um novo 
 * exemplar na lista de livros da biblioteca
 * 
 */
async function cadastrarUsuario() {
    console.log("oi")
    let resposta = await fetch("http://localhost/Enzo%20Darcy/DEV_WEB_I_2025/Aula%2004-11/index.php?modulo=usuario", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(pegaNovoUsuario())
    })    
    console.log("chamando cadastrarUsuario")
}

function pegaNovoUsuario() {
    let nome = campoNome.value
    let email = campoEmail.value
    let senha = campoSenha.value
    return new Livro(nome, email, senha)
}

async function pegaUsuarios() {
    let resposta = await fetch("http://localhost/Enzo%20Darcy/DEV_WEB_I_2025/Aula%2004-11/index.php?modulo=usuario")
    let usuarios = await resposta.json()
    return usuarios
}

/* 
 * Bloco de chamada de eventos
 */ 
btnCadastrarUsuario.addEventListener("click", cadastrarUsuario)