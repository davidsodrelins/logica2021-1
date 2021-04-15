// OBJETO
/*

estante - numeroGaveta, cor, altura, largura, material
bloco - materiaPrima, largura, altura, cor
celular - marca, ram, rom, modelo, gpu, camera*, microfone*
caneta - cor, modelo, ponta, formato
pessoa - nome, genero, idade, altura, peso, etnia, rg, cpf, estadoCivil

JSON - Javascript Object Notation
*/
// var caneta = {
//   cor: "azul",
//   pontaEsferografica: "bronze",
//   modelo: "transparente",
//   tampa: "azul",
//   formato: "cilindro",
// };

// var pessoa = {
//   nome: "Tonhe",
//   genero: "M",
//   idade: 18,
//   altura: "1,71",
//   peso: "65",
//   etnia: "Asiático",
//   RG: 1717171,
//   CPF: 65412323476, //"044.555.666-88"
//   estacoCivil: "solteiro",
// };

// var celular = {
//   marca: "Nokia",
//   rom: "256kb",
//   ram: "16kb",
//   modelo: "2280",
//   gpu: "Não possui",
//   camera: {
//     frontal: "não possui",
//     traseira: "não possui",
//   },
// };

// var bloco = {
//   materiaPrima: "ceramica",
//   largura: 10,
//   altura: 5,
//   cor: "vermelho",
// };

// var celular2 = {
//   marca: "épôu",
//   rom: "2tera",
//   ram: "32gb",
//   modelo: "Iphone 12 pro Master XSPLUS",
//   gpu: "Nvidea 3386 4gb",
//   camera: {
//     frontal: {
//       zoom: "optico",
//       qualidade: "8k",
//     },
//     traseira: {
//       zoom: {
//         optico: "50x",
//         digital: "300x",
//       },
//       qualidade: "16k",
//       abertura: "360 graus",
//     },
//   },
// };

// var estante = {
//   numeroGaveta: 3,
//   cor: "mogno",
//   altura: "1.69",
//   largura: "1.60",
//   material: "MDF",
// };

// console.log("Na narciso enxovais vc encontra estante de " + estante.material
// + " de " + estante.altura + " m por apenas 150 conto" )

// VETOR - AUEI

// var vetorVazio = [];

// var bia = ["B", "E", "A", "T", "R", "I", "Z"];
// var alunos = ["Emerson", "Thiago", "Karoline", "Milena", "Jadson", "Silvio"];
// var numeros = [100, 6, 8, 1, 7, 9, 11];

// var listaCelulares = [celular, celular2];

// var xcz = {
//   nome: "David Sodré Lins",
//   idade: "29",
//   cidade: "Salvador",
//   email: "davidsodre_ba@hotmail.com",
//   zap: "7192035786",
// };

