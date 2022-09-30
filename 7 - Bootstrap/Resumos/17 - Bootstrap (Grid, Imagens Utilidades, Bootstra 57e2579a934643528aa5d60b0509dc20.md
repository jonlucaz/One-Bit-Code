# 17 - Bootstrap (Grid, Imagens/Utilidades, Bootstrap com Sass, Ícones)

Created: September 27, 2022 7:49 AM

*O que eu entendi dessa aula. 
Curso: Full Stack JavaScript Profissional
Módulo: Bootstrap (7)
Aulas: Explicando teoria sobre Grid; Imagens e Utilidades; Manipulando Bootstrap com Sass; Ícones.*

>>Explicando a teoria sobre Grid

→ Dividido por divs;
→ Colunas de forma automática (opcional);
→ Breakpoints - 100% responsividade para celular;

>>Imagens e Utilidades

→ A primeira classe de imagem é a imagem fluída, que ela pode ser usada no topo de um site ou algo nesse sentido, e ela vai seguir o aspect-rate do site, você pode usar ela em um tamanho específico até certo tamanho de tela e depois deixar fluída;
→ O segundo tipo é a thumb, ela é uma imagem quadrada, pequena, que tem o aspecto padrão de 200x200, e você usa de acordo com o seu projeto;

>>Manipulando Bootstrap com Sass
→ Inicialização da aplicação com o npm;
npm init  -y
→ Instalação do bootstrap, através do npm
npm install bootstrap
→ Link com CSS
sass --watch ./node_modules/bootstrap/scss:node_modules/bootstrap/css

>>Ícones

→ Colocando esse comando no terminal, teremos os ícones do Bootstrap disponíveis para uso:
npm; bootstrap-icons
→ Podemos pesquisar pelo ícone na aba de pesquisa, podemos usar o exemplo do instagram, que vamos clicar nele, sendo redirecionado para outra página, e podemos ver que na lateral teremos o código desse ícone