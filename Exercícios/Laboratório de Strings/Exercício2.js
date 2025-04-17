const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
const vogais = ["a", "e", "i", "o", "u"]

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

botao.onclick = function() {
    var resultado = ""
    var i = 0
    for (i = 0; i < texto.value.length; i++) {
        if (vogais.includes(texto.value[i].toLowerCase())) {
            resultado += `<strong>${texto.value[i]}</strong>`
        }
        else {
            resultado += texto.value[i]
        }
    }
    console.log(resultado)
    escreverAlgo(resultado)
}
