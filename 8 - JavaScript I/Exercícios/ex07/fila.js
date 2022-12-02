let listaDeEspera = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < listaDeEspera.length; i++) {
    pacientes += i + 1 + "º - " + listaDeEspera[i] + "\n";
  }

  opcao = prompt(`
  Pacientes\n${pacientes}\n Escolha uma ação: \n1- Novo Paciente \n2- Consultar paciente \n3- Sair
  `);

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual o nome do paciente? ");
      listaDeEspera.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = listaDeEspera.shift();
      if (pacienteConsultado) {
        alert(`${pacienteConsultado} foi removido da lista de espera`);
      } else {
        alert("Não há pacientes na fila de espera");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida, tente novamente");
  }
} while (opcao !== "3");
