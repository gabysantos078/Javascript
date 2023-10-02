// Array para armazenar frutas
const frutas = [];

// Obter elementos do HTML
const frutaInput = document.getElementById('fruta');
const adicionarFrutasBtn = document.getElementById('Add');
const clearBtn = document.getElementById('clearBtn');
const lista = document.getElementById('listFrutas');

adicionarFrutasBtn.addEventListener('click', function () {
    const novaFruta = frutaInput.value.trim().toLowerCase();
   
    // Verifica se a fruta já está na lista
    if (!frutas.includes(novaFruta) && novaFruta !== "") {
        frutas.push(novaFruta);
        atualizarListaDeFrutas();
        
        frutaInput.value = ""; // Limpar o conteúdo do input após a adição da fruta
    } else if (novaFruta === "") {
        alert("Por favor, insira o nome da fruta.");
    } else {
        alert("Essa fruta já está na lista!");
    }
});

clearBtn.addEventListener("click", function () {
    frutas.length = 0; // Limpa o array de frutas
    atualizarListaDeFrutas();
});

function atualizarListaDeFrutas() {
    lista.innerHTML = ""; // Limpa a lista existente
    frutas.forEach(function (fruta) {
        const li = document.createElement("li");
        li.textContent = fruta;
        lista.appendChild(li);
    });
}