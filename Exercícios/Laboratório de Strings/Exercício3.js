const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const tabela = document.getElementById("tabela")
var textoSeparado = []

const escreverAlgo = function(texto) {
    resultado.innerHTML = texto;
}

const arrayParaString = function(array) {
    var texto = ""
    for (var i = 0; i < array.length; i++) {
        texto += array[i]
    }
    return texto
}

const quantidadeEmArray = function(teste, array) {
    var quantidade = 0
    for (i = 0; i < array.length; i++) {
        if (teste == array[i]) quantidade++
    }
    return quantidade
}

const removerElementosIguais = function(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j] && i != j) {
                array = removerElemento(array, j)
                console.log(array)
            }
        }
    }
    return array
}

const removerElemento = function (array, index) {
    let novaArray = []
    var encontrou = 0
    for (let i = 0; i < (array.length); i++) {
        if (i == index) {
            encontrou = 1
        }
        else {
            novaArray[i - encontrou] = array[i]
        }
    }
    return novaArray
}

botao.onclick = function() {
    tabela.innerHTML = ""
    textoSeparado = texto.value.split(" ")
    let textoSeparadoUnico = removerElementosIguais(textoSeparado)
    for (let i = 0; i < textoSeparadoUnico.length; i++) {
        tabela.innerHTML += `<td>${textoSeparadoUnico[i]}</td><td>${quantidadeEmArray(textoSeparadoUnico[i], textoSeparado)}</td>`
    }
}

