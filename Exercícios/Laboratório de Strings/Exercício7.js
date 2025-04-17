const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const caracteresEspeciais = ["@", "#", "!", "$", "%", "&", "*", "(", ")", "-", "+", ".", "="]

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

const valorQualquerDeArrayEstaEmArray = function(array1, array2) {
    let resultado = false
    for (let i = 0; i < array1.length; i++) {
        if (estaEmArray(array1[i], array2)) {
            resultado = true
        }
    }
    return resultado
}

botao.onclick = function() {
    let senha
    if (valorQualquerDeArrayEstaEmArray(numeros, texto.value)) {
        if (valorQualquerDeArrayEstaEmArray(caracteresEspeciais, texto.value)) {
            senha = "forte"
            resultado.style.color = "#0F0"
        }
        else {
            senha = "moderada"
            resultado.style.color = "#FA0"
        }
    }
    else {
        senha = "fraca"
        resultado.style.color = "#F00"
    }
    escreverAlgo(senha)
}
