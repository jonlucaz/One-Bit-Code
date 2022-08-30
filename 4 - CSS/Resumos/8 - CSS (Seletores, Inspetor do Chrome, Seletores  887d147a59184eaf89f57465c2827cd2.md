# 8 - CSS (Seletores, Inspetor do Chrome, Seletores Mais Avançados, Especificidade)

Created: August 19, 2022 8:41 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: CSS (4)
Aulas: Seletores, Inspetor do Chrome, Seletores Mais Avançados, Especifidade*

>>Seletores

>O que é?
 → Class - .moon → vários elementos
 → Id - #moon → mais específico

>Inspetor do Chrome
 → Botão inspecionar
 → Fazer testes “ao vivo”
 → Ferramenta fundamental

>>Seletores mais avançados
 → Star * - todos os elementos são selecionados
 → a - todas as âncoras (anchor) dentro de uma tag selecionada serão personalizadas (seletor de descendência)
 → Seletor Adjacente - colocar estilo em uma determinada tag somente se vier depois de outra tag pré estabelecida
 → Seletor de Atributo - por exemplo, achar um atributo que corresponda ao que queremos, a[href=’/recibo’], nesse caso só selecionará o href/recibo.

>>Especificidade
A especificidade determina quais regras CSS serão aplicadas.

 >Existe um cálculo para analisar qual seletor é mais importante
 → O navegador pontua o seletor de acordo com sua estrutura
 → Cada elemento, classe id, vale pontos para este cálculo
 → Pontuação 
   - Composta por 4 números (0,0,0,0)
   - Quanto mais a esquerda, maior a relevância da pontuação
   - Vamos chamar esses números de (a,b,c,d)
   - Regra da pontuação (sobrescrevendo a herança)
          °Cada elemento/pseudo elemento → id = +1 (0,0,0,1)
          °Cada classe/pseudo classe/atributo → c = +1 (0,0,1,0)
          °Cada id → b=+1 (0,1,0,0)
          °Estilo inline → a =+1 (1,0,0,0)

 * Quando há empate na pontuação, será considerado o último seletor à ser declarado *
 
>Em resumo
 → inline > id > classe > elemento