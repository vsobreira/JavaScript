import * as module from "./functionsCalc.mjs";
import readlineSync from 'readline-sync';

do {
    var num1 = Number(readlineSync.question("Digite um número: "));
    
    var num2 = Number(readlineSync.question("Agora digite outro número: "));
    
    var operacao = readlineSync.question("Agora digite a operação desejada" + "'+' para somar," + "'-' para subtrair," + "'/' para dividir," + "'*' para multiplicar," + "'**' para exponenciar," + "e para sair aperte 'Q'");

    console.log("Resposta: ");
    switch (operacao) {
        case "+":
            console.log(module.soma(num1,num2));
            break;
        case "-":
            console.log(module.subtracao(num1,num2));
            break;
        case "/":
            console.log(module.divisao(num1,num2));
            break;
        case "*":
            console.log(module.multiplicacao(num1,num2));
            break;
        case "**":
            console.log(module.exponenciacao (num1,num2));
            break;
        case "Q":
        case "q":
            console.log("Você pediu para sair.");
            break;
        default:
            console.log("Operação não reconhecida.")
            break;
    }

} while (!isNaN(num1) && !isNaN(num2) && operacao.toUpperCase() !== "Q");

console.log("Fechando calculadora.");