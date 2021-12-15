/*
criar variaveis para o nome do aluno, as 3 notas e calcular a media (podem usar 3 variaveis para as notas OU 
usar repeticao para a quantidade de notas)
*/

// let nota1=4
// let nota2=8
// let nota3=9
// let media= (nota1+nota2+nota3) / 3

// console.log("Media é", media);
// if(media<7){
//     console.log("reprovado");
// }else{
//     console.log("APROVADO");
// }

// let nota1=Number(prompt("informe a primeira nota do aluno"))
// let nota2=Number(prompt("informe a segunda nota do aluno"))
// let nota3=Number(prompt("informe a terceira nota do aluno"))
// let media= (nota1+nota2+nota3) / 3

// console.log("Media é", media);

let qtdNotas
let nota
let soma

qtdNotas=Number(prompt("informe quantas notas deseja capturar..."))
//variavel temporaria com porto de partida
//condição de permanencia
//incremento ou decremento, aumentando ou diminuind
soma=0
for(let contador=1; contador<=qtdNotas; contador+=1){
    nota= Number(prompt("informe a "+contador+ "nota do aluno"))
    soma= soma+nota //ou soma+=nota
}

let media= (soma)/ qtdNotas
    
alert("Media é"+ media)

if(media < 7) {
    console.log("reprovado");
}else{
    console.log("APROVADO");
}
