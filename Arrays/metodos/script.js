let item = ["faca", "peneira", "corda", "luva","garfo", "alfinete", "vela", "alcool"];
let numeros = [9,8,6,5,2,1,3,4,7];


//Metodo push() adicionar o próximo item no final da array

item.push("chave-Ingleas")

//Metodo unshift adiciona no inicio do array
item.unshift("fosforo")

// Metodo Pop() remove o ultimo item do array

item.pop()

//Metodo shift ele remove o primeiro item da listas

item.shift()

// Metodo splice() ele remove na posição que você indicar

item.splice(1,1)

// indexof serve para verificar se o está no array, ele busca e retorna a posição do array

console.log(item.indexOf("garfo"))

//Metodo sorte organizar os itens da array em ordem crescente
//Metodo reverse ele reverte os numeros da array
console.log(numeros.sort())
console.log(numeros.reverse())


// Metodo join traz os numeros separados por virgular

numerosSeparados = numeros.join()
console.log(numerosSeparados)
