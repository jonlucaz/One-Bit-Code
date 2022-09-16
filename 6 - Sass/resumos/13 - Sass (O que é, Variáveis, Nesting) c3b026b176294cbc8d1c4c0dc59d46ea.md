# 13 - Sass (O que é, Variáveis, Nesting)

Created: September 13, 2022 9:39 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: Sass (6)
Aulas: O que é e como funciona o Sass, Entendendo variáveis do Sass, O que é Nesting e como usar.*

>>O que é e como funciona o Sass

→ Frontend
→ Syntactically Awesome StyleSheet
→ Pré processado para depois virar CSS
→ Organizado e subdividido

>>Entendendo variáveis do Sass
As variáveis do Sass são locais onde são armazenados informações, que podem ser alteradas e também facilita o uso em vários elementos (se você quer que todos os botões de determinado lugar fiquem com a mesma cor, você pega uma variável dessa cor e usa).
Criamos uma variável com cores, por exemplo, para colocar em certos tipos de botões ou em certos tipos de background, depende de sua aplicação de fato.
  $btn-color: #ff4043;
Da mesma forma podemos colocar cores, pode também colocar tamanhos, como no exemplo abaixo
  $width-btn: 75px;
E assim todos os botões terão o mesmo width, e ficaria fácil de fazer a alteração caso seja necessário.

>>O que é Nesting e como usar
O Nesting é uma forma mais organizada de usar algo que já existe no CSS, que é quando você seleciona um elemento dentro de outro elemento para manipular ele.
O ruim disso é que você precisa iniciar novamente a classe na linha abaixo para manipular outro elemento, no nesting é muito mais simples
  .classe1 ul{ background-color: red;
  }

  .classe1 li{
             background-color: blue;
  }
O nesting você abre o bloco que você quer, podendo ser uma ID, uma classe, um elemento em sí e colocando os elementos que você quer manipular dentro dele, dessa forma, você consegue manipular todos os elementos em um único bloco, facilitando muito.
  .classe1{
        ul{
          background-color: red;
        }

        li{
          background-color: blue;
        }
  }