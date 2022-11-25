let nome1 = prompt("Qual o primeiro carro? ");
let nome2 = prompt("Qual o segundo carro? ");
let carro = prompt("Escreva a velocidade do primeiro carro em km/h: ");
let carro2 = prompt("Escreva a velocidade do segundo carro em km/h: ");
if (carro > carro2) {
  alert("O " + nome1 + " é mais rápido que o " + nome2 + "!");
} else {
  alert(
    "O " +
      nome2 +
      " é mais rápido que o " +
      nome1 +
      " pois está na velocidade " +
      carro2 +
      "km/h, enquanto o " +
      nome1 +
      " está na velocidade " +
      carro +
      "km/h"
  );
}
