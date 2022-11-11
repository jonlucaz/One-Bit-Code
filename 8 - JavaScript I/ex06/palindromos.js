const palavra = prompt("Escreva uma palavra");
let reverseword = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  reverseword += palavra[i];
}
if (palavra.toUpperCase() === reverseword.toLocaleUpperCase()) {
  alert("É palindromo");
} else {
  alert("Não é palindromo");
}
