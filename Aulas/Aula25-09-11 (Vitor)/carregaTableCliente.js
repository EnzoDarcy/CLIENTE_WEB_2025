const url = ""

document.addEventListener("DOMContentLoaded", (evento) => {
    evento.preventDefault()
    fetch("http://localhost:3000/clientes").then(async resposta => {
        let clientes = await resposta.json()
        console.log(clientes)
        
        let tabela = document.getElementsByTagName("table")[0]
        clientes.forEach(cliente => {
            const linha = document.createElement("tr")
            const colunaNome = document.createElement("td")
            const colunaNascimento = document.createElement("td")
            
            colunaNome.textContent = cliente.nome
            colunaNascimento.textContent = cliente.nascimento
    
            tabela.appendChild(linha)
            linha.appendChild(colunaNome)
            linha.appendChild(colunaNascimento)
        });
    })
    
})