const para1 = document.getElementById("para1")
const para2 = document.getElementById("para2")
const resultado = document.getElementById("resultado")

const calcularPrimos = function(a, b) {
    if (b == undefined) {
        return a
    }
    return a + b
}

resultado.innerHTML = calcularPrimos()