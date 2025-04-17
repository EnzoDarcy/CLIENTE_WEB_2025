const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
const cifraA = ["t", "T", "e", "E", "n", "N", "i", "I", "s", "S"]
const cifraB = ["p", "P", "o", "O", "l", "L", "a", "A", "r", "R"]

const arrayParaString = function(array) {
    var texto = ""
    for (var i = 0; i < array.length; i++) {
        texto += array[i]
    }
    return texto
}

const escreverAlgo = function(texto) {
    resultado.innerHTML = texto;
}

const estaEmArray = function(valor, array) {
    for (let i = 0; i <= array.length - valor.length; i++) {
        let igual = true
        for (let j = 0; j < valor.length; j++) {
            if (array[i + j] != valor[j]) {
                igual = false
                break
            }
        }
        if (igual) {
            return true
        }
    }
    return false
}

const trocarElementoEmArray = function(array, valor, index) {
    let novaArray = []
    for (let i = 0; i < array.length; i++) {
        if (i == index) {
            novaArray[i] = valor
        }
        else {
            novaArray[i] = array[i]
        }
    }
    return novaArray
}

botao.onclick = function() {
    let resultadoTexto = []
    for (let i = 0; i < texto.value.length; i++) {
        if (texto.value[i] == "t") resultadoTexto[i] = "p"
        else if (texto.value[i] == "T") resultadoTexto[i] = "P"
        else if (texto.value[i] == "e") resultadoTexto[i] = "o"
        else if (texto.value[i] == "E") resultadoTexto[i] = "O"
        else if (texto.value[i] == "n") resultadoTexto[i] = "l"
        else if (texto.value[i] == "N") resultadoTexto[i] = "L"
        else if (texto.value[i] == "i") resultadoTexto[i] = "a"
        else if (texto.value[i] == "I") resultadoTexto[i] = "A"
        else if (texto.value[i] == "s") resultadoTexto[i] = "r"
        else if (texto.value[i] == "S") resultadoTexto[i] = "R"

        else if (texto.value[i] == "p") resultadoTexto[i] = "t"
        else if (texto.value[i] == "P") resultadoTexto[i] = "T"
        else if (texto.value[i] == "o") resultadoTexto[i] = "e"
        else if (texto.value[i] == "O") resultadoTexto[i] = "E"
        else if (texto.value[i] == "l") resultadoTexto[i] = "n"
        else if (texto.value[i] == "L") resultadoTexto[i] = "N"
        else if (texto.value[i] == "a") resultadoTexto[i] = "i"
        else if (texto.value[i] == "A") resultadoTexto[i] = "I"
        else if (texto.value[i] == "r") resultadoTexto[i] = "s"
        else if (texto.value[i] == "R") resultadoTexto[i] = "S"
        else resultadoTexto[i] = texto.value[i]
    }
    escreverAlgo(resultadoTexto)
}
