const dominio = "https://rafaelescalfoni.github.io/desenv_web/restaurante"

const servico = dominio + "/items.json"


const carregandoCardapio = cardapioList => {
    return cardapioList.reduce((acum, e) => {
        let item = `<div class="item"><h3>${e.name || e.title}</h3><img src=${"http://rafaelescalfoni.github.io/desenv_web/restaurante/" + e.photo} alt=${e.name || e.title}</div>`
        return acum + item
    }, "")
}


const objRequest = new XMLHttpRequest()
objRequest.open("GET", servico)
objRequest.send()

objRequest.onreadystatechange = function() {
    if (objRequest.readyState == 4 && objRequest.status == 200) {
        // console.log(objRequest.responseText)
        let cardapio = JSON.parse(objRequest.responseText)
        document.querySelector("#main-content").innerHTML = carregandoCardapio(cardapio)

    }
}


// fetch(servico)
//     .then(respostaDoServidor => respostaDoServidor.json())
//     .then(respostaDaPromise => {
//     let cardapio = respostaDaPromise
//     document.querySelector("#main-content").innerHTML = carregandoCardapio(cardapio)

// })