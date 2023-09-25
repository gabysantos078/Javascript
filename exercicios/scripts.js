// inicializar a array vazia
const numeros = [];

// pegar elemento html, adicionar o ouvinte ao botão
document.getElementById("adicionar").addEventListener("click", function () {
    const inputNumero = document.getElementById("numero");
    const numero = parseFloat(inputNumero.value);


    // verificar se o valor é valido, se não for um numero (is Not a Number), quando válido é adicionado à matriz (numeros.push(numero))
    if (!isNaN(numero)) {
        numeros.push(numero);
        inputNumero.value = ""; ;// limpar o campo de texto após o numero ser adicionado
        atualizarListaNumeros(); // chama a função de atualizar lista (feita abaixo)
    }
});
// evento para o botão anonimo
document.getElementById("ordenar").addEventListener("click", function () {
    const numerosOrdenados = [...numeros].sort((a, b) => a - b); //cria copia da matriz e ordena os numeros de forma crescente (.sort()) comparando através da função a, b => a - b
    exibirNumerosOrdenados(numerosOrdenados); // função para exibir os numeros ordenados
});

function atualizarListaNumeros() {
    const listaNumeros = document.getElementById("listaNumeros"); // obtenção do elemento HTML e armazena na const listaNumeros
    listaNumeros.innerHTML = ""; //limpa o conteúdo atual do elemento e define 

    for (const numero of numeros) {
        const li = document.createElement("li");  // Para cada número na matriz, é criado um novo elemento HTML  <li> 
        li.textContent = numero; // o li criado é definido como o valor do número atual, colocando o número dentro da lista
        listaNumeros.appendChild(li); // insere o elemento de lista na lista nao ordenada e exibe o numero na pagina 
    }
}

//Exibe os números inseridos de forma ordenada
function exibirNumerosOrdenados(numerosOrdenados) {
    const resultadoOrdenado = document.getElementById("resultadoOrdenado"); //armazena o elemento obtido dentro da variavel
    resultadoOrdenado.innerHTML = ""; //limpa o conteúdo atual e define como uma string vazia
//percorre cada numero no array
    for (const numero of numerosOrdenados) {
        const li = document.createElement("li");
        li.textContent = numero;
        resultadoOrdenado.appendChild(li);
    }
}

clearBtn.addEventListener("click", function (){
    resultadoOrdenado.innerHTML = " ";
    listaNumeros.innerHTML = "";
    numeros = {}
})
