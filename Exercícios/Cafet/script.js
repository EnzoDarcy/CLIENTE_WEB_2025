const lista = document.querySelector(".lista-cards")

let produtos = [
    {
        id:1,
        nome: "Teste",
        preco: 32,
        img: ""
    },
    {
        id:2,
        nome: "Teste2",
        preco: 64,
        img: ""
    },
    {
        id:3,
        nome: "Teste3",
        preco: 500,
        img: ""
    }
]


const mostraProdutos = function (produtos) {
    
    
    produtos.forEach(produto => {
        let cardProduto = document.createElement("div")
        cardProduto.setAttribute("class", "card")
        cardProduto.id = produto.id
        
        let nomeProduto = document.createElement("h4")
        nomeProduto.textContent = produto.nome
        cardProduto.appendChild(nomeProduto)
        
        let precoProduto = document.createElement("h3")
        precoProduto.textContent = produto.preco
        cardProduto.appendChild(precoProduto)
        
        lista.appendChild(cardProduto)
    });
}

const alertaNome = function(id) {
    console.log(produtos.find((prod)=>prod.id == id).nome)
}

mostraProdutos(produtos)

lista.addEventListener("click", (ev) => {
    
    const elementoClicado = ev.target
    const id = (elementoClicado.nodeName == "H3" || elementoClicado.nodeName == "H4" || elementoClicado.nodeName == "IMG")?
        elementoClicado.parentNode.id:elementoClicado.id
    alertaNome(id)

}) 