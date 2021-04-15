var listaPessoas = [];
var listaGrupos = [];

var pessoa = {
  id: null,
  nome: null,
  idade: null,
  cidade: null,
  listaAmigos: [],
  listaGrupos: [],
};
var novoIdPessoa = 0;
var novoIdGrupo = 0;

function cadastrarPessoa() {
  var pessoa = {
    id: null,
    nome: null,
    idade: null,
    cidade: null,
    listaAmigos: [],
    listaGrupos: [],
  };

  pessoa.id = novoIdPessoa;
  pessoa.nome = ler("nome");
  pessoa.idade = ler("idade");
  pessoa.cidade = ler("cidade");

  listaPessoas.push(pessoa);

  novoIdPessoa = novoIdPessoa + 1;
}
function listarPessoas() {
  for (var i = 0; i < listaPessoas.length; i++) {
    console.log("########### PESSOA ############");
    console.log("Id: " + listaPessoas[i].id);
    console.log("Nome: " + listaPessoas[i].nome);
    console.log("Idade: " + listaPessoas[i].idade);
    console.log("Cidade: " + listaPessoas[i].cidade);

    console.log("********** AMIGOS **********");
    for (var j = 0; j < listaPessoas[i].listaAmigos.length; j++) {
      console.log("Nome: " + listaPessoas[
                                        listaPessoas[i].listaAmigos[j]
                              ].nome);
      console.log("Idade: " + listaPessoas[listaPessoas[i].listaAmigos[j]].idade);
      console.log("Cidade: " + listaPessoas[listaPessoas[i].listaAmigos[j]].cidade);
    }

    console.log("********** GRUPOS **********");
    for (var k = 0; k < listaPessoas[i].listaGrupos.length; k++) {
      console.log("Nome: " + listaPessoas[i].listaGrupos[k].nome);
      console.log(
        "Quantidade de usuarios: " + listaPessoas[i].listaGrupos[k].qtPessoas
      );
    }
  }
  menu()
}

function seguirPessoa() {
  listarPessoas();
  var meuId = ler("informa meu id", "int");
  listarPessoas();
  var idPessoa = ler("informa o id da pessoa", "int");
  achouMeuId = false
  achouIdPessoa = false

  for (var i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].id === meuId) {
      for (var j = 0; j < listaPessoas.length; j++) {
        if (listaPessoas[j].id === idPessoa) {
          listaPessoas[i].listaAmigos.push(idPessoa);
          achouMeuId = true
        } else if(!achouMeuId){
          console.log("o id " + idPessoa + " não foi encontrado");
        }
      }
      achouIdPessoa = true
    } else if(!achouIdPessoa){
      console.log("o id " + meuId + " não foi encontrado");
    }
  }
}

function cadastrarGrupo() {
  var grupo = {
    id: null,
    nome: null,
    qtPessoas: 0,
    listaPessoa: [],
  };

  grupo.id = novoIdGrupo;
  grupo.nome = ler("Nome do grupo");

  listaGrupos.push(grupo);

  novoIdGrupo = novoIdGrupo + 1;
}

function buscarGrupo() {
  var nome = ler();
  var achou = false;
  for (var i = 0; i < listaGrupos.length; i++) {
    if (nome === listaGrupos[i].nome) {
      console.log("#######  GRUPO(S)   ENCONTRADO(S)  ######");
      console.log("Id: " + listaGrupos[i].id);
      console.log("Nome: " + listaGrupos[i].nome);
      console.log("Quantidade de Pessoas: " + listaGrupos[i].qtPessoas);
      console.log("#####################################");
      achou = true;
    }
  }
  if (!achou && i === listaGrupos.length - 1) {
    console.log("Não achou");
  }
}

function buscarPessoa() {
  var nome = ler();
  var achou = false;
  for (var i = 0; i < listaPessoas.length; i++) {
    if (nome === listaPessoas[i].nome) {
      console.log("#######  PESSOA(S)   ENCONTRADA(S)  ######");
      console.log("Id: " + listaPessoas[i].id);
      console.log("Nome: " + listaPessoas[i].nome);
      console.log("Idade: " + listaPessoas[i].idade);
      console.log("Cidade: " + listaPessoas[i].cidade);
      console.log("#####################################");
      achou = true;
    }
  }
  if (!achou && i === listaPessoas.length - 1) {
    console.log("Não achou");
  }
}

function entrarGrupo() {}

function menu(opcao) {
  switch (opcao) {
    case 1:
      cadastrarPessoa();
      break;
    case 2:
      seguirPessoa();
      break;
    case 3:
      buscarPessoa();
      break;
    case 4:
      cadastrarGrupo();
      break;
    case 5:
      buscarGrupo();
    case 6:
      entrarGrupo();
      break;
    case 7:
      listarPessoas();
      break;
    case 8:
      alert("Até mais...");
      break;
    default:
      alert("opção invalida!");
      break;
  }
}

function ler(mensagem = "Informe o valor: ", tipo = "string") {
  if (tipo === "int") {
    var valor = Number(prompt(mensagem));
  }
  if (tipo === "string") {
    var valor = prompt(mensagem);
  }
  return valor;
}

do {
  var opcao = Number(
    prompt(
      "1-Cadastrar Pessoa \n 2-Seguir Pessoa \n 3-Buscar Pessoa \n 4-Cadastra Grupo \n 5-Buscar Grupo \n 6-Entra no Grupo \n 7-Listar Pessoas \n 8-sair"
    )
  );
  menu(opcao);
} while (opcao !== 8);
