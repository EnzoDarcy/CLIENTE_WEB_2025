url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"
const objectHTTPRequest = new XMLHttpRequest()
var filmes = ""

carregaFilmes = function() { 
    if (this.readyState == 4 && this.status == 200) {     
        filmes = JSON.parse(objectHTTPRequest.responseText)
    }
}

objectHTTPRequest.open("GET", url)
objectHTTPRequest.send()
objectHTTPRequest.onreadystatechange = carregaFilmes