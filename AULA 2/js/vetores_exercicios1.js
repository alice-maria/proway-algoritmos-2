console.log("Criar um vetor de gostos pessoais");
console.log("pode criar o vetor ja com valores ou não");
console.log("se não tiver valores sar o push para incluir item a item");
console.log("exibir a lista toda com LOG");
console.log("percorrer a lista para apresnetar cada valor com uma frase");


let gostosPessoais=[ //vetor de gostos
    "ler livros",
    "ir na praia",
    "dormir",
    "comer"
]

console.log(gostosPessoais);

for(let contador=0;contador<=gostosPessoais.length;contador++){
    console.log("gosto muito de "+gostosPessoais[contador]);
}
   
gostosPessoais.push("correr") //usando o push para incluir um novo item
console.log(gostosPessoais);

console.log("OUUUUUUUUUUUU");

for(let contador=1;contador<=gostosPessoais.length;contador++){
    console.log("gosto muito de "+gostosPessoais[contador-1]);
}

console.log(gostosPessoais[0]);
console.log("o que eu mais gosto é "+gostosPessoais[0]);