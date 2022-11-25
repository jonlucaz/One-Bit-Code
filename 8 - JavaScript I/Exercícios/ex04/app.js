let nome = prompt("Qual seu nome?");
let cidades = "";
let city = prompt("Você já visitou alguma cidade? S/N");
let contagem = 0;
while (city == "S") {
  let cidade = prompt("Qual o nome da cidade visitada? ");
  cidades += "\n" + " . " + cidade + "\n";
  contagem++;
  city = prompt("Você visitou outra cidade? S/N");
}
alert(nome + "visitou as seguintes cidades: " + cidades);
