console.log("deu certo");

// aluno
//atributos = variaveis(5)
//nota number
//nome string
//idade number
//matricula
//senha
//
//metodos = funcoes sem o comando function
//conversar(ouviu) --> return reposta
//responderChamada(professor) --> "professor, MEU_NOME presente" 
//meApresentar() -->"oi meu nome é NOME tenho XX anos minha matricula é XXX"

class Aluno{
    nome
    idade
    matricula
    senha
    nota

    //declaração do contrutor que será chamado de forma externa
    //para criar um OBJETO da classe Aluno
    constructor(nome,idade,matricula,senha,nota){
        //passando os valores dos parametros para os meus atributos diferenciando com (THIS)
        this.nome=nome
        this.idade=idade
        this.matricula=matricula
        this.senha=senha
        this.nota=nota
    }
    conversar(ouviu){
        return ouviu+", hum interessante..."
   }

   chamarProfessor(mensagem){
       return "ja revolveu, era isso ("+mensagem+")"
   }
   meApresentar(){
       return "Ola meu nome é "+this.nome+" e tenho "+this.idade+" anos, o numero da minha matricula é "+this.matricula+" e prefiro nao dizer minha senha"
   }
}


let nome="Maria Alice"

let aluno1= new Aluno("Maria Alice Matos",18,"12345","flores123!",10)
let alunoX= new Aluno("miranha",20,"miranha3","tonystark123",8)

console.log(aluno1);
console.log(aluno1.idade);
console.log(alunoX.nome);

aluno1.nome= "julieta"
console.log(aluno1);

alunoX.nome="sem nome"
alunoX.idade=24
alunoX.matricula="9933"
alunoX.senha="12345677"
console.log(alunoX);
console.log(alunoX.idade);

let colega= new Aluno("JUJU",20,"7889","juju8989",10)
console.log(colega);



aluno1.conversar("sobre o filme do homem-aranha")
//para sair em tela
console.log(aluno1.conversar("sobre o filme do homem-aranha"));
document.write(aluno1.conversar("sobre o filme do homem-aranha"))
let resposta=aluno1.conversar("sobre o filme do homem-aranha")
console.log(resposta);

console.log(alunoX.conversar("nada a declarar"));

//como eu crio um objeto da classe Aluno?
//instanciando um objeto da classe Aluno com os valores dos atributos passados no construtor
let aluno10= new Aluno("Jose",20,"00002","eusouJose",8)

//como eu acesso cada atributo do objeto?(ver no minimo 3)
console.log(aluno10.nome);
document.write(aluno10.idade)
console.log("oi prazer, eu sou o "+aluno10.nome);
document.writeln("oi eu tenho "+aluno10.idade+" anos")

let variavel= aluno10.matricula

//como eu atualizo o atributo de um objeto(atualizar 3 atributos)
aluno10.idade=22
aluno10.matricula="00000223"
aluno10.senha="precisodeumasenhamaisdificil"
console.log(aluno10);


//executando metodos de um objeto da classe Aluno
console.log(aluno10.conversar("aprendi orientação a objetos"));

console.log(aluno10.chamarProfessor("erro na linha 64"));

console.log(aluno10.meApresentar());
console.log(aluno1.meApresentar());