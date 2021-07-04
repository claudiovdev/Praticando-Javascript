let soma = function(...number) {
    let rest = 0
    for(n of number){
        rest += n
    }
    return rest;
}

numeros = soma

console.log(numeros (1,3,4,5))