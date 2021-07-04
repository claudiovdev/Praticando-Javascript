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

/*
* Vamos usar este objeto carro1 criado como exemplo
* A primeira ação que eu faço é criar uma variavel e insiro nela o meu objeto Carro que já tem suas própriedades definidas
* em seguida eu adiciono nos parametros os atributos que eu quero.
* Olhando para a classe lá de cima eu consigo emtender que eu criei uma função de info() que vai retornar na tela todas informaões que eu coloquei na minha classe Carro e ela já vai vir com os parametros que eu passar
* em seguida eu crio mais 2 funções que seria ligar() e desligar() que elas simplismente irão retornar true e false para a variavel ligado ultilizando o this para poder fazer está comunicação
*
*
*
*/
let carro1 = new Carro("Honda", "HRV", "Prata")
carro1.desligar()
carro1.info()
