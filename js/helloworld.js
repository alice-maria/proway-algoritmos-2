
let nome= "Maria Alice" // variavel do tipo string
let idade=18            // variavel do tipo number
let distanciaProway=0.3 // variavel do tipo number
let qualquer= ""

console.log("Ola, meu nome é ",nome, " e tenho ",idade," anos e moro a ",distanciaProway,"km de distancia daqui");

//let bairro=prompt("informe o seu bairro")
//alert(bairro)


if(idade=18){
    console.log("voce é maior de idade?");
}else{
    console.log("voce é de menor?");
}

if(idade>15){
    console.log("adulto");
}else{
    console.log("criança");
}

//ESCOLHA

console.log("escolha uma opcao");
console.log("1- primavera");
console.log("2-verao");
console.log("3-outono");
console.log("4-inverno");
let opcao=3

switch(opcao){
case 1:
    console.log("vc escolheu primavera");
    break
case 2:
    console.log("vc escolheu verao");
    break
case 3:
     console.log("vc escolheu outono");
    break
case 4:
    console.log("vc escolheu inverno");
    break
default:
    console.log("vc escolheu nada");
    break
}

//PARA

let quantidade=15

for(let contador=1; contador<=quantidade ; contador++){
    console.log("repetindo pela ",contador,"x");
}


for(let variavel=1; variavel<=5; variavel+=10){
    console.log("repetindo pela ",variavel,"x");
}

// let resposta
// do{
//    let resposta=prompt("tinha 2 cachorros, pita e repita, pita morreu, quem ta vivo?")
// }while(resposta=="repita");

//comentar tudo ctrl K C
//descomentar ctrl K U

