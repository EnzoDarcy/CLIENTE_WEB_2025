const listaProdutos = document.querySelector(".lista-cards")
const listaCarrinho = document.querySelector(".carrinho-cards")


const produtos = [
    {
        id:1,
        nome: "Café Espresso",
        preco: 8,
        img: "Imagens/Espresso.jpg"
    },
    {
        id:2,
        nome: "Capuccino",
        preco: 12,
        img: "Imagens/CAPPUCCINO-ZERO-180G.png.png"
    },
    {
        id:3,
        nome: "Suco de Laranja",
        preco: 10,
        img: "Imagens/Lanja.jpg"
    },
    {
        id:4,
        nome: "Água Mineral",
        preco: 6,
        img: "Imagens/Agua Mineral.jpg"
    },
    {
        id:6,
        nome: "Fatia de Bolo",
        preco: 12,
        img: "Imagens/Bolo.jpg"
    },
    {
        id:7,
        nome: "Sanduíche Natural",
        preco: 15,
        img: "Imagens/Hambrue.png"
    },
    {
        id:8,
        nome: "Croissant",
        preco: 17,
        img: "Imagens/Cuassont.jpg"
    }
]

const atualizaCarrinho = function() {
    const itensComprados = document.querySelector(".carrinho-cards")
    const precoTotalCampo = document.getElementById("total")
    let idCarrinho = 0
    let precoTotal = 0
    itensComprados.innerHTML = ""
    carrinho.forEach(produto => {
        const container = document.createElement("div")
        container.setAttribute("class", "carrinho")
        container.id = idCarrinho
        idCarrinho++
        const nome = document.createElement("p")
        const preco = document.createElement("h4")

        nome.textContent = produto.nome
        preco.textContent = produto.preco

        container.appendChild(nome)
        container.appendChild(preco)
        itensComprados.appendChild(container)

        precoTotal += produto.preco
    });
    precoTotalCampo.textContent = precoTotal
    salvarCarrinho()
}

const salvarCarrinho = function(carrinho) {
    if (localStorage.getItem("carrinho")) {
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    } else {
        localStorage.setItem("carrinho", "[]")
    }
}

const carregaCarrinho = function() {
    return JSON.parse(localStorage.getItem("carrinho"))
}
carregaCarrinho()

const mostraProdutos = function () {
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

        let imagemProduto = document.createElement("img")
        imagemProduto.src = produto.img
        cardProduto.appendChild(imagemProduto)
        
        listaProdutos.appendChild(cardProduto)
    });
}

const alertaNome = function(id) {
    console.log(produtos.find((prod)=>prod.id == id).nome)
}

const guardaProduto = function(id) {
    produto = produtos.find((prod)=>prod.id == id)
    carrinho = carregaCarrinho()
    carrinho.push(produto)
    salvarCarrinho(carrinho)
}

const removeProduto = function(id) {
    carrinho.splice(id, 1)
}

mostraProdutos()

listaProdutos.addEventListener("click", (ev) => {
    
    const elementoClicado = ev.target
    const id = (elementoClicado.nodeName == "H3" || elementoClicado.nodeName == "H4" || elementoClicado.nodeName == "IMG")?
        elementoClicado.parentNode.id:elementoClicado.id
    alertaNome(id)
    guardaProduto(id)
    atualizaCarrinho()
    console.log(carrinho)
})

listaCarrinho.addEventListener("click", (ev) => {
    
    const elementoClicado = ev.target
    const id = (elementoClicado.nodeName == "P" || elementoClicado.nodeName == "H4")?
        elementoClicado.parentNode.id:elementoClicado.id
    removeProduto(id)
    atualizaCarrinho()
    console.log(carrinho)
})