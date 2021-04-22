/*
faça um joguinho de advinhação que dê 
pra jogar com 2 usuarios.

1- acrescente a informação de quantas
vezes foi chutado para acertar OK
2- coloque o nome dos jogadores
3- crie um rankig


Atualize para o permitir que 
o usuario continue jogando ou saia.
*/

// estrutura de repetição
function ler() {
  var x = Number(prompt("digite um numero"));
  return x;
}

var jogadores = [];
var pensei = Math.floor(Math.random() * 100);
var numero = null;
var contTentativas = 0;
var player = { nome: "", pontuacao: 0 };

menuGeral();

function jogar() {
  do {
    contTentativas = contTentativas + 1;
    numero = ler();

    if (numero < pensei) {
      console.log(player.nome + " é maior que " + numero);
    }
    if (numero > pensei) {
      console.log(player.nome + " é menor que " + numero);
    }
    if (numero === pensei) {
      console.log(player.nome + " acertô mizeravi! ");
      console.log("Numero de tentativas " + contTentativas);

      player.pontuacao =
        contTentativas < player.pontuacao || player.pontuacao === 0
          ? contTentativas
          : player.pontuacao;

      jogadores.push(player);
    }
  } while (numero !== pensei);
  continuar();
}
console.log(jogadores);

function continuar() {
  var escolha = Number(prompt("Escolha \n 1-Continuar\n 2-Sair"));
  switch (escolha) {
    case 1:
      var vpe = Number(
        prompt(
          "Escolha 1-Continuar com o mesmo Jogador \n 2- Criar novo jogador"
        )
      );
      switch (vpe) {
        case 1:
          jogar();
        case 2:
          menuGeral();
          break;
      }
    case 2:
      break;
  }
}
function menuGeral() {
  var newGame = Number(prompt("1-Novo Jogo \n 2-Sair"));
  switch (newGame) {
    case 1:
      player.nome = prompt("digite o nome do jogador");
      jogar();
      break;
    case 2:
      break;
    default:
      alert("Opção Invalida");
      menuGeral();
  }
}

//Menu Geral
//JOGAR
//CONTINUAR COM O MESMO JOGADOR
//INICIAR COM NOVO JOGADOR

//SAIR
