const prompt = require('prompt-sync')();
let valor = Number(prompt('Digite o valor do produto: '));
console.log('----CUPONS DE DESCONTO----');
console.log('1 - BRONZE 5%');
console.log('2 - PRATA 10%');
console.log('3 - OURO 15%');
let cupom = prompt('Escolha um cupom: ');