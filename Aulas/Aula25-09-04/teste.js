function listarTodosArgumentos() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

listarTodosArgumentos(1, "eae", false)

function somar(...valores) {
    let soma = 0
    const qtd = valores.length
    for (let i = 0; i < qtd; i++) {
        soma += valores[i]
    }
    return soma;
}

console.log(somar(2, 32, -55))