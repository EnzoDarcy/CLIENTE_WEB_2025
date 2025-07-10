const para1 = document.getElementById("para1");
const botao = document.getElementById("submit");
const resultado = document.getElementById("resultado");

const decimalPraRomano = function(numero) {
    let contagemDeAlgarismos = []
    contagemDeAlgarismos[0] = Math.floor(numero / 1000)
    numero = numero - (contagemDeAlgarismos[0] * 1000)
    contagemDeAlgarismos[1] = Math.floor(numero / 500)
    numero = numero - (contagemDeAlgarismos[1] * 500)
    contagemDeAlgarismos[2] = Math.floor(numero / 100)
    numero = numero - (contagemDeAlgarismos[2] * 100)
    contagemDeAlgarismos[3] = Math.floor(numero / 50)
    numero = numero - (contagemDeAlgarismos[3] * 50)
    contagemDeAlgarismos[4] = Math.floor(numero / 10)
    numero = numero - (contagemDeAlgarismos[4] * 10)
    contagemDeAlgarismos[5] = Math.floor(numero / 5)
    numero = numero - (contagemDeAlgarismos[5] * 5)
    contagemDeAlgarismos[6] = Math.floor(numero / 1)
    return contagemDeAlgarismos
}

botao.onclick = function() {
    resultado.innerHTML = ""
    let contagemDeAlgarismos = decimalPraRomano(parseInt(para1.value))
    for (let m = 0; m < contagemDeAlgarismos[0]; m++) resultado.innerHTML += "M"
    for (let d = 0; d < contagemDeAlgarismos[1]; d++) resultado.innerHTML += "D"
    for (let c = 0; c < contagemDeAlgarismos[2]; c++) resultado.innerHTML += "C"
    for (let l = 0; l < contagemDeAlgarismos[3]; l++) resultado.innerHTML += "L"
    for (let x = 0; x < contagemDeAlgarismos[4]; x++) resultado.innerHTML += "X"
    for (let v = 0; v < contagemDeAlgarismos[5]; v++) resultado.innerHTML += "V"
    for (let i = 0; i < contagemDeAlgarismos[6]; i++) resultado.innerHTML += "I"
}

