# 11 - CSS Moderno (Flex container, Flex-itens, Grid)

Created: September 6, 2022 10:19 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: CSS Moderno (5)
Aulas: Manipulando o Flex container, Manipulando Flex-itens, Visão geral sobre Grid.*

>>Manipulando o Flex Container

>Itens do Flex container
- Display: flex → Sinaliza o uso do flexbox;
- Flex-direction: row → Padrão de como os itens ficam no flex, em linha;
- Flex-direction: column → Muda a orientação das caixas para colunas;
- Row-gap → Espaçamento entre os itens (em linha) mas é usado quando o flex estiver em colunas;
- Column-gap → Espaçamento para quando flex estiver em linha;
- Gap → Junção dos dois gaps, aplica tanto para coluna quanto para linha;
- Justify-content → Faz centralizações horizontais;
- Align-items → Posicionamentos verticais;
- Flex-wrap → Quebra de itens quando não houver mais espaço.

>>Manipulando Flex-itens
>Flex-basis
 Flex-basis é o tamanho do item, a diferença para o width é miníma, mas o flex-basis é mais “correto”.

>Flex-grow
 É uma forma de aumentar o tamanho dos itens sem fazer com que elas quebrem de forma imediata.
 → Quando usada em um item específico ele fica maior que os outros.

>Flex-shrink
 Está ligado agora a diminuição do nossos itens, quando usado em um item específico irá diminuir mais que os outros. Mas se caso usemos 0 no shrink o item não diminuirá quando chegar e 200px.

>Entendendo o Flex
 O flex puro é quase que um atalho para o basis, grow e shrink:
ex: flex: 1 0 200px

>Entendendo o order
 É a ordem dos nossos itens. Nós temos a alteração da ordem dos itens vindos do reverse, seja ele column-reverse ou  row-reverse. Temos que colocar esse order individualmente.

>Align-self
 Como o nome mesmo diz, vai fazer o alinhamento único de um dos itens.

>>Visão geral sobre Grid
>O que é:
Assim como o flexbox, o grid é um organizador de layout. Com eles nós vamos ter uma divisão de linhas e colunas, é mais organizado que o flexbox.

>Para que serve:
Ele serve para organizar linhas e colunas, como em um blog por exemplo.

>Quando é utilizado:
Quando precisarmos de divisão de colunas.