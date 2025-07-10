const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const botao = document.getElementById("submit");
const resultado = document.getElementById("resultado");

const ePrimo = function(a) {
    if (a < 2) return false;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) return false;
    }
    return true;
}

const calcularPrimos = function(a, b) {
    let arrayResultante = [];
    if (b === undefined || isNaN(b)) {
        for (let i = 0; i < a; i++) {
            if (ePrimo(i)) arrayResultante.push(i);
        }
    } else {
        for (let i = a; i < b; i++) {
            if (ePrimo(i)) arrayResultante.push(i);
        }
    }
    return arrayResultante;
}

botao.onclick = function() {
    resultado.innerHTML = "";
    const arrayDePrimos = calcularPrimos(parseInt(para1.value), parseInt(para2.value));
    resultado.innerHTML = arrayDePrimos.join(", ");
}