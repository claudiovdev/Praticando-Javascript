let num = [1,4,9,16,25]

let raiz = num.map(Math.sqrt)

for(r of raiz)
console.log(r)




let dobros = num.map((n)=>{
    return n*2
})

console.log('-----------------------------')

for(let i = 0; i < 5; i++){
    console.log('Número:' + num[i] + ' - Dobro ' + dobros[i])
}
