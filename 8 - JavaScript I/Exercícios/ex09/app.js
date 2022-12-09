/*
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/
const imoveis = [];
let opcao = "";

do {
  opcao = prompt(`
  Bem vindo ao nosso sistema de cadastro de imóveis\n
  Total de imóveis cadastrados ${imoveis.length}\n\n
  Escolha uma opção: \n
  1 - Novo imóvel; \n
  2 - Listar imóveis; \n
  3 - Sair
  `);

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.codigo = prompt("Qual código do imóvel?");
      imovel.proprietario = prompt("Qual o nome do proprietario?");
      imovel.quartos = prompt("Quantos quartos tem o imóvel?");
      imovel.banheiro = prompt("Quantos banheiros tem o imóvel?");
      imovel.garagem = prompt("O imóvel tem garagem? (Sim/Não)");
      const confirmacao = confirm(
        `
        Salvar este imóvel? \n
        Código: ${imovel.codigo}\n
        Proprietário: ${imovel.proprietario}\n
        Quantidade de quartos: ${imovel.quartos}\n
        Quantidade de banheiros: ${imovel.banheiro}\n
        Possui garagem: ${imovel.garagem}
        `
      );
      if (confirmacao) {
        imoveis.push(imovel);
      }
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(`Imóvel ${imoveis[i].codigo}\n
        Proprietário: ${imoveis[i].proprietario}\n
        Quantidade de quartos: ${imoveis[i].quartos}\n
        Quantidade de banheiros: ${imoveis[i].banheiro}\n
        Possui garagem: ${imoveis[i].garagem}`);
      }
      break;

    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida.");
  }
} while (opcao !== "3");
