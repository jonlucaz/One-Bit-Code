//no do while a primeira verificação da condição só acontece depois que o bloco for executado uma vez
//faça enquanto
//sintaxe: do{
//  ...
//} while (condição)
let velocidade = 50;

do {
  alert("A velocidado do veiculo é " + velocidade + "km/h");
  velocidade -= 20;
} while (velocidade > 0);

alert("Velocidade final: " + velocidade + "km/h");
