class Carro{
    constructor(tpCarro,tpcombustivel){
      this.tipoCarro = tpCarro
      this.quantidadeCombustivel = 100;
      this.ligado = false;
      this.tipoDeCombustivel = tpcombustivel;
    }

    info(){
        console.log("Quantidade de Combustivel: " + this.quantidadeCombustivel)
        console.log("Ligado: " + (this.ligado ? "Sim" : "Não"))
        console.log("Tipo de Combustivel: " + this.tipoDeCombustivel)
        if(this.tipoCarro == 1){
            console.log("Tipo de Carro: Passeio")
        }else if(this.tipoCarro == 2){
            console.log("Tipo de Carro: transporte")
        }else{
            console.log("Tipo de Carro: Combate")
        }
        console.log("--------------")
    }

    set setligado(tipo){
        this.ligado = tipo;
    }
    get getligado(){
        return this.ligado;
    }
    
    set setCombustivel(valor){
        if(valor < 0 || valor > 100){
            this.quantidadeCombustivel = "Error";
            alert('Valor invalido!!!')
        }else{
            this.quantidadeCombustivel = valor
        }
    }

    get getCombustivel(){
        return this.quantidadeCombustivel;
    }
 
}

class CarroCombate extends Carro{
    constructor(ptTiro){
        super(3,1)
        this.tiros = 1000;
        this.potenciaTiro = ptTiro;
        this.blindagem = 100
    }

    info(){
        console.log("Quantidade de tiro: " + this.tiros)
        console.log("Potência do tiro: " + this.potenciaTiro)
        console.log("Nivel de Blindagem: " + this.blindagem + "%")
        super.info()
    }
}

Carro.prototype.potencia = 100
Carro.prototype.velocidade = 60
Carro.prototype.velocidadeMaxima = 120

Carro.prototype.info2=function(){
    this.info()
    console.log("potencia: " + this.potencia)
    console.log("Velocidade: " + this.velocidade)
    console.log("Vel Maxima: " + this.velocidadeMaxima)
    console.log("------------")
}


let carro1 = new Carro(2,2)
let carro2 = new CarroCombate(100)




carro1.info2()

carro2.info2()



