let meuSet = new Set([1,2,3])
// para adicionar valores no set nos usamos add

meuSet.add(4)
meuSet.add(5)
meuSet.add(6)
meuSet.add(7)
// ao adicionar um numero já existente ele ignora
meuSet.add(4)


for(n of meuSet){
    console.log(n)
}