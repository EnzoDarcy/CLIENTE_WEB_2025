const data = document.getElementById("data")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

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

botao.onclick = function() {
    let dataSeparada = data.value.split("-")
    escreverAlgo(dataSeparada[2] + " de " + meses[dataSeparada[1] - 1] + " de " + dataSeparada[0])
}
