console.log(
  "%cJoguinho de Advinhação",
  "backgroud-color: fuchsia; color: white; font-weight: bold;" +
    "font-size: 20px; font-family: Comic Sans MS; font-style: italic" +
    "text-decoration: underline; text-shadow: 1px 1px blue;"
);

function CheckNames(a) {
    var Flag = false
    do {
        var Name = prompt(
            "Insira aqui o nome do "+ a +" Jogador: \n(Obs: de até 6 letras)"
        )
        if (Name.length > 6) {  
            alert("Tente Novamente")
        }else if (Name.length <= 6) {
            Flag = true
        }
    } while (Flag == false)
    return Name
}

function Jogada(a) {
    let contador = null
    alert("Vez de " + a)
    var NumEscolhido = Math.floor(Math.random() * 101)
    do {
        var tentativa = Number(prompt("Digite um numero"));
        if (tentativa < NumEscolhido) { 
            console.log(`
-------------
é maior que ${tentativa}
-------------
            `)
        }else if (tentativa > NumEscolhido) {
            console.log(`
-------------
é menor que ${tentativa}
-------------
            `)
        }else if (tentativa === NumEscolhido) {
            alert("Acertô mizeravi!")
        }
        contador++
    } while (tentativa !== NumEscolhido)
    return contador
}

const player1 = CheckNames("primeiro")
const player2 = CheckNames("segundo")

var contTentativas1 = null
var contTentativas2 = null

contTentativas1 = Jogada(player1)
contTentativas2 = Jogada(player2)

if (contTentativas1 > contTentativas2) { // Printa Placar
    console.log(`
    ${player1}
       @---@
${player2} | @ |
@---@  | | |
| @ |  | | |  
| | |  | | |
| | |  | | |
    `)
}else if (contTentativas1 < contTentativas2) {
    console.log(`
    ${player2}
       @---@
${player1} | @ |
@---@  | | |
| @ |  | | |
| | |  | | |
| | |  | | |
    `)
}else if (contTentativas1 == contTentativas2){
    console.log("Empate");
}