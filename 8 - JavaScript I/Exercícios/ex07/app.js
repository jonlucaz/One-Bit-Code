let listaDeEspera = [];

do {
  const acoes = prompt(
    "Digite a opção:\n 1 - Adicionar um novo paciente\n 2 - Chamar o primeiro paciente\n 3 - Verificar o tamanho da fila\n 4 - Sair"
  );
  if (acoes === "1") {
    listaDeEspera.push(prompt("Qual nome do paciente? "));
    console.log(listaDeEspera);
  } else if (acoes === "2") {
    listaDeEspera.shift();
  } else if (acoes === "3") {
    alert(listaDeEspera);
  }
} while (acoes === "4");
