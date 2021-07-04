class Carro{
    constructor(marca,modelo,cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = true;
        this.km = 0;
        this.combustivel = 10;
    }

    info(){
        console.log("marca: " + this.marca)
        console.log("modelo: " + this.modelo)
        console.log("cor: " + this.cor)
        console.log("ligado: " + (this.ligado ? "sim" : "Não"))
        console.log("km: " + this.km)
        console.log("combustivel: " + this.combustivel + "%")
        console.log("--------------")
    }

    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
}

let carro1 = new Carro("Honda", "HRV", "Prata")
carro1.desligar()
carro1.info()
