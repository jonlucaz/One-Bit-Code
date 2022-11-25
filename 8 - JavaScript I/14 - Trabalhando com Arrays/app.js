const arr = ["Percy", "Annabeth", "Jason", "Piper", "Leo", "Hazel", "Frank"];

//adicionar elemento
//push - adiciona elemento no final do array
alert(arr);
arr.push("Hedge");
alert(arr);

//unshift -adiona um elemento no início da lista
arr.unshift("Nico");
alert(arr);

//remover elemento
//pop - remove o último elemento
arr.pop();
alert(arr);

//shift - remove elemento no começo
arr.shift();
alert(arr);

//pesquisar por elementos
//includes - verifica se um elemento está contido em uma lista
const inclui = arr.includes("Percy");
if (inclui === true) {
  alert(`O elemento Percy está na lista no indice ${arr.indexOf("Percy")}`);
}

//indexOf - pesquisa em qual indice está localizado o elemento

//cortar e concatenar
//slice - cortar, fatiar a lista, faz uma cópia de uma fatia da lista
const gregos = arr.slice(0, 2);
alert(gregos);

//concat - concatenar, juntar
const casal = gregos.concat("Piper", "Jason");
alert(casal);

//substituição dos elementos
//splice - remove um grupo de elementos do array
const a = casal.splice(2, 2);
alert(a);

//iterar sobre os elementos do array
//for - itera igual o for funciona
