///const { table } = require("console");

// Lista inicial de 50 livros
const biblioteca = [
  { ISSN: "1001", titulo: "Dom Casmurro", autor: "Machado de Assis", editora: "Nova Fronteira", anoPublicacao: 1899, genero: "Romance", localizacao: "1-A", qtd: 2},
  { ISSN: "1002", titulo: "O Cortiço", autor: "Aluísio Azevedo", editora: "Saraiva", anoPublicacao: 1890, genero: "Naturalismo", localizacao: "1-B", qtd: 2},
  { ISSN: "1003", titulo: "Iracema", autor: "José de Alencar", editora: "Ática", anoPublicacao: 1865, genero: "Romance", localizacao: "1-C", qtd: 2},
  { ISSN: "1004", titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", editora: "L&PM", anoPublicacao: 1844, genero: "Romance", localizacao: "1-D", qtd: 2},
  { ISSN: "1005", titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", editora: "Companhia das Letras", anoPublicacao: 1881, genero: "Realismo", localizacao: "1-E", qtd: 2},
  { ISSN: "1006", titulo: "O Alienista", autor: "Machado de Assis", editora: "Martin Claret", anoPublicacao: 1882, genero: "Sátira", localizacao: "2-A", qtd: 2},
  { ISSN: "1007", titulo: "Capitães da Areia", autor: "Jorge Amado", editora: "Record", anoPublicacao: 1937, genero: "Romance", localizacao: "2-B", qtd: 2},
  { ISSN: "1008", titulo: "Gabriela, Cravo e Canela", autor: "Jorge Amado", editora: "Record", anoPublicacao: 1958, genero: "Romance", localizacao: "2-C", qtd: 2},
  { ISSN: "1009", titulo: "Grande Sertão: Veredas", autor: "Guimarães Rosa", editora: "Globo", anoPublicacao: 1956, genero: "Literatura Brasileira", localizacao: "2-D", qtd: 2},
  { ISSN: "1010", titulo: "Vidas Secas", autor: "Graciliano Ramos", editora: "Record", anoPublicacao: 1938, genero: "Realismo", localizacao: "2-E", qtd: 2},
  { ISSN: "1011", titulo: "Senhora", autor: "José de Alencar", editora: "Martin Claret", anoPublicacao: 1875, genero: "Romance", localizacao: "3-A", qtd: 2},
  { ISSN: "1012", titulo: "O Guarani", autor: "José de Alencar", editora: "Ática", anoPublicacao: 1857, genero: "Romance", localizacao: "3-B", qtd: 2},
  { ISSN: "1013", titulo: "A Escrava Isaura", autor: "Bernardo Guimarães", editora: "Saraiva", anoPublicacao: 1875, genero: "Romance", localizacao: "3-C", qtd: 2},
  { ISSN: "1014", titulo: "Triste Fim de Policarpo Quaresma", autor: "Lima Barreto", editora: "Penguin", anoPublicacao: 1915, genero: "Sátira", localizacao: "3-D", qtd: 2},
  { ISSN: "1015", titulo: "Mar Morto", autor: "Jorge Amado", editora: "Record", anoPublicacao: 1936, genero: "Romance", localizacao: "3-E", qtd: 2},
  { ISSN: "1016", titulo: "Sagarana", autor: "Guimarães Rosa", editora: "Nova Fronteira", anoPublicacao: 1946, genero: "Contos", localizacao: "4-A", qtd: 2},
  { ISSN: "1017", titulo: "Fogo Morto", autor: "José Lins do Rego", editora: "José Olympio", anoPublicacao: 1943, genero: "Regionalismo", localizacao: "4-B", qtd: 2},
  { ISSN: "1018", titulo: "A Hora da Estrela", autor: "Clarice Lispector", editora: "Rocco", anoPublicacao: 1977, genero: "Ficção", localizacao: "4-C", qtd: 2},
  { ISSN: "1019", titulo: "O Primo Basílio", autor: "Eça de Queirós", editora: "Martin Claret", anoPublicacao: 1878, genero: "Realismo", localizacao: "4-D", qtd: 2},
  { ISSN: "1020", titulo: "Os Maias", autor: "Eça de Queirós", editora: "Globo", anoPublicacao: 1888, genero: "Realismo", localizacao: "4-E", qtd: 2},

];


const btnConsultarLivros = document.querySelector("#consultarLivros")
const btnListarTodosLivros = document.querySelector("#listarLivros")
const btnCadastrarLivro = document.querySelector("#cadastrarLivro")
const btnRegistrarRetirada = document.querySelector("#registrarRetirada")
const btnRemoverLivro = document.querySelector("#registrarRemovida")
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
 * @param {*} ISSN
 * @param {*} titulo 
 * @param {*} autor 
 * @param {*} editora 
 * @param {*} anoPublicacao
 * @param {*} genero 
 * @param {*} localizacao 
 * @param {*} quantidade 
 * @param {*} disponivel 
 */
function Livro(ISSN, titulo, autor, editora, anoPublicacao, genero, localizacao, qtd, disponivel) {
    this.ISSN = ISSN
    this.titulo = titulo
    this.autor = autor
    this.editora = editora
    this.anoPublicacao = anoPublicacao
    this.genero = genero
    this.localizacao = localizacao
    this.qtd = qtd
    this.disponivel = disponivel
}

/**
 * Função que deverá pegar os dados do formulário e gerar um novo 
 * exemplar na lista de livros da biblioteca
 * 
 */

async function enviaLivro(livro, metodo) {
    const resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=livro", {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livro),
    })

    const dados = await resposta.json()
    return dados
}

async function removeLivro() {
    let dados = await pegaLivros()
    dados.forEach((livro) => {
        if (livro.ISSN === campoRegistrarRemovida.value) {
            enviaLivro(livro, "DELETE")
        }
    })
}

async function pegaLivros() {
    let resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=livro")
    let livros = await resposta.json()
    return livros
}


/* 
 * Bloco de chamada de eventos
*/
btnRemoverLivro.addEventListener("click", removeLivro)