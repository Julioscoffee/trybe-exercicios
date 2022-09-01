const readline = require('readline-sync');
const operations = require('./operacoes');

console.log("Calculadora simples de 4 operações");

const num1 = readline.questionInt("Digite o primeiro número: ");
const operation = readline.question("Escolha uma operação: + - * / -> ");
const num2 = readline.questionInt("Digite o segundo número: ");

switch (operation) {
  case "+":
    operations.sum(num1, num2)
    break;
  case "-":
    operations.sub(num1, num2)
    break;
  case "*":
    operations.mul(num1, num2)
    break;
  case "/":
    operations.div(num1, num2)
    break;
  default:
    console.log("Digite uma operação válida...");
}