// var agenda = [
//   {
//     nome: "David Sodré Lins",
//     idade: "29",
//     cidade: "Salvador",
//     email: "davidsodre_ba@hotmail.com",
//     zap: "7192035786",
//   },
//   {
//     nome: "Silvio Vieira",
//     idade: "15",
//     cidade: "Feira de Santana",
//     email: "silvio.vieira@ba.estudante.senai.br",
//     zap: "75982479191",
//   },
//   {
//     nome: "Kauan Santos de Azevedo",
//     idade: "17",
//     cidade: "camaçari",
//     email: "pkauans.azevedo@gmail.com",
//     zap: "71988638144",
//   },
//   {
//     nome: "Guilherme de Carvalho Lima Rebouças",
//     idade: "18",
//     cidade: "Feira de Santana",
//     email: "guilhermereboucasakamosked@gmail.com",
//     zap: "75992338134",
//   },
//   {
//     nome: "Jadson Lucas Pereira Souza",
//     idade: "17",
//     cidade: "Feira de Santana",
//     email: "shaolinmatadordeporcos@gmail.com", //email fictício
//     whatsapp: "(75)9 8166-4242",
//     corFav: "Preto",
//   },
//   {
//     nome: "Daniel da Silva Alves",
//     idade: "21 anos",
//     cidade: "Feira de Santana",
//     email: "daniel.alves2607@gmail.com",
//     zap: "75991707918",
//   },
//   {
//     nome: "Davi Ferreira de Sea",
//     idade: "16",
//     cidade: "Camaçarí",
//     email: "davi.sena2021.com",
//     zap: "7196294826",
//   },
//   {
//     nome: "Milena Calmon Pedrosa",
//     idade: "23",
//     cidade: "Feira de Santana",
//     email: "milenacalmon@gmail.com",
//     zap: "75992928231",
//   },
//   {
//     nome: "Davi Ferreira de Sena",
//     idade: "16",
//     cidade: "Camaçarí",
//     email: "null",
//     zap: "7196294826",
//   },
//   {
//     nome: "Reinaldo Teixeira",
//     idade: "20",
//     altura: "1,89",
//     cidade: "Camaçari",
//     email: "reinaldo.costa@ba.estudante.senai.br",
//     zap: "71985135448",
//   },
//   {
//     nome: "Eduardo Gonzaga dos Santos Junior",
//     idade: "17",
//     cidade: "Salvador",
//     email: "eduardoxystg123@gmail.com",
//     zap: "349240922",
//   },
//   {
//     nome: "Marcos Moreira",
//     idade: "22",
//     cidade: "Feira De Santana",
//     email: "marcos.vnmoreira@hotmail.com",
//     zap: "75983662700",
//   },
//   {
//     nome: "Júlio César Menezes",
//     idade: "19",
//     cidade: "Feira de Santana",
//     email: "juliocesar09_2001@outlook.com",
//     zap: "75982827667",
//   },
//   {
//     nome: "Leidson Luiz",
//     idade: "16",
//     cidade: "Salvador",
//     email: "leidsonluiz02@gmail.com",
//     zap: "71993035757",
//   },
//   {
//     nome: "Samuel Carvalho",
//     idade: "17",
//     cidade: "Camaçari",
//     email: "eusouuel@gmail.com",
//     zap: "40028922",
//   },
//   {
//     nome: "Rafael Mota Rastelli Cruz",
//     idade: "20",
//     cidade: "Salvador",
//     email: "motarafael501@gmail.com",
//     zap: "71987143258",
//   },
//   {
//     nome: "Emerson Barreto dos santos",
//     idade: "19",
//     cidade: "Salvador",
//     email: "emersonbarreto11@hotmail.com",
//     zap: "75988223731",
//   },
//   {
//     nome: "beatriz de mendonça santana",
//     idade: "17",
//     cidade: "camaçari",
//     email: "biamsantana13@gmail.com",
//     zap: "71996358649",
//   },
//   {
//     nome: "Narla Maira",
//     idade: "23",
//     cidade: "Salvador",
//     email: "nmaira200@gmail.com",
//     zap: "71991277957",
//   },
//   {
//     nome: "Rafael Mota Rastelli Cruz",
//     idade: "20",
//     cidade: "Salvador",
//     email: "motarafael501@gmail.com",
//     zap: "71987143258",
//   },
//   {
//     nome: "Janine Nogueira Caldas Xavier",
//     idade: "35",
//     cidade: "Feira de Santana",
//     email: "janine_nogueira@hotmail.com",
//     zap: "75999119519",
//   },
//   {
//     nome: "Felipe Caldas Pergentino Santos",
//     idade: "19",
//     cidade: "Feira de Santana",
//     email: "felipe.pergentino@hotmail.com",
//     zap: "(75)99896-6977",
//   },
//   {
//     nome: "Breno Lima Viturino",
//     idade: "22",
//     cidade: "Feira de Santana",
//     email: "breno.viturino@ba.estudante.senai.br",
//     zap: "(75)98319-6832",
//   },
//   {
//     nome: "Karoline dos santos",
//     idade: "21",
//     cidade: "Alagoinhas",
//     email: "karolinesantos123.ks@gmail.com",
//     zap: "Não colocou pq não tem cerulá",
//   },
//   {
//     nome: "Lucas do Rosario dos SAntos",
//     idade: "20",
//     cidade: "camaçari",
//     email: "lucas109@Ba.estudante.senai.br",
//     zap: "(71)8667-6908",
//   },
// ];

