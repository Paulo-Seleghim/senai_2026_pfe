const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');

corpo.style.backgroundColor = '#b00000';
corpo.style.color = 'white';
titulo.textContent = 'Adicionando elementos via JS';
container.style.width = '94%';
container.style.marginc= '0 auto';
container.style.backgroundColor = '#b46000';

let anuncio = '<h2>Curso dev com IA - Novidade!!!</h2>';
container.innerHTML += anuncio;