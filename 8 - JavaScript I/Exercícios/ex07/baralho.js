/*Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo a 
quantidade de cartas que estão atualmente no baralho e as opções de 
“Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, 
o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher 
“Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o 
nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, 
caso contrário deve voltar ao menu.
 */
let baralho = [];
let interativo = "";
do {
  interativo = prompt(
    `Cartas no baralho: ${baralho.length} \nEscolha uma opção:\n 1 - Adicionar uma carta\n 2 - Puxar uma carta\n 3 - Sair`
  );
  switch (interativo) {
    case "1":
      const novaCarta = prompt("Qual carta você quer adicionar?");
      baralho.push(novaCarta);
      break;
    case "2":
      baralho.pop();
      break;
    case "3":
      alert("encerrando...");
      break;
    default:
      alert("Opção invalida, tente novamente");
  }
} while (interativo !== "3");
