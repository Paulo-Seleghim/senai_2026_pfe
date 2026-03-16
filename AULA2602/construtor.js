class Estudante{
    #cpf;
    #ra;

    constructor(nome, ra, cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf;
    }
}
const Noemi = new Estudante('Noemi da Silva', 3333332, 38971536795);
console.log(Noemi);