class livro{
    //atributos
    modelo = 'Capa dura';
    paginas = '300 páginas';
    cor = 'Azul';
    ano = 2025;
    preco = '20 reais';
    nome = 'Kisuco & Kuseco';
    genero = 'Romance';
    autor = 'Ricardão';

    //metodos
    ler(){
        console.log('Estou lendo!');
    }
    mostrar(){
        console.log('O livro é: ' + this.modelo + ' ' + this.paginas + ' ' + this.ano + ' ' + this.cor + ' ' + this.preco + ' ' + this.nome + ' ' + this.genero + ' ' + this.autor);
    }
}
const calhamaco = new livro();//instanciar a class = criar objeto
calhamaco.ler(); //utilizar métodos
calhamaco.mostrar();