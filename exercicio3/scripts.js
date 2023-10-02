let produtos = [];
let totalContabil = 0;

// Função para adicionar um produto
function adicionarProduto() {
    const nomeProduto = document.getElementById("nomeProduto").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if (nomeProduto && !isNaN(valor) && !isNaN(quantidade)) {
        const produto = {
            nomeProduto: nomeProduto,
            valor: valor,
            quantidade: quantidade
        };

        produtos.push(produto);

        // Limpa os campos de entrada
        document.getElementById("nomeProduto").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("quantidade").value = "";

        // Atualiza a tabela de produtos
        atualizarTabelaProdutos();

        // Calcula o total contábil
        calcularTotalContabil();
    } else {
        alert("Preencha todos os campos corretamente.");
    }
}

// Função para atualizar a tabela de produtos
function atualizarTabelaProdutos() {
    const tabela = document.getElementById("tabelaProdutos");
    tabela.innerHTML = `
        <tr>
            <th>Nome do produto</th>
            <th>Valor Unitário</th>
            <th>Quantidade</th>
            <th>Ações</th>
        </tr>
    `;

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        tabela.innerHTML += `
            <tr>
                <td>${produto.nomeProduto}</td>
                <td>${produto.valor.toFixed(2)}</td>
                <td>${produto.quantidade}</td>
                <td>
                    <button onclick="editarProduto(${i})">Editar</button>
                    <button onclick="removerProduto(${i})">Remover</button>
                </td>
            </tr>
        `;
    }
}

// Função para editar um produto
function editarProduto(index) {
    const produto = produtos[index];
    document.getElementById("nomeProduto").value = produto.nomeProduto;
    document.getElementById("valor").value = produto.valor;
    document.getElementById("quantidade").value = produto.quantidade;

    produtos.splice(index, 1);
    atualizarTabelaProdutos();
    calcularTotalContabil();
}

// Função para remover um produto
function removerProduto(index) {
    produtos.splice(index, 1);
    atualizarTabelaProdutos();
    calcularTotalContabil();
}

// Função para calcular o total contábil
function calcularTotalContabil() {
    totalContabil = produtos.reduce((total, produto) => total + produto.valor * produto.quantidade, 0);
    document.getElementById("totalContabil").textContent = totalContabil.toFixed(2);
}