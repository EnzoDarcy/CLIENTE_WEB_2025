let botao_letra = document.getElementById("enviar_letra")
const palavras_possiveis = ["perplexidade", "putrefato", "incerto", "amigo", "fagulha", "cavaleiro", "saxofone"]
const palavra_secreta = palavras_possiveis[Math.trunc(Math.random() * palavras_possiveis.length)]
const resultado_campo = document.getElementById("resultado_campo")
let resultado = []
const tentativas_restantes_campo = document.getElementById("tentativas_restantes")
let tentativas_restantes = 4;
tentativas_restantes_campo.innerHTML = tentativas_restantes
const letras_tentadas_campo = document.getElementById("letras_tentadas")
let letras_tentadas = []

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

for (let i = 0; i < palavra_secreta.length; i++) {
    resultado[i] = "_"
}

resultado_campo.innerHTML = resultado

botao_letra.onclick = function() {
    let input_de_letra = document.getElementById("letra_escolhida")
    let letra_escolhida = document.getElementById("letra_escolhida").value
    if (letra_escolhida != null && !estaEmArray(letra_escolhida, letras_tentadas)) {
        if (estaEmArray(letra_escolhida, palavra_secreta)) {
            for (let i = 0; i < palavra_secreta.length; i++) {
                if (palavra_secreta[i] == letra_escolhida) {
                    resultado[i] = letra_escolhida
                    resultado_campo.innerHTML = resultado
                }
            }
        }
        else {
            tentativas_restantes -= 1;
            if (tentativas_restantes < 1) {
                window.alert("Você Perdeu!!")
                window.alert("A respota correta era " + palavra_secreta)
            }
        }
        letras_tentadas[letras_tentadas.length] = letra_escolhida
        letras_tentadas_campo.innerHTML = ""
        tentativas_restantes_campo.innerHTML = tentativas_restantes
        for (let i = 0; i < letras_tentadas.length; i++) {
            letras_tentadas_campo.innerHTML += letras_tentadas[i]
        }
    }
    else {
        letras_tentadas_campo.innerHTML = "Tentativa Inválida!"
    }
    input_de_letra.value = ""
}