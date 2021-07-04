function* cores(){
    yield 'vermelho';
    yield 'amarelo';
    yield 'azul';
    yield 'roxo';
    yield 'preto';
    yield 'branco';
}
// Nescessário para para o generator funcionar inserir o yield
const c = cores();

console.log(c.next())

// Quando não usar o for para chamar o construtor é nescessário usar o next()
function* cont(n){
    let c = 0
    while (c<n){
        yield console.log(c)
        c++;
    }
}
const ct = cont(11)
for(let c of ct){
    console.log(c);
}