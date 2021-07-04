class Carro{
    static alerta = true;
    // Quando definimos que a variavel é static e você tenta fazer alteração em qualquer parte do codigo ela irá mudar para todos! independente de qual objeto você mudar
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
        console.log("Alerta: " + (Carro.alerta ? "sim" : "Não"))
        console.log("--------------")
    }

    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
    // primeiro como seria fazer Set de outra forma

    //setCombustivel(valor){
    //    this.combustivel = valor
    //}

    // Agora abaixo farei o set da formar correta

    set setCombustivel(valor){
        if(valor < 0 || valor > 100){
            this.combustivel = "Error";
            alert('Valor invalido!!!')
        }else{
            this.combustivel = valor
        }
        
        // podemos observar que agora nós não precisamos chamar a função para adicionar o 100, simplismente chamo o objeto carro1 que foi criado e coloco a variavel recebendo o valor que eu quero!!!

        // a diferença é na chamada do metodo eu passo o valor para o metodo como se fosse um atributo

        // o metodo set é usado sempre que eu quiser definir o valor d eum atributo
    }

    // Agora a baixo o metodo Get
    // É usado sempre que noós queremos obter o valor de um atraibutos

    get getCombustivel(){
        return this.combustivel;
    }

}


let carro1 = new Carro("Honda", "HRV", "Prata")
let carro2 = new Carro("VW", "Golf", "Branco")
let carro3 = new Carro("GM", "Camaro", "Preto")
let carro4 = new Carro("Ford", "Mustang", "Vermelho")

carro1.setCombustivel = 100;
console.log(carro1.getCombustivel);
carro1.desligar()
carro1.info()

carro2.setCombustivel = 90;
console.log(carro2.getCombustivel);
carro2.desligar()
carro2.info()

carro3.setCombustivel = 30;
console.log(carro3.getCombustivel);
carro3.desligar()
carro3.info()

carro4.setCombustivel = 80;
console.log(carro4.getCombustivel);
carro4.desligar()
carro4.info()
