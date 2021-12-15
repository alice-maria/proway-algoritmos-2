
console.log("deu certo");

let nomes=[] //[ ] significa listas, criando um vetor sem itens
console.log(nomes);

let cursos=[ //criando um vetor com varios itens
    "algoritmos 1",
    "algoritmos 2",
    "java fundamentos",
    "fundamentos em html5",
    "typescript"
]

console.log(cursos);
console.log(cursos[1]); // a contagem comeca do 0, entao o 1 é o segundo item da lista

console.log(cursos.indexOf("typescript"));// procurar item na lista, qual posiçao(indexOf)
cursos.splice(0,1)// para deletar um item na lista é nescessario informar a posiçao do item e a quantidade de intens para deletar
//splice() - deleta itens
console.log(cursos);

cursos.splice(2,2)
console.log(cursos);

cursos.push("python")// adicionar itens ao final da lista
console.log(cursos);

cursos.push("angular")
console.log(cursos);

//iniciando o contador com zero pois o indice na lista começa com zero
//enquanto for menor que o tamanho da lista, ou seja tamanho -1
//incremento de 1 em 1
for(let contador=0;contador<cursos.length;contador++){
   console.log("na posição "+contador+" tem o valor = "+cursos[contador]);
}

//iniciando o contador com 1 pq é mais intuitivo fazer a contgem com 1
//mas tenho que ir ate o tamanho da lista
//incremento de 1 em 1
console.log("=============================================================================");

for(let contador=1;contador<=cursos.length;contador++){
    //ajustando o acesso ao valor para localizar o indice correto, pois começa com 0
    //se eu inicio com 1 eu estaria pulando o primeiro item e acesso um item extra que não existe
    console.log("na posição "+contador+" tem o valor = "+cursos[contador-1]);
}