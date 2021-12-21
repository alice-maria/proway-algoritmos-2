//a classe Pessoa agrega tudo que foi identificado como COMUM entre as classes Aluno, Professor...
class Pessoa{
    //esses atributos nao precisam mais ser declarados em cada classe que herde de Pessoa
    nome
    idade
    altura
    salario
    //basta repassar os parametros que vem no NEW para o contrutor da SUPER CLASSE

    constructor(nome,idade,altura,salario){
        this.nome= nome
        this.idade=idade
        this.altura=altura
        this.salario=salario
    }
}

class Aluno extends Pessoa{
    //nome
   // idade
    matricula

    //construtor utilizado no NEW que recebe os parametros para inicializar
    //os atributos no novo objeto do tipo Aluno
    constructor(nome,idade,matricula){
        //para cada parametro inicializo respectivamente o atributo do objeto
        //o (this.) é utilizado para identificar que o atributo é do objeto
        //isso ajuda a não confundir parametro com atributo
        // this.nome=nome
        // this.idade=idade
        super(nome,idade)
        this.matricula=matricula
    }

    meApresentar(){
        return "oi meu nome é "+this.nome+" tenho "+this.idade+" anos e minha matricula é"+this.matricula
    }

}


    //professor
    //nome,idade,qtdAlunos
    //meApresentar

class Professor extends Pessoa{
    // nome
    // idade
    qtdAlunos

    constructor(nome,idade,qtdAlunos,altura,salario){
        // this.nome=nome
        // this.idade=idade
        //o super deve ser chamado primeiro para garantir que a SUPER CLASSE faça o seu construtor primeiro
        super(nome,idade,altura,salario)
        //depois inicializo meus atributos especificos da classe Professor
        this.qtdAlunos=qtdAlunos
    }

    meApresentar(){
        return "OI meu nome é "+this.nome+",tenho "+this.idade+"anos dou aula de portugues com "+this.qtdAlunos+"alunos"
    }
}

let professor1= new Professor("Jose",39,15,1.8,20000)
professor1.altura=1.87
professor1.salario=250000

console.log(professor1);
console.log(professor1.nome);
console.log(professor1.idade);
console.log(professor1.qtdAlunos);


//O comando extends + nome da classe, garante a herança de atributos e metodos da SUPER CLASSE
//OS ATRIBUTOS SAO HERDADOS DA OUTRA CLASSE (atributos iguais)
class Diretor extends Pessoa{
    //esse atributo só existe na classe diretor 
    //nao preciso informar nome e idade novamente aqui
    qtdProfessores

    //o construtor tem o objetivo de preencher os valores antes de gerar um objeto do tipo Diretor
    //por isso preciso informar nome e idade no NEW porem devo repassar esses valores para o construtor
    //da super classe ou CLASSE PAI
    constructor(nome,idade,qtdProfessores){
        //os atributos herdados repasso para o construtor dar SUPER CLASSE
        super(nome,idade)
        this.qtdProfessores=qtdProfessores
        
    }
}

let paulo = new Diretor("Paulo Kano",80,30)
console.log(paulo);
