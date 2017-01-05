# Teste para Vaga Front-End AngularJS

Este exercício será utilizado para avaliar profissionais para a vaga de Frontend. 


## Como participar:

Para participar do teste, faça um Fork deste repositório e crie uma Branch nomeada com seu nome e sobrenome no formato **nome_sobrenome**.

Execute o exercício descrito a seguir e ao finalizar, faça um pull-request da sua branch para a master deste projeto.

O projeto deve ser executado em Angular 1.6 com uma geração de Bundle utilizando o Gulp(templatecache, uglify é um diferencial).

O layout é Livre e seu design será parte menor da avaliação, o importante é mostrar que você sabe utilizar HTML5, CSS3, JS. A folha de estilos deve ser criada utilizando LESS.

Por favor não envie o exercício utilizando typescript. O que deve ser avaliado é seu conhecimento em JS.


## Exercício


* Acesse a URL https://developer.yahoo.com/weather/
* O objetivo é retornar a previsão do tempo para São Paulo (woeid=455827)
* Utilize JSON como formato de resposta
* Crie uma página com uma tabela que mostre a condição do tempo (Estado, Data(Formato dd/mm/yyyy hh:mm:ss), Temperatura fahrenheit, Temperatura celsius, Previsão traduzida (Texto inglês para português))
* Atualize a tabela adicionando uma nova previsão quando ocorrer mudanças
* Deve ser incluída na página um **gráfico de linha (Line Chart)** mostrando a diferença entre as **5 maiores** temperaturas da tabela.
