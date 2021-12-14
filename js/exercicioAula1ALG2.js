/* solicite uma quantidade definida de numeros a serem capturados, para cada captura deve verificar qual o maior
numero e o menor numero, apos a captura dos numeros exibir o maior e a media geral desses numeros
*/

let qtdNumeros
let media
let maior
let menor
let soma 

qtdNumeros=Number(prompt("quantos numeros voce gostaria de solicitar?"))

soma=0

for(let contador=1;contador<= qtdNumeros;contador+=1){
    let numero=Number(prompt("informe o"+contador+"numero qualquer..."))
soma+=numero
    if(contador==1){
        menor=numero
        maior=numero
    }else{

        if(qtdNumeros<menor){
            menor=numero
        }
        if(qtdNumeros>maior){
            maior=numero
        }
    
    }   
}


media= soma / qtdNumeros

alert("menor "+menor)
alert("maior "+maior)
alert("media "+media)
