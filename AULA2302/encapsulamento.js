class Pessoa{
    nome; //atributo publico
    #cpf = '05916786458'; //atributo privado

    //metodos g
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}
const estudante = new Pessoa();
estudante.nome = 'Lio';
estudante.setCpf(2222222220);
console.log('O cpf é: ' + estudante.getCpf());
console.log(estudante.nome);