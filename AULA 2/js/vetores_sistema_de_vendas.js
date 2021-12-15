//precisamos catalogar todos os veiculos e seus valores
//para isso precisamos de 2 vetores, um para os nomes  e outro para os valores
//cada posição sera respectivamente nome e valor
//a quantidade de veiculos é indefinida até que ele informe que não deseja continuar com o cadastro
//apos o cadastro exibir o nome e o valor do primeiro veiculo e do ultimo

//primeiro é lista[0]
//ultimo lista [lista.length-1]

let nomes= []
let valores= []
let resposta
let nome
let valor 

do {
    nome=prompt("informe o nome do veiculo......")
    nomes.push(nome)

    valor= Number( prompt("informe o valor do veiculo "+nome))
    valores.push(valor)

    resposta=prompt("deseja continuar S/N??")
} while (resposta == S || resposta == s);

alert("o primeiro veiculo foi "+nomes[0]+" custando RS "+valores[0])
alert("o primeiro veiculo foi "+nomes[nomes.length-1]+" custando RS "+valores[valores.lenght-1])



