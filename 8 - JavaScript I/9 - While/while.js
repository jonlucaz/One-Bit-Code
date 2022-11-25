//estrutura de repetição
//laço de repetição que será executado enquanto uma condição for verdadeira
//também aceita o break
//ENQUANTO condição FAÇA algo
//sintaxe:
//while (condição){
// ...}

let velocidade = 80;

while (velocidade > 0) {
  alert("O carro está a " + velocidade + "km/h");
  velocidade -= 20;
  alert("Diminuindo 20km/h");
}
alert("O carro parou");
