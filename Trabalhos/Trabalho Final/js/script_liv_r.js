const btnConsultarLivros = document.querySelector("#consultarLivros")
const btnListarTodosLivros = document.querySelector("#listarLivros")
const btnCadastrarLivro = document.querySelector("#cadastrarLivro")
const btnRegistrarRetirada = document.querySelector("#registrarRetirada")
const campoRegistrarRetirada = document.querySelector("#issnRetirada")
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


async function consultarLivros() {
    let livros = await pegaLivros()
    let busca = campoBusca.value.toLowerCase()

    let livrosFiltrados = filtraLivros(livros, busca)
    exibeLivros(livrosFiltrados)

    console.log("chamando consultarLivros")
}

/**
 * Função que deverá listar na tela todos os livros do acervo
 */
async function listarTodos() {
    console.log("chamando listarTodos")
    
    let livros = await pegaLivros()
    
    exibeLivros(livros)
}

function filtraLivros(livros, filtro) {
    let livrosFiltrados = []
    livros.forEach((livro) => {if(livro.titulo.toLowerCase().includes(filtro) || livro.autor.toLowerCase().includes(filtro) || livro.genero.toLowerCase().includes(filtro)) {livrosFiltrados.push(livro)}})
    // console.log(livrosFiltrados)
    return livrosFiltrados
}

async function pegaLivros() {
    let resposta = await fetch("http://localhost/DEV_WEB_I_2025/Trabalho%20Final/index.php?modulo=livro")
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
        
        colunaIssn.textContent = element.ISSN
        linha.appendChild(colunaIssn)
        
        colunaTitulo.textContent = element.titulo
        linha.appendChild(colunaTitulo)
        
        colunaAutor.textContent = element.autor
        linha.appendChild(colunaAutor)
        
        colunaEditora.textContent = element.editora
        linha.appendChild(colunaEditora)
        
        colunaAno.textContent = element.anoPublicacao
        linha.appendChild(colunaAno)
        
        colunaGenero.textContent = element.genero
        linha.appendChild(colunaGenero)

        colunaLocal.textContent = element.localizacao
        linha.appendChild(colunaLocal)
        
        colunaQtd.textContent = element.qtd
        linha.appendChild(colunaQtd)
        
        colunaQtd.textContent = element.disponivel
        linha.appendChild(colunaQtd)

        saida.appendChild(linha)
        
    });
    
    campoSaidaBusca.appendChild(saida)
}


/* 
 * Bloco de chamada de eventos
 */ 
btnConsultarLivros.addEventListener("click", consultarLivros)
btnListarTodosLivros.addEventListener("click", listarTodos)