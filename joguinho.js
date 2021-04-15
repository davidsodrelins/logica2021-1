/*
faça um joguinho de advinhação que dê 
pra jogar com 2 usuarios.

1- acrescente a informação de quantas
vezes foi chutado para acertar
2- coloque o nome dos jogadores
3- crie um rankig

*/

// estrutura de repetição
var pensei = 21
var numero = null
var contTentativas = 0
do{
  numero = Number(prompt("digite um numero"));
  if(numero<pensei){
    console.log("--------")
    console.log("é maior que " + numero)
  }
  if(numero>pensei){
    console.log("--------")
    console.log("é menor que " + numero)
  }
  if(numero === pensei){
    console.log("Acertô mizeravi! ")
  }
  // contTentativas = contTentativas + 1;
}while (numero !== pensei);
