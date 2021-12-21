//criar uma classe Professor com os atributos
//nome string
//idade number
//qtdAlunos number

//metodos fazerChamada que recebe por parametro o nome do aluno e retorna (presença verificada)
//calculaMedia recebe 3 notas e devolve a media 

//apos criar a classe instanciar 1 objeto da classe Professor para atribuir os valores
//atualizar algum valor de atributodo professor
//utilizar os metodos do professor

class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos
    }

    fazerChamada(nomeAluno) {
        return "Bom dia, ok, confirmada sua presença " +nomeAluno+" ok"
    }

    calcularMedia(nota1,nota2,nota3) {
        return (nota1+nota2+nota3)/3
    }
}

let professor1 = new Professor("Marcelo",36,26)
console.log(professor1);

professor1.idade=46
professor1.qtdAlunos=29

console.log(professor1.fazerChamada("Fulano"));

let media = professor1.calcularMedia(6,7,9)
console.log(media);

//instanciem outro professor e utilizem seus atributos e metodos
//ler valores separadamente, atualizar valores e ver o antes e o depois, fazer mais de uma chamada
//calcular media

let professor2= new Professor("Wandy",56,32)
console.log(professor2);

professor2.idade=62

console.log(professor2.fazerChamada("Juliana"));
console.log(professor2.fazerChamada("Joao"));
console.log(professor2.fazerChamada("Patricia"));

let media=professor2.calcularMedia(6,7,9)
console.log(media);

let media=professor2.calcularMedia(8,9,6)
console.log(media);
