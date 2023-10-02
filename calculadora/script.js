//Obter os elementos HTML através do "document.querySelector"
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");


//Essa parte foi feita totalmente consultando video aulas do Youtube (parte orientada a objetos)
class Calculator {
    constructor(previousOperationText, currentOperationText) { //Função constructor para inicializar propriedades passadas dentro do parênteses 
        this.previousOperationText = previousOperationText; //valor impresso na tela
        this.currentOperationText = currentOperationText; //valor impresso na tela
        this.currentOperation = ""; //valor que está sendo digitado
    }

    //método que aguarda um dígito para mostrar no visor
    addDigit(digit) {
        console.log(digit);
    //checar se já há um ponto na operação 
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
        return;
    }

        this.currentOperation = digit;
        this.updateScreen(); //método responsável para atualizar a tela
    } 

    // método para processar todas as operações da calculadora
    processOperation(operation) {
        // checar se o valor current está vazio
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            //mudar operação
            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }

        // pegar valores que já foram e que estão sendo digitados
        let operationValue;
        let previous = +this.previousOperationText.innerText.split(" ")[0]; //utilizando o "+" para converter valor inserido por número
        let current = +this.currentOperationText.innerText;


        switch (operation) {
            case "+":
              operationValue = previous + current;
              this.updateScreen(operationValue, operation, current, previous);
              break;
            case "-":
              operationValue = previous - current;
              this.updateScreen(operationValue, operation, current, previous);
              break;
            case "*":
              operationValue = previous * current;
              this.updateScreen(operationValue, operation, current, previous);
              break;
            case "/":
              operationValue = previous / current;
              this.updateScreen(operationValue, operation, current, previous);
              break;
            case "DEL":
              this.processDelOperator();
              break;
            case "CE":
              this.processClearCurrentOperator();
              break;
            case "C":
              this.processClearOperator();
              break;
            case "=":
              this.processEqualOperator();
              break;
            default:
              return;
          }
        }

    //método para mudar os valores na tela
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
      ) { //setar esses elementos como inicialmente nulos
        
        if (operationValue === null) { //Se o valor for nulo, adicionar o valor current na tela
            this.currentOperationText.innerText += this.currentOperation;
        } else { //Se o valor não for nulo, a tela será atualizada com uma operação diferente 
            if (previous === 0) {
                operationValue = current;
            }
        //Adicionar o valor current para o valor de previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }

    //Mudar operação matemática
    changeOperation(operation) {
        const mathOperations = ["*", "-", "+", "/"];
    
        if (!mathOperations.includes(operation)) {
          return;
        }
    
        this.previousOperationText.innerText =
          this.previousOperationText.innerText.slice(0, -1) + operation;
      }
    
      // Delete a digit
      processDelOperator() {
        this.currentOperationText.innerText =
          this.currentOperationText.innerText.slice(0, -1);
      }
    
      // Clear current operation
      processClearCurrentOperator() {
        this.currentOperationText.innerText = "";
      }
    
      // Clear all operations
      processClearOperator() {
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
      }
    
      // Process an operation
      processEqualOperator() {
        let operation = this.previousOperationText.innerText.split(" ")[1];
    
        this.processOperation(operation);
      }
    }

    const calc = new Calculator(previousOperationText, currentOperationText); //criada um instância calculator

//Inicialiar os eventos aos botões da calculador 
buttons.forEach((btn) => { //utilizando o forEach é possível acessar cada um dos botões e chamá-los invidualmente através btn
    btn.addEventListener("click", (e) => { //dentro de cada btn é chamado um evento. Utilizando o "e" para pegar o objeto do evento
        const value = e.target.innerText; //pega o valor do botão clicado pelo usuário
    
    //Se o valor for um número ou um ponto, é feito um processamento, se não, é uma operação e então será outro processamento
    if (+value >= 0 || value === ".") { //aqui o operador de "+" é utilizado para converter o valor recebido para número.
        console.log(value);
        calc.addDigit(value); //tratar os elementos como números
    } else {
        calc.processOperation(value); //tratar os elementos como operação
    }
});
});