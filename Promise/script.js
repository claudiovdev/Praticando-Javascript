function contar(n){
    let cont = 0
    for(let i = 0 ; i < n; i++){
        cont++;
    }
    return cont;
}

function contart(n){
    let cont = 0
    let t = setTimeout(()=>{
        for(let i = 0 ; i < n; i++){
            cont++;
        }
    },2000)
    return cont;
}

function contarT(n){
    let cont = 0
    let t = setTimeout(()=>{
        for(let i = 0 ; i < n; i++){
            cont++;
        }
    },2000)
    return cont;
}
/* -----------------------  Exemplo de Função Assincrona  -----------------------*/

function contarPT(n){
    let cont = 0
    let p = new Promise((resolve, rejected)=>{
        let t = setTimeout(()=>{
            for(let i = 0 ; i < n; i++){
                cont++;
            }
            if(cont == n){
                resolve(cont);
            }else{
                rejected('ERRO')
            }
        },2000)
    })
    return p;
}


/* ----------------------- Próximo exemplo -----------------------*/

function somarNumero(n1,n2){
    let p = new Promise((aceito,rejeitado)=>{
        if(n1 >= 0 && n2 >= 0){
            aceito(n1+2)
        }else{
            rejeitado('ERRO')
        }
    })
    return p
}

console.log(contar(1000))

console.log(contarT(10))
    

contarPT(10)
    .then(sucesso => console.log('sucesso ' + sucesso))
    .catch(erro => console.log(erro))


//somarNumero(-3,4)
  //  .then(sucesso => console.log('sucesso ' + sucesso))
    //.catch(erro => console.log(erro))