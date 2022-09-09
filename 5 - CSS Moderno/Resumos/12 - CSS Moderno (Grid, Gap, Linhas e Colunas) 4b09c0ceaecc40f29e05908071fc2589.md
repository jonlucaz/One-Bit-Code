# 12 - CSS Moderno (Grid, Gap, Linhas e Colunas)

Created: September 9, 2022 8:22 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: CSS Moderno (5)
Aulas: Manipulando CSS Grid, Manipulando linhas e colunas.*

>>Manipulando CSS Grid
O ideal é usar Vh e % nas colunas para melhoras na responsividade

>Entendendo as colunas do grid
- Colunas são criadas por grid-template-column, podemos editar os tamanhos das colunas por % de cada coluna
 → Mas o mais responsivo de se usar nesse caso é o fr ou seja Frame.

>Entendendo o Gap
 - Assim como no flexbox temos o gap também no grid e funciona exatamente igual.

>grid-template-rows e grid-auto-rows
 - Agora com linhas, teremos o mesmo que nas colunas com o grid-template-rows.
 - Já o grid-auto-rows é muito parecido com o flex-basis e irá respeitar o tamanho que colocamos.

>>Manipulando Linhas e Colunas
>Entendendo o grid-column
 - Com o grid-column podemos fazer manipulação nos itens, fazendo com que cresçam de acordo com o que colocamos.
 Eles vão respeitar linhas, contando da primeira na esquerda para a direita, se nós temos 3 colunas, vamos ter 4 linhas.

>Entendendo grid-row
 - O grid-row é quase o “irmão” do grid column, e atua de forma muito parecida, só que com linhas.

>Entendendo grid-template-areas
 É um modo de desenhar o nosso layout, com ele, nós vamos ter basicamente o grid-column e o grid-row de forma “facilitada”,  fazendo com que consiguemos montar layouts de uma forma visual.