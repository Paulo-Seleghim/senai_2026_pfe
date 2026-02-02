const prompt = require('prompt-sync')();

let caractere = prompt("Digite um caractere de operação matemática: ")
const somar = (num1,num2) => {
    if (caractere == '+'){
        console.log('A soma dos valores é: '  + (num1 + num2));
    }else if (caractere == '-'){
        console.log('A subtração dos valores é: ' + (num1 - num2));
    }else if (caractere == '*'){
        console.log('A multiplicação dos valores é: ' + (num1 * num2));
    }else if (caractere == '/'){
        console.log('A divisão dos valores é: ' + (num1 / num2));
    }else {
        console.log("ERRO");
    }
}

let num1 = Number(prompt("Digite um valor: "));
let num2 = Number(prompt("Digite outro valor: "));

somar(num1, num2);