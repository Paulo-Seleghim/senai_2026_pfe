//CLASSE JOGADADOR (MÃE)
class Jogador {
    #nome;
    #numero;

    constructor (nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar(){
        return '3x na semana!';
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero;
    }
}

//CLASSE JOGADADOR DE FUTEBOL (FILHA)
class JogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;

    constructor (peDominante, totalGols, nome, numero){
        super (nome, numero);
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    }
    driblar(){
        return 'Tomou uma caneta!';
    }
    fazerGol(quantidadeGol){
        return this.#totalGols +=  quantidadeGol;
    }
    //"SUPER" ACESSA ATRIBUTOS E MÉTODOS DA CLASSE MÃE
    mostrar(quantidadeGol){
        return 'O jogador ' + super.getNome() + ', número ' + super.getNumero() +
        ', com o pé dominante sendo o ' + this.#peDominante + ', tem ' + this.#totalGols + ' gols nesta temporada!';
    }
}

const jogador = new JogadorFutebol('direito', 98, 'Paulo', 9);
jogador.fazerGol(2);
console.log(jogador.mostrar());