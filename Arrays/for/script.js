// PRATICANDO COM ARRAYS

// Criando listas

// Criamos 3 Objetos abaixo
let mariana = {
    nome: "Mariana da Silva",
    cursos: ["Anasile de Algorítimo", "Estrutura de Dados", "Introdução a computação"],
    isActive: true,
    pontos: 2000,
};

let silvia = {
    nome: "Silvia Andrade",
    cursos: ["HTML", "Estrutura de Dados", "JavaScript"],
    isActive: true,
    pontos: 2000,
}

let laura = {
    nome: "Laura Vermerman",
    cursos: ["Anasile de Algorítimo", "Estrutura de Dados", "Introdução a computação"],
    isActive: false,
    pontos: 2000,
}

// Agora vou criar um Array chamado estudantes e vou adicionar os objetos acima!
let estudantes = [mariana, silvia, laura];

// agora vou fazer um fazer um for para passar por todos os estudantes e imprimir na tela a informação que eu quiser.

for(estudante of estudantes){
   // console.log(estudante)
// aqui eu imprimo na tela todas as estudantes com suas propriedades.
}

// Abaixo irei fazer um forEach em estudantes mostrarei as estudantes que estão ativas!

estudantes.forEach((el)=>{
    if(el.isActive === true){
        //console.log("A estudantes: " + el.nome + " está ativa")
    }
})

// abaixo irei mostrar todos os cursos que as alunas estão cursando.
// para isso eu terei que fazer um for dentro de for, pois é outro array.
// Observação: eu faço o primeiro console.log() dentro do primeiro for para ele nao reptir toda hora o nome da estudante para cada curso


for(estudante of estudantes){
    console.log("A estudante " + estudante.nome + " está cursando");
    for(cursos of estudante.cursos){
        console.log(cursos)
    }
    console.log("-------------------")
}

//Somando abaixo todos os pontos das estudantes

//Primeiro vamos criar uma variavel com falor 0
// Em seguida faremos um for nas estudantes e faremos a somas dos pontos.

valorSomado = 0;
for(estudante of estudantes){
    valorSomado += estudante.pontos;
}
console.log(valorSomado)