const data1 = document.getElementById("data1")
const data2 = document.getElementById("data2")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

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

botao.onclick = function() {
    escreverAlgo(Math.abs(Math.trunc((new Date(data1.value) - new Date(data2.value)) / (1000 * 60 * 60 * 24 * 7))))
}
