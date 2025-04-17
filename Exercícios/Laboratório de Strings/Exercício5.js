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

const selecionar = function(seletor) {
    return document.getElementById(seletor)
}

const removerElementos = function(array, index, quantidade) {
    let novaArray = []
    let quantidadeAfeta = 0
    for (let i = 0; i < (array.length - quantidade * quantidadeAfeta); i++) {
        if (i == index) {
            quantidadeAfeta = 1;
        }
        if (i + quantidade * quantidadeAfeta < array.length) {
            novaArray[i] = array[i + quantidade * quantidadeAfeta]
        }
    }
    return novaArray
}

const juntarArray = function(array1, array2, index) {
    let novaArray = []
    let j = 0

    for (let i = 0; i < index; i++) {
        novaArray[j] = array1[i]
        j++
    }

    for (let i = 0; i < array2.length; i++) {
        novaArray[j] = array2[i]
        j++
    }
    
    for (let i = 0; i < array1.length - index; i++) {
        novaArray[j] = array1[i + index]
        j++
    }

    return novaArray
}

botao.onclick = function() {
    console.clear()
    var procurar = selecionar("procurar").value
    var substituir = selecionar("substituir").value
    var achou
    var resultado = texto.value
    for (let i = 0; i < texto.value.length; i++) {
        if (texto.value[i] == procurar[0]) {
            achou = true
            for (let j = 0; j < procurar.length; j++) {
                if (texto.value[i + j] != procurar[j]) {
                    achou = false
                }
            }
            if (achou == true) {
                resultado = removerElementos(resultado, i, procurar.length)
                resultado = juntarArray(resultado, substituir, i)
                i += procurar.length
            }
        }
    }
    escreverAlgo(arrayParaString(resultado))
}
