let num1 = prompt("Digite o primeiro número: ");
let operacao = prompt("Digite qual sua operação +, -, /, * ");
let num2 = prompt("Digite o segundo número: ");

firstnum = parseFloat(num1);
secnum = parseFloat(num2);
if (operacao == "+") {
  alert(firstnum + secnum);
}
if (operacao == "-") {
  alert(firstnum - secnum);
}
if (operacao == "/") {
  alert(firstnum / secnum);
}
if (operacao == "*") {
  alert(firstnum * secnum);
}
