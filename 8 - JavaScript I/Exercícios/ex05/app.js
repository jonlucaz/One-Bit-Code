let vestido = "5";

do {
  vestido = prompt(
    "Escolha a cor do seu vestido: \n 1 - preto \n 2 - Azul \n 3 - Amarelo \n 4 - Sair"
  );
  switch (vestido) {
    case "1":
      alert("O vestido escolhido foi preto");
      break;
    case "2":
      alert("O vestido escolhido foi azul");
      break;
    case "3":
      alert("O vestido escolhido foi amarelo");
      break;
  }
} while (vestido !== "4");
