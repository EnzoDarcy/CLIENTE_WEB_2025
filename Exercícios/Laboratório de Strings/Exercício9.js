const data = document.getElementById("data")
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
    const agora = new Date()
    escreverAlgo(Math.trunc((agora - new Date(data.value)) / (1000 * 60 * 60 * 24)))
    // let agoraSeparado = agora.toString().split(" ")
    // let dataDeAgoraFinal = []
    // dataDeAgoraFinal[0] = agoraSeparado[3]
    // dataDeAgoraFinal[2] = agoraSeparado[2]
    // for (let i = 0; i < meses.length; i++) {
    //     if (meses[i] == agoraSeparado[1]) {
    //         dataDeAgoraFinal[1] = i + 1
    //     }
    // }
    // const data1 = new Date(data.value)
    // // alert(data.value + " --- " + data1)
    // const data2 = new Date(dataDeAgoraFinal.join("-"))
    // // alert(dataDeAgoraFinal.join("-") + " --- " + data2)
    // escreverAlgo(((data2 - data1) - 10800000) / (1000 * 60 * 60 * 24))
}
