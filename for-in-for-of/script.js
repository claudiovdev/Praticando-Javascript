const aluno={nome:"Bruno", sobrenome:"Campos"};
const notas={n1:80,n2:75,n3:92,n4:85};
const info={...aluno,...notas};

let notas2 = [100,80,75,30,64,47,98,81,60]

for(var dado in aluno){
    console.log(dado);
}
/* No exemplo acima eu adiciono as propriedade de aluno para a variaver criada dentro do for */


for(var n of notas2){
    console.log(n)
}

/* Na opção acima o for of adiciona a variavel os numeros que foram adicionados no objeto e não as posições */