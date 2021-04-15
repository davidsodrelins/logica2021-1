// ARRAYS
var AGENDA = [];

// FUNÇÕES
function LISTA() {
  // ESTRUTURA DE REPETIÇÃO
  for (let I = 0; I < AGENDA.length; I++) {
    console.log("=-=".repeat(15));
    console.log(`${I + 1})`);
    console.log(`NOME: ${AGENDA[I].NOME}`);
    console.log(`IDADE: ${AGENDA[I].IDADE} Anos`);
    console.log(`CIDADE: ${AGENDA[I].CIDADE}`);
    console.log(`E-MAIL: ${AGENDA[I].EMAIL}`);
    console.log(`NÚMERO: ${AGENDA[I].NÚMERO}`);
    console.log("=-=".repeat(15));
  }
}
function LISTA_NOMES() {
  // ESTRUTURA DE REPETIÇÃO
  for (let I = 0; I < AGENDA.length; I++) {
    console.log("=-=".repeat(15));
    console.log(`${I + 1})`);
    console.log(`NOME: ${AGENDA[I].NOME}`);
    console.log("=-=".repeat(15));
  }
}
do {
  var OPCAO = Number(
    prompt(
      "(1) EXIBIR LISTA \n(2) BUSCAR CONTATO \n(3) ADICIONAR/REMOVER \n(4) EDITAR \n(0) SAIR"
    )
  );
  // CONDIÇÃO DE EXISTÊNCIA DO NÚMERO
  if (isNaN(OPCAO) == false) {
    switch (OPCAO) {
      case 0:
        break;
      case 1:
        LISTA();
        break;
      case 2:
        var BUSCADOR = prompt("DIGITE O NOME QUE VOCÊ ESTÁ BUSCANDO:");
        var ENCONTRAR = false;
        for (let I = 0; I < AGENDA.length; I++) {
          if (BUSCADOR == AGENDA[I].NOME) {
            ENCONTRAR = true;
            alert("CONTATO ENCONTRADO!");
            console.log("=-=".repeat(15));
            console.log(`${I + 1})`);
            console.log(`NOME: ${AGENDA[I].NOME}`);
            console.log(`IDADE: ${AGENDA[I].IDADE} Anos`);
            console.log(`CIDADE: ${AGENDA[I].CIDADE}`);
            console.log(`E-MAIL: ${AGENDA[I].EMAIL}`);
            console.log(`NÚMERO: ${AGENDA[I].NÚMERO}`);
            console.log("=-=".repeat(15));
          }
        }
        if (ENCONTRAR == false) {
          alert("CONTATO NÃO ENCONTRADO!");
        }
        break;
      case 3:
        // VARIÁVEL PARA ADICIONAR OU REMOVER
        var ADCRM = Number(
          prompt("(1) ADICIONAR \n(2) REMOVER \n(0) VOLTAR PARA O MENU")
        );
        switch (ADCRM) {
          case 0:
            break;
          case 1:
            var NOVO_CONTATO = {
              NOME: null,
              IDADE: null,
              CIDADE: null,
              EMAIL: null,
              NÚMERO: null,
            };
            // ENTRADA DE DADOS
            NOVO_CONTATO.NOME = prompt("DIGITE O NOME DO CONTATO:");
            NOVO_CONTATO.IDADE = prompt("DIGITE A IDADE DO CONTATO:");
            NOVO_CONTATO.CIDADE = prompt("DIGITE A CIDADE DO CONTATO:");
            NOVO_CONTATO.EMAIL = prompt("DIGITE O EMAIL DO CONTATO:");
            NOVO_CONTATO.NÚMERO = prompt("DIGITE O NÚMERO DO CONTATO:");
            // FEEDBACK
            AGENDA.push(NOVO_CONTATO);
            alert(`${NOVO_CONTATO.NOME} foi adicionado(a) à agenda.`);
            break;
          case 2:
            LISTA_NOMES();
            var RM = Number(
              prompt("DIGITE O NÚMERO DA AGENDA CORRESPONDENTE AO CONTATO:")
            );
            // FEEDBACK
            alert(`${AGENDA[RM - 1].NOME} foi removido(a) da agenda.`);
            AGENDA.splice(RM - 1, 1);
            break;
          default:
            alert("OPCAO INVÁLIDA! DIGITE NOVAMENTE.");
            break;
        }
        break;
      case 4:
        LISTA();
        var CONT_EDITAR = Number(
          prompt("DIGITE O NÚMERO DA AGENDA CORRESPONDENTE AO CONTATO:")
        );
        var EDITAR = Number(
          prompt(
            "(1) EDITAR NOME  \n(2) EDITAR IDADE \n(3) EDITAR CIDADE \n(4) EDITAR E-MAIL \n(5) EDITAR NÚMERO \n(0) SAIR"
          )
        );
        switch (EDITAR) {
          case 0:
            break;
          case 1:
            AGENDA[CONT_EDITAR - 1].NOME = prompt("DIGITE O NOVO NOME: ");
            alert("NOME ATUALIZADO!");
            break;
          case 2:
            AGENDA[CONT_EDITAR - 1].IDADE = prompt("DIGITE A NOVA IDADE: ");
            alert("IDADE ATUALIZADA!");
            break;
          case 3:
            AGENDA[CONT_EDITAR - 1].CIDADE = prompt("DIGITE A NOVA CIDADE: ");
            alert("CIDADE ATUALIZADA!");
            break;
          case 4:
            AGENDA[CONT_EDITAR - 1].EMAIL = prompt("DIGITE O NOVO E-MAIL: ");
            alert("E-MAIL ATUALIZADO!");
            break;
          case 5:
            AGENDA[CONT_EDITAR - 1].NÚMERO = prompt("DIGITE O NOVO NÚMERO: ");
            alert("NÚMERO ATUALIZADO!");
            break;
          default:
            alert("OPCAO INVÁLIDA!");
            break;
        }
        break;
      default:
        alert("OPCAO INVÁLIDA! DIGITE NOVAMENTE.");
        break;
    }
  } else {
    alert("OPCAO INVÁLIDA! DIGITE NOVAMENTE.");
  }
} while (OPCAO != 0);
