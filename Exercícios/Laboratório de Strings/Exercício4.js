const texto = document.getElementById("texto")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")

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

const quantidadeEmArray = function(teste, array) {
    var quantidade = 0
    for (i = 0; i < array.length; i++) {
        if (teste == array[i]) quantidade++
    }
    return quantidade
}

const elementoMaisRepetido = function(array) {
    let record = 0
    let elemento
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j] && i != j) {
                contador++
                if (contador >= record) {
                    elemento = array[j]
                    record = contador
                }
            }
        }
        contador = 0
    }
    return elemento
}

botao.onclick = function() {
    let resposta = elementoMaisRepetido(texto.value.split(" ")) + "<br>" + quantidadeEmArray(elementoMaisRepetido(texto.value.split(" ")), texto.value.split(" ")) + "<br>" + texto.value.split(" ").length + "<br>" + (texto.value.length - quantidadeEmArray(" ", texto.value))
    escreverAlgo(resposta)
}