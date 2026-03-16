<<<<<<< HEAD
class Bicicleta {
    #modelo;
    #marca;
    #cor;
    #velocidade = 0;

setModelo(valor) {
    this.#modelo = valor;
}
getModelo() {
    return this.#modelo;
}
setMarca(valor) {
    this.#marca = valor;
}
getMarca() {
    return this.#marca;
}
setCor(valor) {
    this.#cor = valor;
}
getCor() {
    return this.#cor;
}
setVelocidade(valor) {
    if (valor <= 35 && valor >= 0) {
    this.#velocidade = valor;
    } else {
    console.log("Velocidade inválida! Máximo permitido é 35 km/h.");
}
}
getVelocidade() {
    return this.#velocidade;
    }
}
const bike = new Bicicleta();
bike.setModelo("Vrum vrum");
bike.setMarca("Caloi");
bike.setCor("Preta");
bike.setVelocidade(32);
console.log("Modelo: " + bike.getModelo());
console.log("Marca: " + bike.getMarca());
console.log("Cor: " + bike.getCor());
console.log("Velocidade: " + bike.getVelocidade() + " km/h");
bike.setVelocidade(40);
=======
class Bicicleta {
    #modelo;
    #marca;
    #cor;
    #velocidade = 0;

setModelo(valor) {
    this.#modelo = valor;
}
getModelo() {
    return this.#modelo;
}
setMarca(valor) {
    this.#marca = valor;
}
getMarca() {
    return this.#marca;
}
setCor(valor) {
    this.#cor = valor;
}
getCor() {
    return this.#cor;
}
setVelocidade(valor) {
    if (valor <= 35 && valor >= 0) {
    this.#velocidade = valor;
    } else {
    console.log("Velocidade inválida! Máximo permitido é 35 km/h.");
}
}
getVelocidade() {
    return this.#velocidade;
    }
}
const bike = new Bicicleta();
bike.setModelo("Vrum vrum");
bike.setMarca("Caloi");
bike.setCor("Preta");
bike.setVelocidade(32);
console.log("Modelo: " + bike.getModelo());
console.log("Marca: " + bike.getMarca());
console.log("Cor: " + bike.getCor());
console.log("Velocidade: " + bike.getVelocidade() + " km/h");
bike.setVelocidade(40);
>>>>>>> 22f1eeffe9d34595101221229caaaa202c77ac4b
console.log("Velocidade final: " + bike.getVelocidade() + " km/h");