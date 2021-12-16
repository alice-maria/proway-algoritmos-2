
capturarNumeros()


function capturarNumeros(acao){
    let nA=promptNumero("informe o primeiro numero")
    let nB=promptNumero("informe o segundo numero")

    //escolher em switch as operações
    switch(acao){
        case "somar":
            console.log("fazer a soma acontecer");
            somar(nA,nB)
            break
        case "subtrair":
            console.log("fazer a subtração acontecer");
            subtrair(nA,nB)
            break
        case "dividir":
            console.log("fazer a divisão acontecer");
            dividir(nA,nB)
            break
        case "multiplicar":
            console.log("fazer a multiplicação acontecer");
            multiplicar(nA,nB)
            break
        default:
            console.log("fazer nada pq nao tem opcao aqui");
            break// para nao invadir o espaço do outro

    }
}

function promptNumero(frase){
    let temporario=Number(prompt(frase))
    return temporario
}

function somar(numeroA,numeroB){
    alert(numeroA+numeroB)
}

function subtrair(numeroA,numeroB){
    alert(numeroA-numeroB)
}

function dividir(numeroA,numeroB){
    alert(numeroA/numeroB)
}

function multiplicar(numeroA,numeroB){
    alert(numeroA*numeroB)
}