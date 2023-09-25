//array para armazenar frutas
const frutas = [];

//obter elementos do HTML
const fruta = document.getElementById('fruta');
const adicionarFrutas = document.getElementById('Add');
const clearBtn = document.getElementById('clearBtn')
const lista = document.getElementById('listFrutas')

adicionarFrutas.addEventListener('click', function () {
    const novaFruta = fruta.value.toLowerCase();
   
    // Verifica se a fruta já está na lista
    if (!frutas.includes(novaFruta)) {
        frutas.push(novaFruta);
        var size = frutas.length;
        var itens = '';

        for (let i = 0; i < size; i++) {
            itens += `<li>${frutas[i]}</li>`;
        }

        const ulElement = document.querySelector('ul');
        ulElement.innerHTML = itens;

        // Limpar o conteúdo do input após a adição da fruta
        fruta.value = "";
    } else {
        alert("Essa fruta já está na lista!");
    }
});

clearBtn.addEventListener("click", function (){
    lista.innerHTML = " ";
})