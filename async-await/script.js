
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

async function contarPTA(n){
    const r = await contarPT(n)
    console.log(r)

}

contarPTA(10)