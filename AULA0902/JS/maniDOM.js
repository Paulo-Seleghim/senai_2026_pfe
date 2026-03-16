/*alert('Eu estou aprendendo o DOM e sou um bom aluno(a)')
alert('Eu estou aprendendo o DOM e meu professor é top')*/
let fundo = document.getElementById('corpo');
let fundoPagina = document.querySelector('#corpo');//Seletor ID
//document.querySelector('.corpo')//Seletor CLASS
const titulo = document.querySelector('.titulo');

fundo.style.backgroundColor = '#56aad7';
titulo.style.color = '#ff0000';
titulo.style.fontSize = '58px';
titulo.textContent += ' - SESI Mirandópolis';