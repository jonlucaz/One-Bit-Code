let numero = parseFloat(prompt("Digite a altura em metros: "));
let medida = prompt(
  "Escolha uma medida para converter: 1 - mm; 2 - cm; 3 - dm; 4 - km;"
);
switch (medida) {
  case "1":
    alert(numero * 1000 + "mm");
    break;
  case "2":
    alert(numero * 100 + "cm");
    break;
  case "3":
    alert(numero * 10 + "dm");
    break;
  case "4":
    alert(numero / 1000 + "km");
    break;
  default:
    alert("insira operação valida");
    break;
}