// Crie um menu para adicionar o contato

// digite 1 para adicinonar um novo contato
// digite 2 para alterar um contato
// digite 0 para fechar

// function ler(mensagem = "Informe o valor: ", tipo = "string") {
//   if (tipo === "int") {
//     var valor = Number(prompt(mensagem));
//   }
//   if (tipo === "string") {
//     var valor = prompt(mensagem);
//   }
//   return valor;
// }

// // Crie um algoritmo para alterar o contato de um determinado cara da agenda.
// function listarContatos() {
//   for (var i = 0; i < agenda.length; i++) {
//     console.log("#####################################");
//     console.log("Nome: " + agenda[i].nome);
//     console.log("Idade: " + agenda[i].idade);
//     console.log("Cidade: " + agenda[i].cidade);
//     console.log("Email: " + agenda[i].email);
//     console.log("Zap: " + agenda[i].zap);
//   }
// }

// // criar um algoritmo para buscar um contato pelo nome
// function buscarContato() {
//   var buscaNome = ler();
//   var buscaIdade = ler("Informe a idade", "int");
//   var achou = false;
//   for (var i = 0; i < agenda.length; i++) {
//     if (buscaNome === agenda[i].nome || buscaIdade == agenda[i].idade) {
//       console.log("#######  CONTATO   ENCONTRADO  ######");
//       console.log("Nome: " + agenda[i].nome);
//       console.log("Idade: " + agenda[i].idade);
//       console.log("Cidade: " + agenda[i].cidade);
//       console.log("Email: " + agenda[i].email);
//       console.log("Zap: " + agenda[i].zap);
//       console.log("#####################################");
//       achou = true;
//     }
//   }
//   if (!achou && i === agenda.length - 1) {
//     console.log("Não achou");
//   }
// }

// var agendaTelefonica = [] // a agenda não tem contatos

// console.log("A agenda da turma tem " + agendaTelefonica.length + " contatos")

// var contato = { //criei um contato nulo
//     nome: null,
//     idade: null,
//     cidade: null,
//     email:  null,
//     zap: null,
//   }

// contato.nome = prompt("Digite seu nome")
// contato.idade = prompt("Digite seu idade")
// contato.cidade = prompt("Digite seu cidade")
// contato.email = prompt("Digite seu email")
// contato.zap = prompt("Digite seu zap")

// // neste momento eu já tenho o contato preenchido e preciso add na agenda!

// agendaTelefonica.push(contato)
// console.log("A agenda da turma tem " + agendaTelefonica.length + " contatos")
// console.log("O contato de  " + contato.nome + " zap: " + contato.zap + " foi salvo com sucesso!")
// console.log(agendaTelefonica)

// Funções - em JS
// function baskara(a, b, c) {
//   var delta = (b**2)-(4*a*c)

//   if(delta > 0){
//     var x1 = (-b + Math.sqrt(delta))/2*a
//     var x2 = (-b - Math.sqrt(delta))/2*a
//     console.log("Delta > 0, possui duas raízes X'= "+ x1 + " e X''= " + x2)
//     return
//   }

//   if(delta == 0){
//     console.log("Delta = 0, possui duas raízes iguais. ou seja X' = X''")
//     return (-b + Math.sqrt(delta))/2*a
//   }

//   if(delta<0){
//     return "Não existe raízes reais, delta = 0"
//   }
// }

