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

carro1.setCombustivel = 100;
console.log(carro1.getCombustivel);
carro1.desligar()
carro1.info()
