const prompt = require('prompt-sync')();
let nota = Number(prompt("Digite uma nota de 0-100: "));
if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60){
    console.log('D');
} else if (nota < 60){
    console.log('F');
}else {
    console.log('ERRO');
}