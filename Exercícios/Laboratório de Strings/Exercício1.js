const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
var fraseSeparada = texto.value.split(" ")

botao.onclick = function() {
    fraseSeparada = texto.value.split(" ")
    var resultado = ""
    for (i = 0; i < fraseSeparada.length; i++) {
        resultado += arrayParaString(inverterTexto(fraseSeparada[i]))
        resultado += " "
    }
    escreverAlgo(resultado)
}

const escreverAlgo = function(texto) {
    resultado.innerHTML = texto;
}

const inverterTexto = function(texto) {
    var novoTexto = []
    for (var i = 0; i < texto.length; i++) {
        novoTexto[i] = texto[texto.length - i - 1]
    }
    return novoTexto
}

const arrayParaString = function(array) {
    var texto = ""
    for (var i = 0; i < array.length; i++) {
        texto += array[i]
    }
    return texto
}