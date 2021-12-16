console.log("deu certo");

let nome = capturaTexto("informe seu nome")//usando a função captura texto passando o parametro "frase"
let idade = capturaNumeroespecial("informe sua idade")
let anoAtual = capturaNumeroespecial("informe o ano atual")
let cidade = capturaTexto("informe sua cidade")

console.log("oi, meu nome é "+nome+" , tenho "+idade+" anos e estou no ano de "+anoAtual+" , alias estou em "+cidade);


meApresentar()//chamada de função
meApresentar()
console.log("quero saber o retorno dssa função "+retornoInteiro() );
retornoInteiro()

//declaração da função
//tem palavra reservadaa function
//tem nome da fução
//() gaveta de parametros
//{} escopo tudo que será executado
//conteudo que eu quero apresentar
function meApresentar(){
    let nome= "maria"
    let idade= "18"

    console.log("oi meu nome é "+nome+" e tenho "+idade+" anos");
}

function retornoSimples(){
    return "TA AQUI O QUE VC PRECISA"
}

function retornoInteiro(){
    return 10
}

//quando eu chamo essa função devo informar um valor para esse parametro
function capturaTexto(texto){
    let temporario=prompt(texto)
    return temporario
}

// nao preciso passar parametros pois nao tem
function capturaNumero(){
    let temporario= Number(prompt("informe um numero"))
    return temporario  
}

function capturaAno(){
    let temporario= Number(prompt("informe seu ano atual"))
    return temporario
}

//essa função recebe parametro, onde a função capturaNumero nao recebia,
//dessa forma a função se torna dinamica pois é parametrizavel
function capturaNumeroespecial(frase){
    let temporario= Number(prompt(frase))
    return temporario
}



