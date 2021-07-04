function soma(...num){
//Crio a variavel que me retornara o resultado
    let res=0 ;

// crio a segunda variavel que vai me retornar o *num* que é um rest pelo ...num
// num.length me retorna a quantidade de parametros existentes    

    let quantidade = num.length;

/* o for faz enquanto i for menor que a quantidade de parametros existent
ele fará um looping e vai somar o numero que foi passado como parametro
e vai guardar na variavel res o numero passado */
    for(let i = 0; i < quantidade; i++){
        res+=num[i];
    }
    return res;
}

console.log(soma(3,2,5,7,5,4))