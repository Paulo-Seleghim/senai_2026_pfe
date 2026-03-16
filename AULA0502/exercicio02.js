const prompt = require('prompt-sync')();
let idade = prompt("Digite sua idade: ");
if(idade >= 16 && idade < 18){
    console.log("Pode pegar livros, mas é menor de idade");
} else if(idade >= 18){
    console.log("Você já pode pegar livros emprestados");
} else{
    console.log("Você ainda não tem idade para pegar livros");
}