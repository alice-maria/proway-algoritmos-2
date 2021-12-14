/* solicite uma quantidade definida de numeros a serem capturados, para cada captura deve verificar qual o maior
numero e o menor numero, apos a captura dos numeros exibir o maior e a media geral desses numeros
*/

let qtdNumeros
let media
let maior
let menor
let soma 

qtdNumeros=Number(prompt("quantos numeros voce gostaria de solicitar?"))
for(let contador=1;contador<= qtdNumeros;contador+=1){
    let qtdNumero=Number(prompt("informe o"+contador+"numero qualquer..."))

    if(contador==1){
        menor=qtdNumeros
        maior=qtdNumeros
    }else{

        if(qtdNumeros<menor){
            menor=qtdNumeros
        }
        if(qtdNumeros>maior){
            maior=qtdNumeros
        }
    
    }   
}

soma=0

media= soma / qtdNumeros

alert("menor "+menor)
alert("maior "+maior)
alert("media "+media)
