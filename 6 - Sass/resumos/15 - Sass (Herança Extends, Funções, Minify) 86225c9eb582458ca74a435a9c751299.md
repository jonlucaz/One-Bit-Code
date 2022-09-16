# 15 - Sass (Herança/Extends, Funções, Minify)

Created: September 15, 2022 8:45 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: Sass (6)
Aulas: Usar e aproveitar Herança/Extends; O que são e como usar as funções do Sass; Como deixar o site mais rápido com Minify.*

>>Usar e aproveitar Herança/Extends

→ Heranças servem para herdar coisas de outros elementos, e o extend serve para extender propriedades de outros elementos, acabam sendo bem parecidas mas uma é melhor que outra em certo momento;
→ Quando usamos a herança, também usamos o nesting, com 2 classes em 1 elemento, a primeira classe será a classe geral, que vai conter todos os elementos e a segunda vai ser a específica, que pode mudar apenas a cor, por exemplo. E com nesting podemos colocar o que queremos de forma mais organizada, colocando o elemento pai em um arquivo separado;
→ E o extends é bem parecido, só que fica um pouco menos organizado. Podemos criar a mesma classe “pai”, só que sem colocá-la na classe HTML do elemento, apenas criando o SCSS dela.

>>O que são e como usar as funções do Sass
→ As funções do sass é basicamente um conjunto de instruções que executamos para retornar determinado valor. Criar funções é algo bem mais complexo, mas não vamos ver isso agora, focaremos em funções já disponibilizadas pelo sass, existe a documentação no W3schools:
https://w3schools.com/sass/sass-functions-string.php
→ A função que iremos abordar é bem simples, vai juntar duas cores em um elemento que você queira com um “peso” de junção de elementos;

>>Como deixar o site mais rápido com Minify
→ O minify é algo bem simples que mesmo sendo simples, deixa o site um pouco mais rápido: ele vai deixar o css em apenas 1 linha, que vai facilitar um pouco o carregamento dele na página;
→ Você precisa simplesmente usar o seguinte código no terminal, e dessa forma o css vai para uma linha só;
sass - -watch a.scss:a.css - -style compressed