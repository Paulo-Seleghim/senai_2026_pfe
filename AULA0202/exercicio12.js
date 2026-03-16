const prompt = require('prompt-sync')();
let altura = Number(prompt('Digite a sua altura: '));
let peso = Number(prompt('Digite o seu peso: '));
let imc = peso / (altura **2)
if(imc < 18.5){
    console.log('Você está abaixo do peso!');
} else if(imc >= 18.5 && imc < 25){
    console.log('Você está com o peso ideal!');
} else if(imc >= 25 && imc < 30){
    console.log('Você está sobrepeso!');
} else if(imc >= 30){
    console.log('Você está obeso!');
} else{
    console.log('ERRO');
}
