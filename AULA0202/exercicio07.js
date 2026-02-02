const prompt = require('prompt-sync')();
let num1 = Number(prompt("Digite um valor: "));
let num2 = Number(prompt("Digite outro valor: "));
if (num1 > num2) {
    console.log('O primeiro valor é o maior!');
} else if (num1 < num2) {
    console.log('O segundo valor é o maior!');
} else {
    console.log("Ambos os valores são iguais!");
}
