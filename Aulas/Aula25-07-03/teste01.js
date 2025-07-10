const ulReceitas = document.querySelector("#receitasLista")

receitas.forEach(elemento => {
    liObj = document.createElement("li")
    liObj.textContent = elemento.nome
    ulReceitas.appendChild(liObj)

    const descricao = document.createElement("p")
    descricao.textContent = elemento.descricao
    liObj.appendChild(descricao)

    const foto = document.createElement("img")
    foto.src = elemento.foto
    liObj.appendChild(foto)

    const titulo = document.createElement("h2")
    titulo.textContent = "Ingredientes"
    liObj.appendChild(titulo)
    
    const ingredientes = elemento.ingredientes
    const ingredientesList = document.createElement("ul")

    ingredientes.forEach(elemento => {
        const item = document.createElement("li")
        item.textContent = elemento
        ingredientesList.appendChild(item)
    })
    liObj.appendChild(ingredientesList)

    const titulo2 = document.createElement("h2")
    titulo2.textContent = "Preparo"
    liObj.appendChild(titulo2)

    const preparoList = document.createElement("ol")
    const preparo = elemento.preparo
    preparo.forEach(elemento => {
        const item = document.createElement("li")
        item.textContent = elemento
        preparoList.appendChild(item)
    })
    liObj.appendChild(preparoList)
})