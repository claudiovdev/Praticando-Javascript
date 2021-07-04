// Arrou function = Função de seta
// (parametros) =>  expressão

const soma = (p1,p2) => {
    return p1+p2;
}

const par = (num) => {
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(soma(2,4))

console.log(par(10))
