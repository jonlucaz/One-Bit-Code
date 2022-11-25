let nome = prompt("Qual seu nome?");
let lastname = prompt("Qual seu sobrenome? ");
let stud = prompt("Qual seu campo de estudo? ");
let born = prompt("Qual seu ano de nascimento?");

let newdate = parseFloat(born);
let age = 2022 - newdate;

alert("Seu nome completo é " + nome + " " + lastname);
alert("Sua área de estudo é " + stud);
alert("Sua idade é de " + age + " anos.");
