// ARRAYS
var AGENDA = [
  {
    NOME: "David Sodré Lins",
    IDADE: "29",
    CIDADE: "Salvador",
    EMAIL: "davidsodre_ba@hotmail.com",
    NÚMERO: "(71)92035786",
  },
  {
    NOME: "Silvio Vieira",
    IDADE: "15",
    CIDADE: "Feira de Santana",
    EMAIL: "silvio.vieira@ba.estudante.senai.br",
    NÚMERO: "75982479191",
  },
  {
    NOME: "Kauan Santos de Azevedo",
    IDADE: "17",
    CIDADE: "Camaçari",
    EMAIL: "pkauans.azevedo@gmail.com",
    NÚMERO: "(71)988638144",
  },
  {
    NOME: "Guilherme de Carvalho Lima Rebouças",
    IDADE: "18",
    CIDADE: "Feira de Santana",
    EMAIL: "guilhermereboucasakamosked@gmail.com",
    NÚMERO: "(75)992338134",
  },
  {
    NOME: "Jadson Lucas Pereira Souza",
    IDADE: "17",
    CIDADE: "Feira de Santana",
    EMAIL: "shaolinmatadordeporcos@gmail.com",
    NÚMERO: "(75)9 8166-4242",
  },
  {
    NOME: "Daniel da Silva Alves",
    IDADE: "21 anos",
    CIDADE: "Feira de Santana",
    EMAIL: "daniel.alves2607@gmail.com",
    NÚMERO: "(75)991707918",
  },
  {
    NOME: "Davi Ferreira de Sea",
    IDADE: "16",
    CIDADE: "Camaçarí",
    EMAIL: "davi.sena2021.com",
    NÚMERO: "(71)96294826",
  },
  {
    NOME: "Milena Calmon Pedrosa",
    IDADE: "23",
    CIDADE: "Feira de Santana",
    EMAIL: "milenacalmon@gmail.com",
    NÚMERO: "(75)992928231",
  },
  {
    NOME: "Davi Ferreira de Sena",
    IDADE: "16",
    CIDADE: "Camaçarí",
    EMAIL: "null",
    NÚMERO: "(71)96294826",
  },
  {
    NOME: "Reinaldo Teixeira",
    IDADE: "20",
    CIDADE: "Camaçari",
    EMAIL: "reinaldo.costa@ba.estudante.senai.br",
    NÚMERO: "(71)985135448",
  },
  {
    NOME: "Eduardo Gonzaga dos Santos Junior",
    IDADE: "17",
    CIDADE: "Salvador",
    EMAIL: "eduardoxystg123@gmail.com",
    NÚMERO: "349240922",
  },
  {
    NOME: "Marcos Moreira",
    IDADE: "22",
    CIDADE: "Feira De Santana",
    EMAIL: "marcos.vnmoreira@hotmail.com",
    NÚMERO: "(75)983662700",
  },
  {
    NOME: "Júlio César Menezes",
    IDADE: "19",
    CIDADE: "Feira de Santana",
    EMAIL: "juliocesar09_2001@outlook.com",
    NÚMERO: "(75)982827667",
  },
  {
    NOME: "Leidson Luiz",
    IDADE: "16",
    CIDADE: "Salvador",
    EMAIL: "leidsonluiz02@gmail.com",
    NÚMERO: "(71)993035757",
  },
  {
    NOME: "Samuel Carvalho",
    IDADE: "17",
    CIDADE: "Camaçari",
    EMAIL: "eusouuel@gmail.com",
    NÚMERO: "40028922",
  },
  {
    NOME: "Rafael Mota Rastelli Cruz",
    IDADE: "20",
    CIDADE: "Salvador",
    EMAIL: "motarafael501@gmail.com",
    NÚMERO: "(71)987143258",
  },
  {
    NOME: "Emerson Barreto dos santos",
    IDADE: "19",
    CIDADE: "Salvador",
    EMAIL: "emersonbarreto11@hotmail.com",
    NÚMERO: "(75)988223731",
  },
  {
    NOME: "Beatriz de Mendonça Santana",
    IDADE: "17",
    CIDADE: "Camaçari",
    EMAIL: "biamsantana13@gmail.com",
    NÚMERO: "(71)996358649",
  },
  {
    NOME: "Narla Maira",
    IDADE: "23",
    CIDADE: "Salvador",
    EMAIL: "nmaira200@gmail.com",
    NÚMERO: "(71)991277957",
  },
  {
    NOME: "Rafael Mota Rastelli Cruz",
    IDADE: "20",
    CIDADE: "Salvador",
    EMAIL: "motarafael501@gmail.com",
    NÚMERO: "(71)987143258",
  },
  {
    NOME: "Janine Nogueira Caldas Xavier",
    IDADE: "35",
    CIDADE: "Feira de Santana",
    EMAIL: "janine_nogueira@hotmail.com",
    NÚMERO: "(75)999119519",
  },
  {
    NOME: "Felipe Caldas",
    IDADE: "19",
    CIDADE: "Feira de Santana",
    EMAIL: "felipe@gmail.com",
    NÚMERO: "(75)00000-0000",
  },
  {
    NOME: "Breno Lima Viturino",
    IDADE: "22",
    CIDADE: "Feira de Santana",
    EMAIL: "breno.viturino@ba.estudante.senai.br",
    NÚMERO: "(75)98319-6832",
  },
  {
    NOME: "Karoline dos Santos",
    IDADE: "21",
    CIDADE: "Alagoinhas",
    EMAIL: "karolinesantos123.ks@gmail.com",
    NÚMERO: "Não possui.",
  },
  {
    NOME: "Lucas do Rosario dos Santos",
    IDADE: "20",
    CIDADE: "Camaçari",
    EMAIL: "lucas109@Ba.estudante.senai.br",
    NÚMERO: "(71)8667-6908",
  },
];
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
