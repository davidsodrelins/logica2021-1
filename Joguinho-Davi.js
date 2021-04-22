/*
faça um joguinho de advinhação que dê
pra jogar com 2 usuarios.
1 - acrescente à informação de determinadas
vezes foi chutado para acertar
2 - coloque o nome dos jogadores
3 - crie um rankig 
    */

var flag = false
alert("Bem vindo ao joguinho...")
do {
    if (flag !== false) {
        alert("Vamos lá, mas dessa vez digite a quantidade certa, blz? ")
    }
    var usuarios = [];
    var rank = [];
    var qtUsuarios = Number(prompt("Quantos usuarios irão participar do jogo"))
    if (qtUsuarios > 0) {
        for (var i = 0; i !== qtUsuarios; i++) {
            var usuario = {
                nome: prompt("informe o nome do jogador " + (i + 1)),
                qtTentativas: 0,
            }
            usuarios.push(usuario)
        }
        alert("Objetivo do jogo: \n\n A pessoa que advinhar o número com menor quantidade de tentativas ganha")

        for (i = 0; i !== qtUsuarios; i++) {
            alert("Vez de " + usuarios[i].nome)
            var numeroAleatorio = numAleatorio()
            do {
                numero = Number(prompt("digite um numero"));
                if (numero < numeroAleatorio) {
                    alert("é maior que " + numero)
                }
                if (numero > numeroAleatorio) {
                    alert("é menor que " + numero)
                }
                if (numero == numeroAleatorio) {
                    alert("Acertô mizeravi!")
                }
                usuarios[i].qtTentativas++
            }
            while (numero !== numeroAleatorio);
        }
        for (var i = 0; i != usuarios.length - 1; i++) {
            for (var j = 0; j != usuarios.length - 1; j++) {
                if (usuarios[j].qtTentativas > usuarios[j + 1].qtTentativas) {
                    var aux = usuarios[j]
                    usuarios[j] = usuarios[j + 1]
                    usuarios[j + 1] = aux;
                }
            }
        }
        if (usuarios[0].qtTentativas == usuarios[1].qtTentativas) {
            alert("Ocorreu um empate entre " + usuarios[0].nome + " e " + usuarios[1].nome)
        } else {
            alert(`Parabéns ${usuarios[0].nome} Você ganhou!!! `)
        }
        console.log("O Rank foi: ")
        console.log(usuarios)


        function numAleatorio() {
            return (Math.floor(Math.random() * 100 + 1))
        }
    } else(alert("Quantidade de pessoas invalidas"), flag = true)
    var jogarNovamente = Number(prompt("Digite ( 1 ) para jogar novamente \n Digite ( 0 ) para sair "))
} while (jogarNovamente == 1)
alert(" Até mais... ")