# 10 - CSS Moderno (Responsividade, Media Query, Flex-Box)

Created: September 5, 2022 10:18 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: CSS Moderno (5)
Aulas: Visão geral sobre responsividade, Entendendo Media Query, Responsividade na Prática - Mobile First, Visão geral sobre Flex-Box.*

>>Visão geral sobre responsividade

>O que é e como funciona?
1 → A responsividade nada mais é do que a mudança do layout para diferentes tamanhos de tela. Com a responsividade, além de mudar coisas de lugar, podemos fazê-las serem substituídas.
2 → Podemos verificar a responsividade de um site no inspecionar, o certo na responsividade é “diminuir” (estreitar) o site se

>>Entendendo Media Query
 → Star * - todos os elementos são selecionados
 → a - todas as âncoras (anchor) dentro de uma tag selecionada serão personalizadas (seletor de descendência)
 → Seletor Adjacente - colocar estilo em uma determinada tag somente se vier depois de outra tag pré estabelecida
 → Seletor de Atributo - por exemplo, achar um atributo que corresponda ao que queremos, a[href=’/recibo’], nesse caso só selecionará o href/recibo.

>>Especificidade
>Definição:
Media Query consiste de um media type e pelo menos uma expressão que limita o escopo das folhas de estilo usando media features, tal como largura, altura e cor. Deixam a apresentação do conteúdo adaptado a uma gama específica de dispositivos, não precisando mudar o conteúdo em si.

>>Visão geral sobre Flex-Box
>O que é flexbox:
É um método de organização de layout. Com ele, você manipula itens dentro de um container de forma dinâmica, ou seja, independente do tamanho do container, os itens vão estar se adaptando a ele.

>Para que serve:
As aplicações que criamos, são acessadas de vários dispositivos. Assim, o flexbox vai organizar o container  de acordo com o tamanho do dispositivo. Com isso, nós podemos fazer diversas manipulações de forma automática para vários dispositivos.

>Quando é utilizado:
É muito utilizado quando queremos organizar coisas em linhas, e as vezes algumas manipulações que fazemos em coluna também. É muito comum ver o flexbox sendo utilizado em header e barra de navegação, pois com ele, nós fazemos a logo ficar em um canto e os botões de navegação em outro.