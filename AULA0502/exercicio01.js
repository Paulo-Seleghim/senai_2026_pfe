const prompt = require('prompt-sync')();
let nota_aluno = Number(prompt("Digite sua primeira nota: "));
let divisao = nota_aluno / 2;
let pontuacao = divisao*divisao;
console.log("A pontuação do aluno é: " + pontuacao);