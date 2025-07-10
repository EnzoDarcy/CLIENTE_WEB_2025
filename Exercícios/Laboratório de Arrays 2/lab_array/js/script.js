const produtos = [
  { id: 1, nome: "Mouse", preco: 59.9, quantidade: 12 },
  { id: 2, nome: "Teclado", preco: 99.9, quantidade: 5 },
  { id: 3, nome: "Monitor", preco: 799.9, quantidade: 2 },
  { id: 4, nome: "Cabo HDMI", preco: 29.9, quantidade: 30 },
  { id: 5, nome: "Pen Drive", preco: 49.9, quantidade: 0 },
  { id: 6, nome: "Webcam", preco: 199.9, quantidade: 4 },
  { id: 7, nome: "SSD 240GB", preco: 299.9, quantidade: 6 },
  { id: 8, nome: "HD Externo", preco: 499.9, quantidade: 3 },
  { id: 9, nome: "Notebook", preco: 3499.9, quantidade: 1 },
  { id: 10, nome: "Suporte de Notebook", preco: 89.9, quantidade: 0 }
];

const mostrarNaTela = (texto) => {
  resultado.innerHTML = texto
}

const estaEmProdutos = (texto) => { 
  return texto == inputBuscar
} 

const buscarProduto = () => {
  // produtos.forEach(element => {
  //   if (element["nome"].toUpperCase() == inputBuscar.toUpperCase()) {
  //     resultadoBusca.innerHTML = element["id"]
  //   }
  // });
  for (let i = 0; i < produtos.length; i++) {
    resultadoBusca.innerHTML = produtos[i].find(estaEmProdutos)
  }
}

const listarProdutos = () => {

}

const mostrarNomes = () => {

}

const calcularTotal = () => {

}

const verificarEsgotados = () => {

}

const verificarPrecos = () => {

}

inputBuscar = document.getElementById("buscar").value
resultadoBusca = document.getElementById("resultadoBusca")
resultado = document.getElementById("resultado")

btn00 = document.getElementById("btn00")
btn01 = document.getElementById("btn01")
btn02 = document.getElementById("btn02")
btn03 = document.getElementById("btn03")
btn04 = document.getElementById("btn04")
btn05 = document.getElementById("btn05")
btn00.addEventListener("click", buscarProduto)
btn01.addEventListener("click", listarProdutos)
btn02.addEventListener("click", mostrarNomes)
btn03.addEventListener("click", calcularTotal)
btn04.addEventListener("click", verificarEsgotados)
btn05.addEventListener("click", verificarPrecos)