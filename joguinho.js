/*
faça um joguinho de advinhação que dê 
pra jogar com 2 usuarios.

1- acrescente a informação de quantas
vezes foi chutado para acertar OK
2- coloque o nome dos jogadores
3- crie um rankig

*/

// estrutura de repetição
function ler() {
  var x = Number(prompt("digite um numero"));
  return x;
}

var jogadores = [];
var pensei = 21;
var numero = null;
var contTentativas = 0;
var player = { nome: "", pontuacao: 0 };

player.nome = prompt("digite o nome do jogador");

do {
  contTentativas = contTentativas + 1;
  numero = ler();

  if (numero < pensei) {
    console.log("--------");
    console.log(player.nome + " é maior que " + numero);
  }
  if (numero > pensei) {
    console.log("--------");
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

console.log(jogadores);
