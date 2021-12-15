console.log("deu certo exercicio 2");

document.write("que legall")
document.write("<br> criar um vetor de numeros e solicitar o ususario uma quantidade d numeros")
document.write("<br> conforme a quantidade, repetir a captura numero a numero até acabar o laço")
document.write("<br> depois que o laço acabar, percorrer a lista para determinar qual o maior e o menor numero")

let numeros = []
let quantidade
let numero 

quantidade = Number(prompt("informe quantos numeros deseja capturar"))


for (let contador=1;contador<=quantidade;contador++){
    numero = Number(prompt("informe o "+contador+ "numero"))
    numeros.push(numero)
}
console.log(numeros);

let menor
let maior

for(let contador=0;contador<numeros.length;contador++){
    if(contador==0){
        menor=numeros[contador]
        maior=numeros[contador]
    }else{

        if(numeros[contador]< menor){
            menor = numeros[contador]
        }
        if(numeros[contador]>maior){
            maior = numeros[contador]
        }
    }

}

document.write("<br> o menor numero é "+menor)
document.write("<br> o maior numero é "+maior)