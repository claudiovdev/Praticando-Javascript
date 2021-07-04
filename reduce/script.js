let num = [5,2,8,15,30,4,25,18,9];

let novo = num.filter((el)=>{
    return el >= 10
})

//console.log(num)
//console.log(novo)

/* -------------------- Próximo Exemplo -------------------- */

let dados = [
    {
        id:15
    },
    {
        id:0
    },
    {
        id:-10
    },
    {
        id:null
    },
    {
        id:NaN
    },
    {
        id:'undefined'
    },
    {
        id:5.8
    },
    {}
]
    let validos = dados.filter((el)=>{
        if(typeof(el.id)== 'number' && !isNaN(el.id)){
            return true
        }else{
            return false
        }
    })

console.log(dados)
console.log(validos)