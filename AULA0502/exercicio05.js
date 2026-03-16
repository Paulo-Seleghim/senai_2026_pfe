const prompt = require('prompt-sync')();
let ano = Number(prompt("Digite o ano em que você nasceu: "));
let idade = 2026 - ano;
console.log("Você tem " + idade + " anos de idade");