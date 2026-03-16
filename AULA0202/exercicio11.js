const prompt = require('prompt-sync')();
let valor = Number(prompt('Digite o valor do produto: '));
console.log('----CUPONS DE DESCONTO----');
console.log('1 - BRONZE 5%');
console.log('2 - PRATA 10%');
console.log('3 - OURO 15%');
let cupom = prompt('Escolha um cupom: ');
if(cupom == 1){
    console.log('O valor do produto com desconto BRONZE é: ' + (valor - (valor * 0.05)));
} else if(cupom == 2){
    console.log('O valor do produto com desconto PRATA é: ' + (valor - (valor * 0.10)));
} else if(cupom == 3){
    console.log('O valor do produto com desconto OURO é: '(valor - (valor * 0.15)));
} else{
    console.log('O valor do produto sem desconto é: ' + valor);
}