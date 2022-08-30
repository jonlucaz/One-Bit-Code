# 7 - CSS (Básico do CSS, Cores no CSS, Background e Border)

Created: August 19, 2022 8:41 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: CSS (4)
Aulas: Básico do CSS, Primeiro CSS, Cores no CSS, Background e Border*

>>Básico do CSS

>O que é?
 → Cascade Style Sheets (Folha de Estilo em Cascata)
 → Linguagem que define o estilo de um documento HTML
 → Não é recomendado que seja definida dentro de um documento HTML

>Como funciona uma regra CSS

Bloco = Declaração
H1 {color: blue; font-size: 12px;} 
selector
property
value

 → O seletor aponta para o elemento HTML a ser estilizado
 → O bloco de declaração (entre chaves {}) contém uma ou mais declarações
 → Cada declaração é composta por 2 informações separadas por 2 pontos: propriedade e valor

>>Cores no CSS
Browsers modernos suportam 140 nomes de cores diferentes, por exemplo: green, red, blue.

>Cores podem ser especificados pelas seguintes formas
 - nome
 - valores RGB
 - Valores Hexadecimais
 - Valores HSL (CSS3)
 - Valores HWB (CSS4)

* Definir cores por nome não é uma boa opção *

>Forma muito utilizada: Hexadecimal
 → Hexadecimal é um sistema numérico que consiste em 16 símbolos diferentes: **[0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]
 →** Veja o valor de cada símbolo hexadecimal no sistema binário e decimal.

>Cor hexadecimal é definida por um conjunto de 6 símbolos
#RRGGBB 
red
green
blue

>>Background e Border
>Background
 → É uma **propriedade CSS** utilizada ara definir efeitos de background de um elemento (o que vai ser exibido ao fundo do elemento)

 * A principal propriedade CSS usada relativa ao background é background color *
 
>Background-Color
 → Background-color é uma propriedade utilizada para definir a **cor de fundo** de um elemento

>Background-Image
  → Background-image é uma propriedade que especifica uma imagem como fundo de um elemento.
* background-repeat → se vai repetir ou não a imagem no background (no repeat) *
* background-size → cover (capa), contain (conter) *

>Border
 → Border é uma propriedade do CSS utilizada para definir o estilo, largura e cor da borda de um elemento.