// baskara(1, -5, 6)
/*
//console.log("a soma dos numero é: " + soma(numero1, numero2, 10));

De modo geral, função é um "subprograma" que pode ser chamado por código externo 
(ou interno no caso de recursão) à função. Assim como o programa em si, uma função 
é composta por uma sequência de instruções chamada corpo da função. 
Valores podem ser passados para uma função e ela vai retornar um valor.
*/

// 01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.
// [15 m]

//02. Crie uma função que recebe um array de 3 números e
//coloque eles em ordem
//crescente. Crie sua própria função para isso.
//[19:33]

// var vet = []
// for (i=0; i<3; i++){
//   vet[i] = Number(prompt("digite o numero "  + (i+1)))
// }

// console.log("vetor original")
// console.log(vet)

// console.log("vetor ordenado")
// console.log(ordenaVetor(vet))

// function ordenaVetor(vetor){

//    return vetor
// }

// var vetor = [];

// for (var i = 0; i < 3; i++) {
//   var numeros = Number(prompt("digite um numero"));
//   vetor.push(numeros);
// }

// var vetorOrdenado = ordenar(vetor)

// console.log(vetorOrdenado)

// function ordenar(vetor) {
//   if (vetor[1] < vetor[0]) {
//     var aux = null;
//     aux = vetor[1];
//     vetor[1] = vetor[0];
//     vetor[0] = aux;
//   }
//   if (vetor[2] < vetor[0]) {
//     aux = vetor[2];
//     vetor[2] = vetor[0];
//     vetor[0] = aux;
//   }
//   if (vetor[2] < vetor[1]) {
//     aux = vetor[2];
//     vetor[2] = vetor[1];
//     vetor[1] = aux;
//   }
//   return vetor;
// }

//03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
//Modifique os elementos do array de modo a a sequência de números ficar do contrário.
//Ou seja, se digitou: 1,2,3, | 3,2,1
//Vai aparecer: 3,2,1
//[10 minutos]

/*
Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor.
Ao final, exiba o array e o array ao contrário (generalização do script anterior). */
// [20:32]

/*
Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos 
na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting.
*/

// [3,2,1] - 1,2,3
// [9,5,1,2,8,7,6,10] - 1,2,5,6,7,8,9,10

/*
  PROXIMA AULA!
*/

/*
Faça uma função que recebe um array de 
qualquer tamanho e ordene seus elementos
na ordem crescente. Faça sua função na mão, 
não invoque nenhum método de sorting.

Algoritmo de ordenação - Bubble Sort
*/

// V = [6,4,8,2,7,1] // 6 posicoes
// indices: 0,1,2,3,4,5

// PARA i=0 ATE V.tamanho DE 1 EM 1
//   PARA j=i+1 V.tamanho DE 1 EM 1
//       SE (V[i] > V[j]) ENTAO
//         AUX = V[i]
//         V[i] = V[j]
//         V[j] = AUX
//       FIM_SE
//   FIM_PARA
// FIM_PARA

function bubble_sort(vetor) {
  console.log("vetor bagunçado");
  console.log(vetor);

  var tamanho = vetor.length;
  console.log("tamanho do vetor: ", tamanho);

  for (var i = 0; i < tamanho; i++) {
    for (var j = i + 1; j < tamanho; j++) {
      console.log("Eu vou comparar o " + vetor[i] + " com " + vetor[j]);
      console.log(vetor[i] + " é maior que " + vetor[j] + "?");
      if (vetor[i] > vetor[j]) {
        console.log("SIM!!! é Maior! Então vai trocar!");
        var aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        console.log("Trocô!");
      }else{
        console.log("Não!!! Segue o baba!!");

      }
      console.log("Vetor parcial");
      console.log(vetor);
    }
    console.warn("Proxima rodadada do i!");
    console.warn(vetor);
  }
}

var vet = [3,2,1];
bubble_sort(vet);
