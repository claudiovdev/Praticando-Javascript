let num = [0,1,2,3,4,5];

let soma = num.reduce((n1,n2)=>{
    console.log(n1 + ' - ' + n2)
    return n1+n2;
    console.log('------------------')
})

let pessoas = [
    {
        nome: 'Bruno',
        idade: 40
    },
    {
        nome: 'Scarlindo',
        idade: 30
    }, 
    {
        nome: 'Fatsgirda',
        idade: 25
    }, 
    {
        nome: 'Glebsonaldo',
        idade: 18
    }, 

]

let nome = pessoas.reduce((p1,p2)=>{
    p1.push(p2.nome)
    return p1
}, [])

let idade = pessoas.reduce((id1,id2)=>{
    id1.push(id2.idade)
    return id1
}, []);

console.log(nome)
console.log(idade)
console.log(soma)