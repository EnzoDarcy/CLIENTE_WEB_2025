///const { table } = require("console");

// Lista inicial de 50 livros
const biblioteca = [
  { issn: "1001", titulo: "Dom Casmurro", autor: "Machado de Assis", editora: "Nova Fronteira", ano: 1899, genero: "Romance", local: "1-A", qtd: 2},
  { issn: "1002", titulo: "O Cortiço", autor: "Aluísio Azevedo", editora: "Saraiva", ano: 1890, genero: "Naturalismo", local: "1-B", qtd: 2},
  { issn: "1003", titulo: "Iracema", autor: "José de Alencar", editora: "Ática", ano: 1865, genero: "Romance", local: "1-C", qtd: 2},
  { issn: "1004", titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", editora: "L&PM", ano: 1844, genero: "Romance", local: "1-D", qtd: 2},
  { issn: "1005", titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", editora: "Companhia das Letras", ano: 1881, genero: "Realismo", local: "1-E", qtd: 2},
  { issn: "1006", titulo: "O Alienista", autor: "Machado de Assis", editora: "Martin Claret", ano: 1882, genero: "Sátira", local: "2-A", qtd: 2},
  { issn: "1007", titulo: "Capitães da Areia", autor: "Jorge Amado", editora: "Record", ano: 1937, genero: "Romance", local: "2-B", qtd: 2},
  { issn: "1008", titulo: "Gabriela, Cravo e Canela", autor: "Jorge Amado", editora: "Record", ano: 1958, genero: "Romance", local: "2-C", qtd: 2},
  { issn: "1009", titulo: "Grande Sertão: Veredas", autor: "Guimarães Rosa", editora: "Globo", ano: 1956, genero: "Literatura Brasileira", local: "2-D", qtd: 2},
  { issn: "1010", titulo: "Vidas Secas", autor: "Graciliano Ramos", editora: "Record", ano: 1938, genero: "Realismo", local: "2-E", qtd: 2},
  { issn: "1011", titulo: "Senhora", autor: "José de Alencar", editora: "Martin Claret", ano: 1875, genero: "Romance", local: "3-A", qtd: 2},
  { issn: "1012", titulo: "O Guarani", autor: "José de Alencar", editora: "Ática", ano: 1857, genero: "Romance", local: "3-B", qtd: 2},
  { issn: "1013", titulo: "A Escrava Isaura", autor: "Bernardo Guimarães", editora: "Saraiva", ano: 1875, genero: "Romance", local: "3-C", qtd: 2},
  { issn: "1014", titulo: "Triste Fim de Policarpo Quaresma", autor: "Lima Barreto", editora: "Penguin", ano: 1915, genero: "Sátira", local: "3-D", qtd: 2},
  { issn: "1015", titulo: "Mar Morto", autor: "Jorge Amado", editora: "Record", ano: 1936, genero: "Romance", local: "3-E", qtd: 2},
  { issn: "1016", titulo: "Sagarana", autor: "Guimarães Rosa", editora: "Nova Fronteira", ano: 1946, genero: "Contos", local: "4-A", qtd: 2},
  { issn: "1017", titulo: "Fogo Morto", autor: "José Lins do Rego", editora: "José Olympio", ano: 1943, genero: "Regionalismo", local: "4-B", qtd: 2},
  { issn: "1018", titulo: "A Hora da Estrela", autor: "Clarice Lispector", editora: "Rocco", ano: 1977, genero: "Ficção", local: "4-C", qtd: 2},
  { issn: "1019", titulo: "O Primo Basílio", autor: "Eça de Queirós", editora: "Martin Claret", ano: 1878, genero: "Realismo", local: "4-D", qtd: 2},
  { issn: "1020", titulo: "Os Maias", autor: "Eça de Queirós", editora: "Globo", ano: 1888, genero: "Realismo", local: "4-E", qtd: 2},

];


const btnConsultarLivros = document.querySelector("#consultarLivros")
const btnListarTodosLivros = document.querySelector("#listarLivros")
const btnCadastrarLivro = document.querySelector("#cadastrarLivro")
const btnRegistrarRetirada = document.querySelector("#registrarRetirada")
const campoSaidaBusca = document.querySelector("#saidaBusca")
const campoBusca = document.querySelector("#busca")

const campoIssn = document.querySelector("#novoIssn")
const campoTitulo = document.querySelector("#novoTitulo")
const campoAutor = document.querySelector("#novoAutor")
const campoEditora = document.querySelector("#novoEditora")
const campoAno = document.querySelector("#novoAno")
const campoGenero = document.querySelector("#novoGenero")
const campoLocal = document.querySelector("#novoIssn")
const campoQtd = document.querySelector("#novoQtd")

/**
 * Função construtora de Exemplares da Biblioteca
 * @param {*} issn 
 * @param {*} titulo 
 * @param {*} autor 
 * @param {*} editora 
 * @param {*} ano 
 * @param {*} genero 
 * @param {*} local 
 * @param {*} quantidade 
 */
function Livro(issn, titulo, autor, editora, ano, genero, local, qtd) {
    this.issn = issn
    this.titulo = titulo
    this.autor = autor
    this.editora = editora
    this.ano = ano
    this.genero = genero
    this.local = local
    this.qtd = qtd
}

/**
 * Função que deverá pegar os dados do formulário e gerar um novo 
 * exemplar na lista de livros da biblioteca
 * 
 */
async function cadastrarExemplar() {
    let livro = await fetch("http://localhost/Enzo%20Darcy/DEV_WEB_I_2025/Aula%2004-11/index.php?modulo=livro", {
        method: "POST",
        header: {"content-type":"application/json"},
        body: JSON.stringify(pegaNovoLivro())})
    
    console.log("chamando cadastrarExemplar")
}

/**
 * Função que deverá pegar o parâmetro de filtro e listar todos os 
 * exemplares que satisfizerem a condição
 */
async function consultarLivros() {
    let livros = await pegaLivros()
    let busca = campoBusca.value.toLowerCase()

    let livrosFiltrados = filtraLivros(livros, busca)
    exibeLivros(livrosFiltrados)

    console.log(busca)
    console.log("chamando consultarLivros")
}

/**
 * Função que deverá listar na tela todos os livros do acervo
 */
async function listarTodos() {
    let livros = await pegaLivros()
    
    exibeLivros(livros)

    console.log("chamando listarTodos")
}

function filtraLivros(livros, filtro) {
    let livrosFiltrados = []
    livros.forEach((livro) => {if(livro.titulo.includes(filtro) || livro.autor.includes(filtro) || livro.genero.includes(filtro)) {livrosFiltrados.push(livro)}})
    return livrosFiltrados
}

function pegaNovoLivro() {
    let issn = campoIssn.value
    let titulo = campoTitulo.value
    let autor = campoAutor.value
    let editora = campoEditora.value
    let ano = campoAno.value
    let genero = campoGenero.value
    let local = campoLocal.value
    let qtd = campoQtd.value
    return new Livro(issn, titulo, autor, editora, ano, genero, local, qtd)
}

async function pegaLivros() {
    let resposta = await fetch("http://localhost/Enzo%20Darcy/DEV_WEB_I_2025/Aula%2004-11/index.php?modulo=livro")
    let livros = await resposta.json()
    return livros
}

function exibeLivros(livros) {
    campoSaidaBusca.innerHTML = ""
    
    let saida = document.createElement("table")
    saida.border = 1
    
    livros.forEach(element => {
        let linha = document.createElement("tr")
        
        let colunaIssn = document.createElement("td")
        let colunaTitulo = document.createElement("td")
        let colunaAutor = document.createElement("td")
        let colunaEditora = document.createElement("td")
        let colunaAno = document.createElement("td")
        let colunaGenero = document.createElement("td")
        let colunaLocal = document.createElement("td")
        let colunaQtd = document.createElement("td")
        
        colunaIssn.textContent = element.issn
        linha.appendChild(colunaIssn)
        
        colunaTitulo.textContent = element.titulo
        linha.appendChild(colunaTitulo)
        
        colunaAutor.textContent = element.autor
        linha.appendChild(colunaAutor)
        
        colunaEditora.textContent = element.editora
        linha.appendChild(colunaEditora)
        
        colunaAno.textContent = element.ano
        linha.appendChild(colunaAno)
        
        colunaGenero.textContent = element.genero
        linha.appendChild(colunaGenero)

        colunaLocal.textContent = element.local
        linha.appendChild(colunaLocal)
        
        colunaQtd.textContent = element.qtd
        linha.appendChild(colunaQtd)
        
        saida.appendChild(linha)
        
    });
    
    campoSaidaBusca.appendChild(saida)
}

/**
 * Função que deverá marcar o exemplar como indisponível no acervo
 */
function registrarRetirada() {
    console.log("chamando registrarRetirada")
}

/* 
 * Bloco de chamada de eventos
 */ 
btnCadastrarLivro.addEventListener("click", cadastrarExemplar)
btnConsultarLivros.addEventListener("click", consultarLivros)
btnListarTodosLivros.addEventListener("click", listarTodos)
btnRegistrarRetirada.addEventListener("click", registrarRetirada)