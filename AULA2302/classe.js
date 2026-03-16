<<<<<<< HEAD
class Carro{
    //atributos
    modelo = 'S10 cabine dupla';
    marca = 'Chevrolet';
    ano = 2025;
    preco = 200000;

    //metodos
    mover(){
        console.log('Estou me movendo!');
    }
    mostrar(){
        console.log('O carro é: ' + this.modelo + ' ' + this.marca + ' ' + this.ano + ' ' + this.preco);
    }
}
const caminhonete = new Carro();//instanciar a class = criar objeto
caminhonete.mover(); //utilizar métodos
=======
class Carro{
    //atributos
    modelo = 'S10 cabine dupla';
    marca = 'Chevrolet';
    ano = 2025;
    preco = 200000;

    //metodos
    mover(){
        console.log('Estou me movendo!');
    }
    mostrar(){
        console.log('O carro é: ' + this.modelo + ' ' + this.marca + ' ' + this.ano + ' ' + this.preco);
    }
}
const caminhonete = new Carro();//instanciar a class = criar objeto
caminhonete.mover(); //utilizar métodos
>>>>>>> 22f1eeffe9d34595101221229caaaa202c77ac4b
caminhonete.mostrar();