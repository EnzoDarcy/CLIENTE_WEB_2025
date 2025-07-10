const para1 = document.getElementById("para1");
const botao = document.getElementById("submit");
const resultado = document.getElementById("resultado");

const decimalPraRomano = function(numero) {
    let contagemDeAlgarismos = []
    contagemDeAlgarismos[0] = Math.floor(numero / 100)
    numero = numero - (contagemDeAlgarismos[0] * 100)
    contagemDeAlgarismos[1] = Math.floor(numero / 50)
    numero = numero - (contagemDeAlgarismos[1] * 50)
    contagemDeAlgarismos[2] = Math.floor(numero / 20)
    numero = numero - (contagemDeAlgarismos[2] * 20)
    contagemDeAlgarismos[3] = Math.floor(numero / 10)
    numero = numero - (contagemDeAlgarismos[3] * 10)
    contagemDeAlgarismos[4] = Math.floor(numero / 5)
    numero = numero - (contagemDeAlgarismos[4] * 5)
    contagemDeAlgarismos[5] = Math.floor(numero / 2)
    numero = numero - (contagemDeAlgarismos[5] * 2)
    return contagemDeAlgarismos
}

botao.onclick = function() {
    resultado.innerHTML = ""
    let contagemDeAlgarismos = decimalPraRomano(parseInt(para1.value))
    document.getElementById("nota100").innerHTML = contagemDeAlgarismos[0]
    document.getElementById("nota50").innerHTML = contagemDeAlgarismos[1]
    document.getElementById("nota20").innerHTML = contagemDeAlgarismos[2]
    document.getElementById("nota10").innerHTML = contagemDeAlgarismos[3]
    document.getElementById("nota5").innerHTML = contagemDeAlgarismos[4]
    document.getElementById("nota2").innerHTML = contagemDeAlgarismos[5]
}

