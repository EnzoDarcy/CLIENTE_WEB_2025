const resposta1 = document.getElementById("resposta1")
const resposta2 = document.getElementById("resposta2")
const resposta3 = document.getElementById("resposta3")

const sum = function(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado = resultado + array[i]
    }
    return resultado
}

const sumOdds = function(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            resultado += array[i]
        }
    }
    return resultado
}

const product = function(array) {
    let resultado = 1
    for (let i = 0; i < array.length; i++) {
        resultado = resultado * array[i]
    }
    return resultado
}

resposta1.innerHTML = sum([2, 3, 55])
resposta2.innerHTML = sumOdds([2, 3, 55])
resposta3.innerHTML = product([2, 3, 55])
