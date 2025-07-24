
for(let i=1;i<=1000; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetch(url).then(resposta => resposta.json())
            .then(resposta => {
                console.log(resposta)
                const nomesUL = document.querySelector("#nomes")
                resultado = `<ul style="list-style:none;">
                <li><img src="${resposta.sprites.front_default}"></li>
                <li>${resposta.name}</li>
                <li>${resposta.types[0].type.name}</li>`
                resultado += (resposta.types[1])?resposta.types[1].type.name:""
                nomesUL.innerHTML += resultado
                //img.src = resposta.sprites.front_default
            })
    .catch(erro => {
        console.log(`Deu zebra ${erro}`)
    })
}
