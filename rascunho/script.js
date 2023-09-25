// Array para armazenar os contatos cadastrados
var contatos = [];

// Cadastrar um contato
function cadastrarContato() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    // Verificar se o email ou telefone já estão cadastrados
    for (var i = 0; i < contatos.length; i++) {
        if (contatos[i].email === email || contatos[i].telefone === telefone) {
            alert("Email ou telefone já cadastrados.");
            return;
        }
    }

    // Adicionar o contato ao array
    contatos.push({ nome: nome, email: email, telefone: telefone });

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";

    // Atualizar a tabela de contatos
    atualizarTabela();
}

// Atualizar a tabela de contatos
function atualizarTabela() {
    var tabela = document.getElementById("tabelaContatos").getElementsByTagName('tbody')[0];
    tabela.innerHTML = "";

    for (var i = 0; i < contatos.length; i++) {
        var row = tabela.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = contatos[i].nome;
        cell2.innerHTML = contatos[i].email;
        cell3.innerHTML = contatos[i].telefone;
        cell4.innerHTML = '<button onclick="editarContato(' + i + ')">Editar</button> ' +
                        '<button onclick="excluirContato(' + i + ')">Excluir</button>';
    }
}

// Função para editar um contato
function editarContato(index) {
    var contato = contatos[index];
    document.getElementById("nome").value = contato.nome;
    document.getElementById("email").value = contato.email;
    document.getElementById("telefone").value = contato.telefone;
    contatos.splice(index, 1); // splice é usado para remover elementos de uma matriz.
    atualizarTabela();
}

// Função para excluir um contato
function excluirContato(index) {
    contatos.splice(index, 1); // Remove o contato da lista
    atualizarTabela();
}

// Inicializa a tabela de contatos
atualizarTabela();