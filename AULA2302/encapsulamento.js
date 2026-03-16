<<<<<<< HEAD
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
=======
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
>>>>>>> 22f1eeffe9d34595101221229caaaa202c77ac4b
console.log(estudante.nome);