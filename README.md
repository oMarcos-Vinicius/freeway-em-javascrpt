# freeway-em-javascrpt
Aprendendo lógica de programação na ALURA | Criando o jogo Freeway

<h1>Módulo 01: Iniciando o projeto</h1>

>Introdução

<p>Olá, meu nome é Guilherme Lima e nesse curso vamos dar continuidade aos nossos estudos sobre Javascript recriando um jogo clássico super legal, o Freeway, em que tínhamos um personagem que tentava atravessar uma rodovia com vários carros passando. Este era um jogo de cartucho feito para o Atari e vamos recriá-lo utilizando a linguagem Javascript.<br>

Para visualizar como era o jogo da forma original, havia vários carros passando numa rodovia e conforme conseguíamos chegar até o outro lado dela, marcávamos pontos. Cada carro passava numa velocidade diferente e eles iam passando em forma de loop.<br>

No final do curso, teremos um jogo com uma trilha sonora, um personagem diferente e os carros passando na rua. Poderemos tentar atravessar a rua, e caso conseguirmos, marcaremos um ponto. Se por acaso colidirmos com algum carro passando pela rua, voltaremos para a posição original e perderemos os pontos.<br>

Aprenderemos tudo isso com o objetivo de ter um jogo consistente e pensando também no nosso código. Queremos um comportamento interessante para o jogo assim como um código interessante.<br>

Veremos como dividir nossos projetos em outros arquivos. Teremos um código só para o ator principal, nosso personagem, outro só para os carros. Aprenderemos também a trabalhar com listas e com laços de repetição usando o for.<br>

Trabalharemos com contadores e vamos criar várias funções. Vamos inserir nossas imagens e até músicas que estão no nosso computador no p5.<br>

Enfim, saberemos como utilizar várias opções para tornar nosso jogo bem completo.<br>

Preparado para esse desafio?</p>

> Background, carro e ator
<p>
Vamos iniciar nosso projeto já com o editor web do p5 ( https://editor.p5js.org) logado na conta.

Nas atividades anteriores a esse vídeo, em Preparando o ambiente, haverá um passo a passo explicando o que será necessário para a criação de uma conta para conseguir salvar os projetos.<br>

Temos alguns códigos escritos:<br>
```
function setup() {
    createCanvas(400, 400);
}
funtion draw() {
    background(220);
}
```
<br><br>
Clicaremos em "Play" e teremos o fundo cinza. Não é o que queremos para o projeto. No jogo original temos uma estrada com várias faixas, os carros e o personagem tentando atravessar a rua, além de um placar em cima. Recriaremos esse jogo com alguns elementos diferentes, mais bonitos do que os que se usava na época.
<br><br>
Usaremos um fundo de uma rodovia mesmo, e para isso carregaremos uma imagem que já estará no "Preparando o ambiente", assim como todas as demais que utilizarmos no curso estarão disponibilizadas para a criação de seu próprio projeto.
<br><br>
Para começarmos o carregamento da imagem, vamos observar que acima do código há a inscrição "sketch.js" na parte superior esquerda da tela, com uma seta ao lado apontando para ela. Clicaremos nessa seta e visualizaremos todos os arquivos referentes ao nosso projeto. Criaremos uma nova pasta chamada "imagem" e colocaremos todas as imagens que utilizaremos dentro dela. Clicaremos na seta para baixo em "project folder" e em "Add folder", ou adicionar uma pasta. Escreveremos "imagens" na janela que se abrirá para fazer a criação.
<br><br>
Terá sido criada a pasta, então clicaremos na seta do lado dela e clicaremos em "Add file", ou adicionar um arquivo. Clicaremos no quadrado da janela aberta e selecionaremos "ator-1.png", "carro-1.png", "carro-2.png", "carro-3.png", "estrada.png". Clicaremos em "Open" ou "abrir" e todas as imagens serão carregadas.
<br><br>
Voltaremos ao "sketch.js", local do código. e fecharemos a pasta de projeto clicando na seta. Nossa tela estará num formato quadrado. Vamos tornar a largura um pouco maior para ficar mais semelhante ao jogo, alterando o valor em createCanvas(500, 400)
<br><br>
Para inserir uma imagem dentro do jogo, nosso computador precisa da memória dele. Por exemplo, se for falado para pensar num carro ou numa vaquinha, saberemos o que são, pois já temos essas imagens na memória, Precisamos fazer o mesmo para o computador. Conseguimos colocar algo na memória do computador por meio de variáveis, como vimos na primeira parte de nosso curso, sobre Pong.
<br><br>
A primeira variável será imagemDaEstrada. Estamos utilizando camelCase, a regra da primeira letra ser minúscula e as outras palavras levarem a primeira letra maiúscula, uma convenção do Javascript. Queremos a imagem da estrada e já temos um local para armazená-la na memória. Ainda precisaremos fazer um pré-carregamento próprio do p5.js para poder utilizá-la.
<br><br>
Criaremos uma function preload(), ou seja, função de pré-carregamento. Vamos abrir e fechar chaves, conhecidos como bigodes. Dentro das chaves vamos inserir o código para carregar a imagemDaEstrada e atribuiremos a ela o carregamento com loadImage(). Nos parênteses colocaremos em qual lugar do computador a imagem está, e será na pasta "imagens". Vamos digitar o nome da pasta, uma barra / e o nome do arquivo, teremos loadImage("imagens/estrada.png"). Clicando no "Play" nada acontecerá porque não pedimos para desenhar essa imagem.
<br><br>

```

let imagemDaEstrada;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png")
}

```

Então, já teremos criado a variável e carregado a imagem, mas precisaremos pedir para que ela seja desenhada. Queremos que ela apareça no background, então vamos substituir o que está em background(220) na function draw(). Saberemos que o número será relacionado com a cor da imagem. Se colocarmos "000" vai aparecer um fundo escuro e se colocarmos "255" aparecerá um fundo branco. Queremos que o fundo seja a imagem da estrada e dessa forma teremos conseguido quando apertarmos o "Play".

```
let imagemDaEstrada;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png")
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
}
```

Ainda precisaremos recarregar as demais imagens. Para carregar nosso personagem, faremos o mesmo processo. Declararemos uma variável chamada imagemDoAtor e no pré-carregamento diremos que essa variável será igual ao loadImage e colocaremos o local em que ela está, dentro da pasta "imagens" com o nome "ator-1.png", e teremos imagemDoAtor = loadImage("imagens/ator-1.png") dentro da função preload().
<br><br>
Se ligarmos o jogo, ainda não vai funcionar. Por quê? Porque para podermos fazer esses objetos aparecerem de fato na tela, eles precisam estar dentro da função draw() que os desenha na tela. Para isso, usaremos a palavra image() dentro da função e passaremos dentro dos parênteses dela a imagem que queremos mostrar, imagemDoAtor como primeiro parâmetro.
<br><br>
Em qual posição queremos mostrá-la será o segundo parâmetro. Para relembrar os posicionamentos, o canto superior esquerdo da tela do nosso jogo será o nosso "0". Conforme vamos para a direita, nosso valor aumentará. Então, este parâmetro será nosso "x", o quanto nosso objeto estará para a direita ou para a esquerda da tela. Como queremos que ele esteja próximo ao canto esquerdo, o colocaremos na posição "100", tendo em vista que nossa tela tem"500" de largura.
<br><br>
O terceiro parâmetro será a posição "y" do objeto. Nossa tela tem "400" como valor de altura. O personagem do jogo deverá aparecer na parte inferior, por isso, se o final da tela é "400", vamos chutar um valor como "366".

```
let imagemDaEstrada;
let imagemDoAtor;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png")
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
    image(imagemDoAtor, 100, 366)
}
```
Testando, aparecerá uma vaquinha gigante porque ela veio do tamanho original. Podemos alterar o tamanho dela passando mais dois parâmetros, a altura e a largura da nossa imagem. Testaremos os valores "30" e "30" para ambos image(imagemDoAtor, 100, 366, 30, 30). Vamos testar e teremos nossa personagem, a vaquinha, que no jogo original, era uma galinha bem pixelada tentando atravessar a rua.
<br><br>
Já temos nosso ator, mas ainda não temos nosso principal desafio no jogo, que são os carros. Colocaremos a imagem declarando a variável imagemCarro e fazendo o pré-carregamento com imagemCarro = loadImage("imagens/carro-1.png"). Usaremos o "carro-1", apesar de termos 3 opções de carros. Por último, precisaremos desenhá-lo dentro da função draw().
<br><br>
Nesse passo precisaremos informar a posição que queremos nosso carro, o valor "x" dele. Queremos nosso carro no canto superior direito da tela. No nosso jogo teremos 6 faixas e usaremos esses padrões para nossa estrada. Ele estará próximo do limite da largura da nossa tela, então colocaremos "400". Também passaremos uma altura para ele de "100".

```
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
    image(imagemDoAtor, 100, 366, 30, 30);
    image(imagemCarro, 400, 100)
}
```

Faremos o teste ligando e aparecerá um carrinho mas ele estará muito grande e mal posicionado. Vamos melhorar esses valores colocando para a imagem do carro uma altura menor, "96", e diminuiremos o tamanho dele, assim como fizemos com nossa vaquinha. Passaremos "40" de largura e "50" de altura. O porém agora será que o carrinho estará na segunda faixa e queremos que ele esteja na primeira. Para isso diminuiremos a posição do "y" utilizando "40" em vez de "96". Também alteraremos o posicionamento na largura da tela para "420".

```
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
    image(imagemDoAtor, 100, 366, 30, 30);
    image(imagemCarro, 420, 40, 50, 40)
}

```

Agora sim o carrinho estará no lugar que gostaríamos. Lembrando que no desenvolvimento do nosso jogo, quando inserimos alguns itens precisaremos mesmo fazer testes até que eles estejam nas posições que achamos as mais adequadas. Vamos executar sempre que fizermos alguma modificação para nos certificar de que tudo estará conforme o esperado. Então temos nosso background, personagem e carro, mas nosso jogo está parado.
<br><br>
No próximo vídeo vamos dar vida para o jogo.
</p>

> Movimentando ator e carro

<p>Deixamos o visual do nosso jogo muito mais interessante, mas ele ainda não tem movimento.</p>

<p>Vamos começar movimentando o carro. Precisamos de alguma forma conseguir alterar a posição "x" do carro. Quando colocamos a imagem, passamos os valores para posicioná-la.</p>

```
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
    image(imagemDoAtor, 100, 366, 30, 30);
    image(imagemCarro, 420, 40, 50, 40)
}

```

<p>Porém, pode ser que não esteja claro o que sejam esses valores para quem olhar o código, apesar de nós, que desenvolvemos, sabermos quais são as posições "x" e "y". Mas para tornar o jogo ainda mais compreensível, criaremos uma variável para o carro, por exemplo, a xCarro, e atribuiremos a ela o valor "420" da posição. Assim, em vez de passar "420" como parâmetro para a image() na função draw(), passaremos xCarro e teremos o mesmo resultado.</p>

<p>Agora queremos movimentar o carro. Nosso código pode ficar confuso, pois estamos alterando o background, desenhando um ator e um carro utilizando só as funções iniciais e image(). Para manter nosso código organizado, criaremos uma função chamada function mostraAtor(). Dentro dela, executaremos a image() responsável por mostrar o ator. Para ela funcionar, vamos chamá-la na função draw() . Veremos que dessa forma nosso código ficará muito mais organizado.</p>

<p>Teremos desenhado o background, depois mostraremos o ator e também a imagem do carro em seguida. Criaremos mais uma função e chamá-la de mostraCarro(). Dentro do corpo da função, passaremos o image(imagemCarro, xCarro, 40, 50, 40) e colocaremos ponto e vírgula ao final (;), ainda que seja opcional. Na função draw() chamaremos a função mostraCarro(). Teremos o mesmo resultado.</p>

<p>Agora que conseguimos visualizar nosso código um pouco mais claramente, criaremos uma função para de fato conseguir movimentar o carro, movimentaCarro(). Nosso carro está começando na posição "420". Podemos deixá-lo ainda mais longe, fora da tela, partindo de "600". Queremos que ele, partindo dessa posição, apareça na tela e depois saia. Para isso, teremos o valor "x" do carro. Como queremos que ele passe a tela, podemos subtrair esse valor. Pensaremos que quanto mais do lado esquerdo ele estiver, menor será o valor de "x". Por isso. na função movimentaCarro(), escreveremos que xCarro = xCarro - 2, por exemplo, apenas para conseguir visualizar isso.</p>

<p>Ligaremos clicando no "Play" e veremos nosso carrinho passando da direita para a esquerda. Temos o primeiro movimento do carro. É interessante dizer que quando queremos alterar o valor de uma variável não é necessário escrever dessa forma xCarro = xCarro - 2. Existe uma forma simplificada de fazermos isso, escrevendo xCarro -=2. O resultado será um comportamento igual.</p>

<p>
    Também queremos movimentar meu personagem. A vaquinha deverá andar quando utilizarmos as setas do teclado, por exemplo. Dessa forma, as setas servirão para movimentar a vaquinha para cima e para baixo. Este será o mesmo comportamento obtido para o jogo do Pong, em que tínhamos as raquetes e movimentávamos elas para cima e para baixo. Chamaremos uma função dentro da draw() para isso, movimentaAtor(), e faremos a criação dessa função abaixo. Nela vamos verificar que se a tecla estiver pressionada para baixo, ou seja, if(keyIsDown). Para conseguirmos pegar a tecla para cima, a referência dela será (UP_ARROW), ficando if(keyIsDown(UP_ARROW)). Como temos um if, isso significa que uma ação será executada se essa tecla estiver pressionada. O if também terá um corpo, definido por abrir e fechar chaves.

</p>   
<p>Criaremos o "y" para nosso ator . Comentaremos para poder indicar a que cada código diz respeito, como fizemos com o carro, para criar yAtor. Atribuiremos a ele o valor que tínhamos definido, "366". Na função mostraAtor passaremos yAtor() no lugar de "366" e quando a tecla para cima estiver pressionada, movimentaremos o ator.</p>

<p>Sendo assim, o yAtor será alterado. Subtrairemos yAtor -= 3 e vamos testar. Executando, nosso jogo funcionará. Quando apertarmos pra cima, a vaquinha andará.</p>

<p>Já teremos o primeiro desafio, clicando na tela, o carro passará e a vaquinha atravessará a rua. Mas não queremos que o personagem vá só pra cima. Copiaremos esse código com "Ctrl + C" e colaremos com "Ctrl + V". Substituiremos UP_ARROW pela seta para baixo DOWN_ARROW e ao invés de subtrair 3, somaremos 3. Agora conseguiremos ir para cima e para baixo com nosso personagem.</p>

```
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//carro
let xCarro = 600;

//ator
let yAtor = 366;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function mostraCarro(){
  image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

```

<p>Nosso jogo terá movimento. Entretanto, teremos muitas linhas de código para alcançar esse resultado. Temos códigos para o fundo, o carro, o ator e para os movimentos. A seguir pensaremos formas de estruturar melhor nosso código para dar continuidade ao projeto.</p>

<h1>Módulo 02. Dividindo o código e carros para sempre</h1>

>Dividindo códigos em arquivos

<p>Criamos os primeiros movimentos do nosso jogo. Conseguimos movimentar nossa vaquinha por meio das setas e visualizar o carro passando.</p>

<p>Mas nesse arquivo "sketch.js" temos quase 50 linhas de código com muitas responsabilidades diferentes. Há um código responsável pelo ator, um pelo carro, outro pelo jogo, enfim, muitas ações num mesmo arquivo, e isso pode nos confundir a medida que nosso projeto cresce.</p>

<p>Para organizar melhor nosso desenvolvimento, criaremos um arquivo .js só para o ator, um só para o carregamento da imagem e um só para o carro. Assim, a divisão ficará muito mais clara e se tornará muito mais fácil trabalharmos.</p>

<p>Em primeiro lugar, criaremos um arquivo para as imagens, Só para o carregamento das imagens temos 8 linhas de código contando com as variáveis e a função de pré-carregamento. Clicaremos na seta para baixo em "project folder" e selecionaremos a opção "Add file" para selecionar um arquivo novo que chamaremos de "imagens.js". Vamos recortar as variáveis referentes às imagens e colar no arquivo novo. Faremos o mesmo com a função preload().</p>

```
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
}

```

Rodaremos para ver se o jogo está funcionando e ele ficará carregando sem que nada apareça. A mensagem de erro alertará que imagemDaEstrada não foi definida. Na verdade ela foi definida, o que acontece é que não teremos apenas o código do "sketch.js" sendo executado.

<p>Para conseguir definir que um código Javascript deve ser executado durante o jogo, faremos isso no "index.html". Dentro da tag body teremos o script que fala para executar um código e ele só terá o "sketch.js". Por isso copiaremos essa linha para baixo e substituiremos "sketch.js" por "imagens.js", ficando script src=""imagens.js"script no index.</p>

<p>Agora daremos "Play" e nosso jogo estará funcionando da mesma forma anterior, com a responsabilidade dividida. Fizemos isso para as imagens , agora criaremos um arquivo com o código Javascript com as responsabilidades referentes ao ator. Clicaremos novamente na seta para baixo próxima a "project folder" e selecionaremos "Add file", chamando o novo arquivo de "ator. js". Vamos clicar em "Add" será adicionado o arquivo.</p>

<p>Tudo que for relacionado ao ator será enviado para esse código. Comentaremos //código do ator para deixar claro do que se trata, assim como //Imgens do jogo em cima do código em "imagens.js".</p>

<p>Em "ator.js" teremos yAtor e a função que mostra o ator, que precisaremos copiar de "sketch.js" e depois remover daquele arquivo. Para isso podemos usar o atalho "Ctrl + x". O código que movimenta o ator também será necessário.</p>

```
//código do ator
let yAtor = 366;

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

```

<p>
    Em "index.js" criaremos mais uma linha de script para "ator.js", script src="ator.js" script. Vamos executar e aparecerá o ator, com o jogo funcionando perfeitamente mais uma vez.

</p>    

<p>Agora adicionaremos um novo arquivo chamado "carro.js" e comentaremos //código do carro. Copiaremos de "sketch.js" os códigos do carro, a variável xCarro, a função para mostrá-lo e a para movimentá-lo. Mais uma vez vamos ao "index" para referenciar esses códigos com mais uma tag, script src=""carro.js" script.</p>

```
//código do carro

let xCarro = 600;

function mostraCarro(){
  image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;
}
```

<p>
    Conseguimos fazer o jogo funcionar com todas as responsabilidades divididas agora.

</p>    
<p>Nossa função principal do jogo,"sketch.js", ficará com as funções setup() e draw(), a função que desenha. Nela colocamos como imagem de fundo a imagemDaEstrada, mas as imagens vem do arquivo criado só para elas, em que carregamos as imagens do jogo. E durante o desenvolvimento, ainda vamos carregar outras imagens. Por isso é importante fazer essa separação.</p>

<p>Olhando o arquivo do ator, teremos o yAtor, mas podemos melhorar o código criando um xAtor, pois o valor "100" será o da posição de "x" do nosso ator na imagem.</p>

```
//código do ator
let xAtor = 100;
let yAtor = 366;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}
```

<p>No carro, faremos o mesmo. Já temos xCarro e criaremos yCarro que será igual a posição "40", para padronizar o código.</p>

```
//código do carro

let xCarro = 600;
let yCarro = 40;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;
}
```
<p>
    Executaremos o teremos o mesmo comportamento com um código muito mais claro com as devidas divisões de responsabilidades.
</p>

>Adicionado mais carros

<p>Agora que dividimos as responsabilidades de código para cada arquivo, vamos colocar mais dois carros no nosso jogo.</p>

<p>No código de imagens temos apenas um carro, portanto precisamos carregar a imagem dos outros carros, 2 e 3. Já temos as demais imagens carregadas, pois subimos anteriormente, então vamos copiar esse código.</p>

<p>Criaremos a variável imagemCarro2 e imagemCarro3. Copiaremos a linha de código para carregar a imagem dentro da função preload() para baixo e substituiremos para os carros novos no caminho. Teremos, então loadImage("imagens/carro-2.png") e loadImage("imagens/carro-3.png").</p>

```
// imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
}
```

<p>Precisaremos desenhar essas imagens na tela. Vamos para o código do carro e notaremos que as variáveis xCarro e yCarro serão referentes ao primeiro carro. Por isso vamos comentar //carro 1 sobre elas para tornar isso claro. Na sequência vamos declarar xCarro2 e yCarro2. Atribuiremos valores para posicioná-los depois e vamos testar se eles ficarão como gostaríamos.</p>

<p>Vamos agora desenhar a imagem do segundo carro na função draw(). Ambos os carros podem partir do mesmo lugar, do eixo "x" com o valor "600". Mas queremos que o eixo "y" do carro de baixo seja maior, para que ele fique na faixa de baixo. Testaremos o valor "96".</p>

<p>Porém, queremos que o movimento dele seja diferente. Para o primeiro, deixamos "-2" para a movimentação. Agora o carro deverá se mover mais rápido, por isso faremos xCarro2 -= 3.</p>

```
//código do carro

//carro 1
let xCarro = 600;
let yCarro = 40;

//carro 2
let xCarro2 = 600;
let yCarro2 = 96;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 50, 40);
  image(imagemCarro2, xCarro, yCarro, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;
  xCarro2 -= 3;
}
```

<p>Vamos ligar e executar. A imagem de um carro aparecerá, mas não a do outro, porque quando copiamos nosso código deixamos a imagem do carro 2, mas o "x" e o "y" do carro 1, um dos perigos de copiar e colar. Vamos corrigir isso no código alterando para os eixos corretos do carro 2, image(imagemCarro2, xCarro2, yCarro2, 50, 40), e executaremos novamente. Dessa forma veremos dois carros passando com velocidades diferentes agora.</p>

<p>Precisamos acrescentar o terceiro carro por meio do mesmo processo, declarando as variáveis xCarro3 a qual atribuiremos o valor "600" e yCarro3, que testaremos atribuir "150".</p>

<p>Vamos copiar e colar a linha do pré-carregamento tomando cuidado para passar corretamente o "x" e o "y" do carro 3. Também precisaremos alterar o movimento do carro, e usaremos um valor intermediário entre os demais carros, xCarro3 -= 2.5.</p>

```
//código do carro

//carro 1
let xCarro = 600;
let yCarro = 40;

//carro 2
let xCarro2 = 600;
let yCarro2 = 96;

//carro 3
let xCarro3 = 600;
let yCarro3 = 150;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 50, 40);
  image(imagemCarro2, xCarro2, yCarro2, 50, 40);
    image(imagemCarro2, xCarro3, yCarro3, 50, 40);

}

function movimentaCarro(){
  xCarro -= 2;
  xCarro2 -= 3;
    xCarro3 -= 2.5;
}
```

<p>Agora quando executarmos já teremos os três carrinhos passando. Mas é importante pensarmos um pouco melhor sobre a legibilidade do código. Se outra pessoa visse nosso código, ela conseguiria entendê-lo?</p>

<p>Os valores xCarro -= 2, xCarro2 -= 3 e xCarro3 -= 2.5 não são nada mais do que a velocidade com que os carros vão passar na tela. Se alterarmos para xCarro2 -= 5 e executarmos, veremos o carro passando muito mais rápido que os demais.</p>

<p>Então escreveremos que essa se trata da velocidade dos carros, criando variáveis para cada um. A velocidadeCarro1 será igual a "2", velocidadeCarro2 será igual a "3" e velocidadeCarro3 será "2.5". Executando, tudo funcionará, mas escolheremos uma faixa para ser a mais rápida.</p>

<p>A primeira faixa, de cima, será a mais lenta. Na segunda, o carro será um pouco mais rápido que na primeira. E na terceira, mais rápido do que em todas as outras. Então, para testarmos, o primeiro carro terá velocidade "2", o segundo, "2.5" e o terceiro "3.2".</p>

<p>Sendo assim, ficou muito mais fácil alterar a velocidade dos carros com essa sintaxe, pois a clareza está muito maior.</p>

```
//código do carro

//carro 1
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro1= 2;

//carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2= 2.5;

//carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3= 3.2;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 50, 40);
  image(imagemCarro2, xCarro2, yCarro2, 50, 40);
    image(imagemCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro(){
    xCarro -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}
```

>Criando Listas

<p>Nosso jogo tem um comportamento interessante. Quando ligamos, temos três carros, nosso personagem se movimenta, os carros passam e reaparecem na tela.</p>

<p>Mas um ponto importante a ser ressaltado é que temos três variáveis para o carro 1, três para o carro 2 e três para o carro 3. Ou seja, há muitas variáveis para fazer algo semelhante.</p>

<p>Conseguimos melhorar essa quantidade de variáveis utilizando listas e aprenderemos agora como podemos trabalhar com elas.</p>

<p>Nossa primeira ação será criar uma variável da mesma forma que tínhamos antes, com o let, e chamaremos de yCarros. Diremos que ela é igual a uma lista. Uma lista é uma estrutura de dados para inserirmos os dados que queremos e recuperamos essas informações por meio de índices. Indicamos que queremos criar uma lista com colchetes. Então, tudo que colocarmos dentro dos colchetes atribuídos à lista yCarros fará parte dela. Colocaremos o valor "y" de cada carro nesse espaço. O "y" do carro 1 será "40", o do 2, "96", o do 3, "150". Teremos yCarros = [40, 96, 150].</p>

<p>Agora que criamos nossa lista, precisamos ver como recuperar esse valor para utilizar no código. Para conseguirmos visualizar no nosso console, colocaremos um print() na função mostraCarro() e dentro dele diremos que nossa intenção é ver a posição 1 de yCarros para ver o que será retornado.</p>

```
//código do carro

let yCarros = [40, 96, 150]; 

//carro 1

let xCarro = 600;
let yCarro = 40;
let velocidadeCarro1 = 2;

//carro 2

let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 2.5;

//carro 3

let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 3.2;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 50, 40);
  image(imagemCarro2, xCarro2, yCarro2, 50, 40);
  image(imagemCarro3, xCarro3, yCarro3, 50, 40);
        print(yCarros[1]);
}

function movimentaCarro(){
  xCarro -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

function voltaPosicaoInicialDoCarro(){
  if (xCarro < -50){
    xCarro = 600
  }
  if (xCarro2 < -50){
    xCarro2 = 600
  }
  if (xCarro3 < -50){
    xCarro3 = 600
  }
}
```

<p>Pressionaremos o "Play" e será retornado o "96" para nós algumas vezes, o segundo elemento da lista. Mas por que ele voltou o "96" e não o "40"?</p>

Acontece que quando utilizamos listas, nosso primeiro elemento, no caso o "40", será recuperado a partir do índice 0. Na lista yCarros = [40, 96, 150] "40" será a posição 0, "96" a posição 1, e "150" a posição 2.

<p>Se colocarmos print(yCarros[0]) em mostraCarro() será mostrado o valor "40" no console. Para print(yCarros[2]) será mostrado "150", nosso terceiro elemento da lista. Devemos sempre lembrar desse detalhe.</p>

<p>Agora que sabemos como recuperar esses valores, podemos remover as três variáveis yCarro1, yCarro2 e yCarro3, pois q partir de agora usaremos nossa lista. Na função mostraCarro , para começar, passaremos yCarros[0], o primeiro elemento, como terceiro parâmetro na primeira linha de image(). Na segunda, yCarros[1], o segundo elemento. Em seguida, yCarros[2], o terceiro elemento.</p>

```
//código do carro

let yCarros = [40, 96, 150]; 

//carro 1

let xCarro = 600;
let velocidadeCarro1 = 2;

//carro 2

let xCarro2 = 600;
let velocidadeCarro2 = 2.5;

//carro 3

let xCarro3 = 600;
let velocidadeCarro3 = 3.2;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarros[0], 50, 40);
  image(imagemCarro2, xCarro2, yCarros[1], 50, 40);
  image(imagemCarro3, xCarro3, yCarros[2], 50, 40);
}

//trecho do código omitido
}
```

<p>Pressionaremos "Play" e nosso jogo estará funcionando da mesma forma. Essa será uma maneira de melhorar nosso código. Já que criamos uma variável para a posição "y" dos carros, criaremos também para a velocidade. velocidadeCarros será igual a uma lista e passaremos os valores. velocidadeDoCarro1 é "2", e ficará como a posição 0, velocidadeDoCarro2 é "2.5" e ficará como a posição 1 e velocidadeDoCarro3 é "3.2" e ficará como a posição 2 no índice. Removeremos as três variáveis de velocidades do código e alteraremos a função movimentaCarro(). No lugar em que atribuíamos as variáveis a xCarro, xCarro2 e xCarro3, colocaremos velocidadeCarros[] com as devidas posições correspondentes à velocidade de cada carro.</p>

```
//código do carro

let yCarros = [40, 96, 150]; 
let velocidadeCarros = [2, 2.5, 3.2];

//carro 1
let xCarro = 600;

//carro 2
let xCarro2 = 600;

//carro 3
let xCarro3 = 600;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarros[0], 50, 40);
  image(imagemCarro2, xCarro2, yCarros[1], 50, 40);
  image(imagemCarro3, xCarro3, yCarros[2], 50, 40);
}

function movimentaCarro(){
  xCarro -= velocidadeCarros[0];
  xCarro2 -= velocidadeCarros[1];
  xCarro3 -= velocidadeCarros[2];
}

//trecho do código omitido
}
```

<p>Vamos rodar e o jogo continuará funcionando. Ainda faltará criar uma lista para xCarros. Dentro dela, os valores serão: xCarros = [600, 600, 600]. Removeremos as três variáveis que não serão mais necessárias e teremos reduzido de 9 variáveis para três listas.</p>

<p>Nos lugares em que apareciam as variáveis das posições "x" dos carros, substituiremos pelas posições no índice. Primeiramente na função mostraCarro() e na sequência em movimentaCarro().</p>

<p>Por fim, em voltaPosicaoInicialDoCarro(), em que fazemos a verificação para os carros voltarem a aparecer na tela, também substituiremos. Se xCarros no índice 0 for menor que "-50" voltaremos a xCarros nesse mesmo índice, para essa posição. No if seguinte o processo será o mesmo para xCarros no índice 1 e no próximo, para xCarros no índice 2.</p>

```
//código do carro

let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150]; 
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro(){
  image(imagemCarro, xCarros[0], yCarros[0], 50, 40);
  image(imagemCarro2, xCarros[1], yCarros[1], 50, 40);
  image(imagemCarro3, xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] < -50){
    xCarros[0] = 600
  }
  if (xCarros[1] < -50){
    xCarros[1] = 600
  }
  if (xCarros[2] < -50){
    xCarros[2] = 600
  }
}
```
> Laços de repetição

<p>Ligaremos o jogo e ele estará funcionando igualmente, e conseguimos melhorar muito nosso código sem alterar o comportamento dele!</p>

<p>Conseguimos melhorar nosso código usando listas, mas ainda temos muito código duplicado.</p>

<p>Na função que mostra os carros temos na primeira linha do corpo a imagem do primeiro carro e o índice do carro tanto para o "x" quanto para o "y" do carro. Na segunda linha, há a imagem do carro 2 e o "x" e "y" do carro no índice 1. O mesmo acontecerá na terceira linha para a imagem 3.</p>

<p>Estamos criando um padrão para nosso código, mas a imagem do carro não está padronizada. Há 3 variáveis diferentes para as imagens dos carros e poderíamos colocar todas elas dentro de uma lista, para escrevê-las no código de acordo com um índice também.</p>

<p>Na aba do "project folder", vamos em "imagens.js" e criaremos uma lista que chamaremos de imagemCarros. Atribuiremos colchetes a ela para indicar que se trata de uma lista e dentro da lista colocaremos as três variáveis referentes às imagens.</p>

```
// imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3];
}
```
<p>Voltaremos para "carros.js" e faremos as devidas substituições na função mostraCarro, padronizando o código, já que as imagens dos carros serão referenciadas a partir do índice, assim como as posições "x" e "y" :</p>

```
//código do carro

let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150]; 
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro(){
  image(imagemCarros[0], xCarros[0], yCarros[0], 50, 40);
  image(imagemCarros[1], xCarros[1], yCarros[1], 50, 40);
  image(imagemCarros[2], xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] < -50){
    xCarros[0] = 600
  }
  if (xCarros[1] < -50){
    xCarros[1] = 600
  }
  if (xCarros[2] < -50){
    xCarros[2] = 600
  }
}

```
<p>Vamos executar e apareceram os três carros, nosso jogo está funcionando normalmente. Temos um padrão, mas continuamos com muitas linhas de código muito semelhantes. Na mesma função mostraCarro(), a diferença entre as três linhas responsáveis por desenhar os carros na tela é apenas o índice.</p>

<p>Será que existe alguma forma de executar esses códigos e o computador já alterar, para não precisarmos repetir as posições?</p>

<p>Existe. Uma das formas de pedir para nosso computador repetir instruções de código que queremos passar é por meio da palavra for. Assim como usamos parênteses no if, também usaremos no for, passando parâmetros para ele.</p>

<p>Queremos repetir a linha da ìmage() dentro de mostraCarro(). O primeiro parâmetro que passaremos para o for será uma variável para indicar que haverá repetição. Criaremos uma variável dentro dele que chamaremos de i e atribuiremos o valor "0" a ela. Depois precisamos falar quantas vezes queremos repetir esse i. Temos 3 elementos na lista, 3 imagens do carro. Será que podemos pedir para que seja criada a imagem do carro já com a quantidade de elementos da lista?</p>

<p>A forma de fazer isso será passar como parâmetro a condição de repetir o código enquanto o i for menor do que a quantidade de imagens que temos dos carros, o que podemos acessar por meio da palavra length. Utilizando essa palavra, conseguimos saber quantos dados temos dentro da lista.</p>

<p>Colocaremos ponto e vírgula e deixaremos um espaço referente ao terceiro parâmetro. Começamos com o i = 0, depois, o código perguntará a quantidade de carro que temos com i < imagemCarros.length. "0" é menor do "3", é verdade, então ele começará uma instrução, por isso abriremos colchetes para indicar que o que estiver dentro dos colchetes será executado. As 3 imagens irão para o corpo desse for.</p>

<p>A cada repetição do for precisamos mudar o valor de i. Na primeira repetição, ele deverá ser "0" para a imagem do carro, a posição de "x" e a de "y". 'Na segunda, ele deverá ser "1". Por isso, devemos pegar o valor de i e somar com 1. Como ainda temos um terceiro parâmetro para passar, vamos colocá-lo como i = i + 1. Então na segunda repetição o i valerá "1" nos três aspectos. Na terceira vez que ele for repetir, o i já valerá "1", e a operação realizada será i = 1+1 ou seja, "2". "2" é menor do que "3", então o valor de i será substituído.</p>

<p>Agora a mágica acontece. Removeremos as duas das de dentro do for, deixando apenas uma, que desenhará os três carros. Então teremos criado um for, criado uma variável i, e feito uma comparação com a variável para que enquanto ela, que começa com "0", for menor do que a quantidade de imagemCarros, os carros serão desenhados.</p>

<p>Criaremos um print() dentro do for apenas para visualizar isso acontecendo. Passaremos entre aspas duplas "O valor do i nesta repetição é " + i.</p>

```
function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    print("O valor do i nesta repetição é " + i)
    }
}
```
<p>Vamos executar o código e o código fará a repetição as três vezes, por meio do processo do valor de i ser "0", depois ser "1" e depois "2", e não poder ser "3" porque precisa ser menor do que a quantidade de dados de imagemCarros.</p>

<p>Como ele está desenhando isso várias vezes, os carrinhos estão sendo desenhados devagar, com bug. Tiraremos o print(), pois não precisaremos mais dele. Só servia para vermos que as repetições estavam sendo feitas. Quando dermos "Play" novamente, os três carros aparecerão passando na tela com o uso do for para repetir o código e diminuir o número de linhas semelhantes.</p>

<p>Conseguimos o mesmo resultado utilizando ainda menos códigos. Na sequência, usaremos o for também nas outras funções.</p>

>Melhorando o Código

<p>Refatoramos nossa função que mostra os carros. Vamos refatorar também a função que movimenta os carros.</p>

<p>A diferença entre as três linhas da função movimentaCarro() é apenas o índice. Então resolveremos isso com um for, da mesma forma que fizemos com mostraCarros. Esse for terá um valor que se alterará a cada loop. Colocaremos a variável de contador, i, com o valor 0 para a primeira repetição, 1 na segunda e 2 na terceira.</p>

<p>A condição será que enquanto i for menor do que imagemCarros.length, a cada repetição, aumentará um valor no contador i = i + 1.</p>

```
function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros[i];
        }
}
```

<p>Vamos rodar o jogo e os três carros passarão da mesma forma, sem termos mais as linhas de código duplicadas.</p>

<p>Agora faremos o mesmo para a função voltaPosicaoInicialCarro(). Temos as posições 0, 1 e 2 para cada um dos carros, e criaremos um for exatamente da mesma forma que fizemos na função anterior, com a condição de que enquanto i for menor do que o tamanho dos ítens da lista imagemCarros, i aumentará um valor. É importante dar um "Tab" para que o código no corpo do for, entre as chaves, fique bem indentado.</p>

<p>Então poderemos usar apenas uma repetição do if com o i no lugar do valor da posição de xCarros na lista.</p>

<p>Uma questão a ser levantada nesse momento é: o que a função voltaPosicaoInicialDoCarro() faz? Ela retorna os carros para posição inicial. Porém temos um if fazendo uma verificação se o xCarros de uma posição é menor do que "-50", ou seja, se o carro já passou toda a tela. Sendo assim, podemos melhorar esse código abstraindo isso para uma outra função.</p>

<p>Criaremos uma outra função que verifique se o carro passou toda a tela, e o carro terá passado toda a tela se xCarros[i] < - 50. Precisamos do resultado, ou do retorno dessa função. Utilizaremos a palavra return para isso.</p>

<p>Chamaremos a função passouTodaATela dentro do corpo de voltaPosicaoInicialDoCarro, com um if, pois diremos que se xCarros[i] passou por toda a tela, xCarros[i] = 60. '</p>

<p>Por fim, no retorno de passouTodaATela, sendo xCarros < -50, o código continuará executando outras operações.</p>

```
function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}
```

<p>Vamos rodar e o funcionamento do jogo continuará o mesmo.</p>

<p>Portanto, o que fizemos nesse vídeo foi melhorar nosso código abstraindo responsabilidades que faziam-no parecer muito repetitivo.</p>

<p>Na função voltaPosicaoInicialDoCarro criamos um for no código pela terceira vez e verificamos se xCarros[i] passou toda a tela, xCarros nessa situação pegará o índice do carro que ele estiver contando a partir do i, que pode ser o carro 1, o carro 2 ou o carro 3 nas posições 0, 1 ou 2.</p>

<p>Se ele passou toda a tela, queremos que xCarros[i], ou seja, nesse mesmo índice, retorne a "600". Tudo estará funcionando corretamente, pois os carros passam e depois voltam a aparecer.</p>

<p>Temos o mesmo código de antes, quando tínhamos aquelas 9 variáveis, mas de modo muito mais sofisticado: temos três listas, refatoramos os códigos para evitar que muitas linhas ficassem duplicadas, e apenas um image que executa 3 vezes, por ter um laço de repetição para isso. Também temos uma função movimentaCarros() que cria a movimentação do carro por meio da repetição e outra para o carro retornar à posição original, com outra verificação se ele passou toda a tela.</p>

<p>Até a leitura do código ficou mais simplificada, com if(passouTodaATela(xCarros[i])), pois entendemos que significa que se o carro correspondente ao índice passou toda a tela, ele voltará para "600".</p>

```
//código do carro

let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150]; 
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros[i];
        }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}

```
<h1>Módulo 4: Colisão + Carros e Pontos</h1>

>Criando colisão

<p>Nosso jogo está ficando muito legal, mas há um ponto muito importante que podemos melhorar nele.</p>

<p>Quando ligamos o jogo e movimentamos a vaquinha, não acontece nada se colidirmos com um dos carros. Conseguimos atravessar a rua como se nosso personagem fosse invisível e pudesse atravessar paredes, e não é o que queremos que aconteça.</p>

<p>Sempre que o personagem tentar atravessar a rua e colidir com um carro, ele deverá voltar para a posição inicial. Assim nosso jogo ficará muito mais desafiador.</p>

<p>A implementação da colisão será algo comum no p5. Vários outros projetos utilizam a detecção de colisão entre objetos, então alguém já solucionou esse problema e compartilhou a solução encontrada. Pegaremos essa solução e vamos incorporá-la no nosso projeto da mesma forma que fizemos na parte 1 do curso de Jogos Clássicos, com o Pong, em que pegamos uma biblioteca e a implementamos no nosso desenvolvimento.</p>

<p>Para fazer isso, vamos na https://editor.p5js.org/, clicaremos em Help & Feedback > Reference > Libraries". Scrollando um pouco essa página de bibliotecas, acharemos o link para "p5.collide2d". Clicando nele será aberto o GitHub com o código que vamos incorporar no nosso projeto, "p5.collide2d.js". Faremos o download desse código zipado e descompactaremos o arquivo para aproveitá-lo no nosso projeto. Poderemos descartar o .zip.</p>

<p>No p5, clicaremos na seta para baixo, ao lado de "project folder" e clicaremos em "Add file" para adicionar um arquivo. Clicaremos no espaço da janela que se abrirá e selecionaremos "p5.collide2d.js" para abri-lo. Clicando em "Open", ele aparecerá como o último arquivo de nossa lista na aba lateral esquerda da tela.</p>

<p>Para executar de fato esse código dentro de nosso projeto, vamos em "index.html" e assim como fizemos para a imagem, o ator e o carro, faremos também para nosso arquivo: adicionaremos uma linha de script src="p5.collide2d.js">/script>.</p>

<p>Ligaremos o jogo para conferir se tudo estará funcionando e aparecerá "p5.collide2d" no nosso console, ou seja, o código já estará disponível para a nossa utilização. A mensagem aparece no terminal porque na linha 8 do código há um console.log() que servirá apenas para conferirmos se ele estará incluso no projeto. Poderemos removê-lo, pois não precisamos mais que nenhuma mensagem escrita seja exibida, deixaremos nosso console limpo.</p>

<p>Já temos nossa colisão, será que ela estará funcionando? Não, pois precisamos passar os parâmetros para essa função. Não seria tão simples, mas o procedimento não será difícil também. Vamos ao código do ator e criaremos uma função para verificar se há colisão, verificaColisao(). No corpo da função escreveremos o código para a verificação.</p>

<p>Se observarmos as formas, nossa vaquinha será como um círculo, e os carros, retângulos. Por isso, buscaremos no GitHub da colisão a função referente e será collideRectCircle(). Clicaremos no link referente a ela, e veremos os parâmetros a ser utilizados para que funcione. Vamos copiá-los e colocá-los no corpo de verificaColisao() em forma de comentário, apenas para podermos visualizá-los.</p>

<p>Na documentação desse código é informado que o primeiro passo dele será a criação de uma variável para saber se está colidindo ou não, que é iniciada com false. No nosso caso faz sentido, pois nosso personagem parte de baixo da tela do jogo, e não está colidindo com ninguém ainda.</p>

<p>Geraremos a variável colisao e atribuiremos a ela o valor false, já que não há colisão no início.</p>

<p>Temos três carros e um personagem. Precisamos verificar a colisão nos três. Será que precisamos ver as posições "x" e "y" de cada carro e escrever tudo isso? Não, podemos utilizar o for, pois no código do carro já temos "x" e "y" de todos eles em lista. Assim, trabalhar com listas mais uma vez tornou o desenvolvimento do nosso código mais fácil.</p>

<p>Faremos um for, uma vez que já aprendemos a trabalhar com ele. Nos parâmetros criaremos a variável i, depois diremos que enquanto i for menor que a quantidade de imagens que temos, será somado um valor ao i a cada iteração.</p>

<p>Dentro do for, vamos verificar se há colisão. Precisamos lembrar que nossa variável de colisão está com valor falso e quem vai verificar de fato se acontece a colisão é a função collideRectCircle(), então escreveremos que colisao será igual ao retorno da função.</p>

<p>Precisaremos passar como parâmetro para essa função o "x1" e o "y1" do carro. "x1" e "y1" serão relacionados ao retângulo. Passaremos xCarros[i] para que seja feita a verificação dos carros nos índices 0, 1 e 2, ou seja, os três carros. Depois, yCarros[i] e depois o largura e altura dos carros.</p>

<p>Vamos conferi-los no código que já escrevemos e quando desenhamos nosso carro, passamos os valores "50" e "30" como largura e altura. Geraremos uma variável comprimentoCarro com o valor "50" e outra alturaCarro = 40. Então na image da função mostraCarros() usaremos essas variáveis no lugar dos valores, como fazíamos anteriormente.</p>

<p>Então, no código do carro, teremos:</p>

```
//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
```
<p>O jogo funcionará do mesmo modo. Então voltaremos ao código do nosso ator e continuaremos passando os parâmetros da função collideRectCircle(). Veremos no nosso comentário, embaixo da função verificaColisao(), o código da colisão solicita "width", nosso comprimentoCarro, e "heigth", a alturaCarro.</p>

<p>Teremos mais três parâmetros: "x" e "y" do círculo e o diâmetro dele. "x" será xAtor, "y", yAtor, e o diâmetro será "30". Porém, passaremos um valor menor para termos uma detecção melhor da colisão. Passaremos como "15" para testar.</p>

<p>Agora, vamos verificar com if. Iniciamos a colisão com falso. Ela deverá nos retornar um valor nessa condição que será um verdadeiro ou falso para afirmar se existiu a colisão ou não. Se houver colisão, imprimiremos "Colidiu".</p>

<p>Para executar a função, vamos em "sketch.js" e colocaremos verificaColisao() no corpo da função draw().</p>

```
//código do ator

let xAtor = 100;
let yAtor = 366;
let colisao = false;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      print("Colidiu")
    }
  }
}

```
<p>Daremos um "Play" e a princípio não há colisão. Posicionaremos nosso personagem na primeira faixa para aguardar o primeiro carro colidir nele. Quando ele bater na vaquinha, aparecerá a mensagem "Colidiu" no terminal. Testaremos para os três carros nos posicionando nas três faixas e o efeito será o mesmo.</p>

<p>Porém, no jogo nós não vamos mostrar uma imagem no console quando os carros colidirem no personagem. Nessa situação, nosso personagem voltará para a posição inicial dele.</p>

<p>Sendo assim, sempre que houver uma colisão chamaremos uma nova função chamada colidiu(). Dentro dela, vamos retornar o yAtor para a posição inicial dele, "366",</p>

```
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366;
}

```
<p>Ligaremos o jogo, aguardaremos a colisão e o ator voltará para sua posição inicial. Vamos testar para todos os carros e funcionará. Então, graças ao for e a lista que estamos utilizando, temos a colisão verificando todos os carros de uma vez.</p>

>Carros em todas as pistas

<p>Agora assim que nosso personagem do jogo colide com carros de qualquer faixa, voltamos para nossa posição inicial.</p>

<p>Porém podemos alterar alguns pontos no nosso jogo para deixá-lo mais completo.</p>

<p>Nas três primeiras faixas da nossa rodovia, há carros passando. Entretanto, nas faixas 4, 5 e 6, não. Vamos inserir carros em todas as faixas.</p>

<p>Podemos inserir as mesmas imagens dos carros que já carregamos na nossa lista imagemCarros, no arquivo "imagens.js". Mais uma vez passaremos imagemCarro, imagemCarro2 e imagemCarro3. Estaremos reaproveitando os arquivos de imagens que já carregamos.</p>

```
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]

```
<p>Há 6 dados de imagens na nossa lista de imagens de carros nesse momento. Passaremos a posição inicial de todos os carros em "carros.js". Todos os carros deverão partir da posição "600" de "x". Precisaremos passar também o "y" dos carros.</p>

<p>Não podemos chutar os valores para os carros aparecerem em posições diferentes, pois não faria sentido. Já teremos alguns valores preparados para colocar nossos carros de forma mais rápida. Assim não vamos ter que testar a altura de cada carro em cada faixa e usaremos os valores selecionados previamente.</p>

<p>Para o "y" da faixa 4, colocaremos o valor "210". para o carro 5, colocaremos "270" e para o 6, "318".</p>

<p>Para finalizar e conseguirmos de fato visualizar todos os carros, passaremos a velocidade dos carros. O 4 será bastante rápido, "5". O seguinte será um pouco mais lento, "3.3". O carro da primeira faixa, terá velocidade "2.3".</p>

<p>Recapitulando, passamos as mesmas imagens para a lista imagemCarros dando outra referência para elas. Em "carros.js", colocamos os valores para cada carro, tanto na posição "x", quanto na lista "y" quanto na lista da velocidade dos carros.</p>

```
//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;
```
<p>Vamos rodar o código e assim que executamos, vemos todos os carros passando em todas as faixas. A padronização do jogo fica a critério, para isso bastará mudar os valores da velocidade para cada carro conforme a preferência.</p>

<p>Se ainda estivéssemos trabalhando com variáveis para os carros, se tínhamos 3 variáveis para cada carro, agora que temos 6 carros seriam ainda mais variáveis e muitos códigos semelhantes replicados. Com nossa resolução, fizemos o loop para mostrar, movimentar e fazer os carros retornarem à posição inicial, tornando muito mais fácil trabalhar com o código.</p>

<p>Outro ponto que podemos alterar é o nosso for. Nos parâmetros do for estamos declarando a variável i e atribuindo o valor "0" a ela, passando a condição de que se o i for menor do que a quantidade de itens da lista imagemCarros, o valor de i aumentará em "1" valor, ou i = i+ 1. Esse código do i ganhar mais um valor será necessário, mas podemos escrevê-lo de outra forma com o mesmo resultado. Substituiremos i = i + 1 por i++ em todos os trechos em que ele aparecer.</p>

```
//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}
```
<p>Melhoramos a experiência do nosso jogo colocando um carro em cada faixa de maneira bastante simples e modificamos a forma de escrever i = i+1, substituindo por i++, mais sucinto. Ainda teremos o mesmo funcionamento após as modificações.</p>

>Criando os pontos do jogo

<p>Quando tentamos atravessar até o outro lado da rodovia com o personagem do nosso jogo e conseguimos, nada acontece. No jogo original, porém, sempre que o personagem chegava ao outro lado, marcava um ponto.</p>

<p>Vamos implementar os pontos no jogo para motivar o usuário no nosso desafio. Caso o personagem colida com um carro, perderemos esses pontos.</p>

<p>A primeira modificação que faremos será no código do ator. Criaremos um texto para marcarmos os pontos. Mas eles precisam estar armazenados em algum lugar da memória do computador. Sempre que iniciamos o jogo, ainda não temos nenhum ponto. Ganharemos um ponto a cada vez que conseguimos chegar do outro lado, por isso vamos armazenar esses pontos na memória.</p>

<p>Para o armazenamento, criaremos uma variável chamada meusPontos e vamos atribuir a ela o valor inicial "0'. Devemos mostrar esses pontos na tela do jogo,então criaremos uma função incluiPontos(). utilizaremos no corpo da função a palavra text(). A função text() terá dois parâmetros fundamentais: o que queremos exibir, a posição "x" e a posição "y" desse texto.</p>

<p>Colocaremos em primeiro lugar meusPontos como um parâmetro. Em seguida,vamos dividir a largura da tela em 5 partes, da direita para a esquerda e diremos que ele deve ficar na posição "5". Podemos ajustar essa posição com a do nosso personagem. Para finalizar, passaremos a altura "60", um valor já testado anteriormente.</p>

<p>Vamos na função "sketch.js" em que todas as funções do nosso jogo acontecem e incluiremos incluiPontos() na função draw().</p>

```
//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function incluiPontos(){
  text(meusPontos, width / 5, 60);
}
```

<p>Agora, vamos ligar nosso jogo e aparecerá um "0" mal posicionado na nossa tela. A posição de "x" ficou adequada. Então, vamos jogar nosso personagem um pouco mais para a esquerda, alinhando-o aos pontos. Quanto menor for o"x", mais próximo ele estará da esquerda. Então usaremos "85" no valor de xAtor. .</p>

<p>O "0" referente aos pontos está muito pequeno. Vamos então refinar o texto alterando o tamanho dele. usaremos a propriedade textSize() e passaremos o valor de "25".</p>

<p>O tamanho melhorará, mas esse número ainda estará no meio da pista. Precisamos colocá-lo mais para cima. Vamos utilizar uma propriedade que pega o centro do texto e poderá ficar mais fácil para posicionar, textAlign(), e passaremos uma propriedade com valor constante, com todas as letras maiúsculas e chamaremos de CENTER.'</p>

<p>Precisamos alterar nosso valor de "y" também, pois o "0" aparece muito para baixo. Diminuiremos a posição de "60" para "27", um valor que pelos testes parecerá mais apropriado quando fizermos nossos testes.</p>

<p>No jogo original, o jogo tem uma cor diferente. Vamos procura uma tabela de códigos de cores HTML e escolheremos a cor Orange. Os códigos de cores RGB terão valores com três números, de 0 a 255. Os valores dessas. O desse tem de laranja escolhido é 155, 65, 0, mas testaremos e o texto ficará muito escuro para ser bem visualizado em nosso jogo. Temos a possibilidade de alterar as cores alterando esses três valores ou três propriedades.</p>

<p>Passaremos a usar 255, 240, 60 e conseguiremos um destaque melhor. Também é possível escolher usar outra cor no jogo.</p>

<p>Agora sempre que o personagem conseguir chegar ao outro lado, vamos marcar um ponto. Esse valor de "0", portanto, precisa virar "1". Podemos criar uma outra função para marcar isso, e chamaremos essa função de marcaPonto.</p>

<p>Precisamos verificar a altura do nosso personagem, pois será quando ela atingir a altura da tela que corresponde ao outro lado da rodovia que marcaremos pontos.</p>

<p>Na função que mostra nosso ator, colocaremos um print(Ator) para ver no nosso console a altura da vaquinha. Quando ligarmos o jogo, ficará aparecendo no terminal os valores referentes à posição, e poderemos conferir que o valor "15" marca o topo da tela. Quando nos movemos ainda mais para cima, os valores diminuem, então podemos concluir que os pontos serão marcados quando atingimos uma posição menor do que 15.</p>

<p>Faremos uma condicional if dizendo que se o valor de yAtor for menor do que "15" a função de marcar pontos será chamada. Sendo assim, a variável meusPontos ganhará um valor por meio de meusPontos += 1</p>

```
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
  }
}
```
<p>Podemos apagar o print da função mostraAtor(), uma vez que não precisamos mais dele.</p>

<p>Vamos executar o jogo e quando conseguirmos atravessar a rua com o personagem, nada acontecerá. O que aconteceu foi que criamos nossa função, mas ela não está sendo executada. Temos que executá-la no "sketch.js", senão temos uma função que não está sendo usada por ninguém e não verificamos o yAtor.</p>

<p>Incluiremos marcaPonto() à função draw() do sketch e ela fará a verificação da altura da vaquinha.</p>

<p>Testando novamente, quando chegarmos ao outro lado com a vaquinha o placar vai começar a marcar pontos sem pontos sem parar. Não é o que deve acontecer, quando chegarmos do outro lado e marcamos um ponto, voltaremos para a posição inicial.</p>

<p>Já fizemos o mesmo em outro trecho do código. Quando existe uma colisão entre ator e carro, é chamada uma função chamada colidiu() que faz o yAtor voltar ao estado inicial, ou seja, o personagem volta para a parte superior da tela, como no começo do jogo.</p>

<p>Podemos melhorar o nome dessa função colidiu() para voltaAtorParaPosicaoInicial(). Se marcarmos um ponto, essa função também será chamada agora. Assim, reutilizamos uma função no código.</p>

```
//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}
```

<h1>Módulo 5: Adicionando sons e pontos</h1>

>Perdendo pondos

<p>Estamos marcando pontos sempre que chegamos até o outro lado com nosso personagem.</p>

<p>No entanto, seria ainda mais desafiador se a cada vez que colidíssemos com algum carro, perdêssemos um ponto também.</p>

<p>No nosso código que verifica se ocorreu uma colisão, voltamos para o ator principal e perdemos um ponto. Então, chamaremos meusPontos -= 1.</p>

```
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
            meusPontos -= 1;
    }
  }
}
```
<p>Vamos testar. Por duas vezes chegaremos ao outro lado e ganharemos um ponto. Deixaremos um carro colidir no personagem e perderemos um ponto. Vamos testar de novo, perder mais um e ficar com "0". Porém, se o ator colidir outra vez ou outras vezes com o carro, a pontuação ficará negativa.</p>

<p>Não vamos deixar os pontos ficarem negativos. Por isso verificaremos se os pontos são maiores do que "0". Caso contrário, o ponto não será removido. Criaremos uma função para saber se podemos ou não tirar esses pontos.</p>

<p>Inicialmente, criaremos um if com meusPontos > 0 nos parâmetros. No corpo do if, faremos a retirada dos pontos com meusPontos -=1, mas só sobe a condição estabelecida de serem maiores do que "0" quando houver a colisão.</p>

```
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
        if (meusPontos > 0){
        meusPontos -=1;
    }
    }
  }
}
```

<p>Vamos testar e marcar um ponto. Quando a colisão acontecer, perderemos esse ponto, mas se ela acontecer outras vezes quando o placar estiver em "0", ele permanecerá assim.</p>

<p>Nossa função verificaColisao() tem mais de uma responsabilidade: ela está verificando se tem a colisão ou não e chamando outras funções, e temos um if verificando se os pontos do placar são maiores do que "0". Podemos remover esse conteúdo para outra função para o código ficar mais organizado. Vamos remover o meusPontos > 0 com "Ctrl + X" e faremos if(PontosMaiorQueZero()). Por último no código criaremos essa função e chamaremos meusPontos > 0 como retorno.</p>

<p>Nosso código ficou muito mais claro para ler e entender que se os pontos estiverem com valor maior que 0, um ponto será perdido se ocorrer colisão.</p>

```
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();

    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}    
```

<p>Ligaremos o jogo para testar e tudo funcionará conforme o esperado. Não conseguiremos perder pontos até ficar com um placar menor do que "0".</p>

<p>Outra questão é que estamos utilizando as setas para cima e para baixo para movimentar o personagem. Mas ele consegue ultrapassar a tela quando o arrastamos para baixo. Será melhor limitarmos o valor do "y" dele, por exemplo, impedir que ele vá mais para baixo quando o valor for maior do que "366". Se for menor, aí sim podemos nos direcionar para cima.</p>

<p>Vamos criar a função para saber se podemos mover nosso ator chamada podeSeMover() que retornará um valor verdadeiro ou falso. Se for verdade, moveremos nosso personagem.</p>

```

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
    if(pontosMaiorQueZero()){
    meusPontos -= 1;
    }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}

function podeSeMover(){
    return yAtor < 366;
}

```

<p>Vamos executar e agora quando apertarmos a seta para baixo com o personagem na posição inicial, ele não descerá mais. Também continuamos conseguindo marcar e perder pontos.</p>

<p>Não temos mais pontos negativos e limitamos os movimentos do personagem.</p>

> Adicionando sons

<p>Nosso jogo tem diversos elementos visuais e movimentação, mas ele está todo em silêncio. Não há efeito sonoro nenhum, o que deixa a imersão no nosso jogo prejudicada, pois não conseguimos ambientar o jogador tão bem sem o apoio de sons.</p>

<p>Então, agora atacaremos esse ponto e vamos adicionar sons ao nosso jogo. Esse é um processo muito semelhante com o que fizemos no curso de Pong. Uma música de trilha era executada em loop, além de sons que tocavam durante o decorrer do jogo.</p>

<p>No nosso caso seria legal se tivéssemos um som quando ganhamos um ponto e um quando ocorre a colisão, além da trilha sonora em loop. Os sons estão na mesma pasta de material que baixamos no início do curso juntamente com as imagens.</p>

<p>Para deixar nosso jogo organizado, vamos criar uma pasta clicando na seta para baixo ao lado de "project-folder" e selecionaremos "Add folder". Chamaremos a pasta de "sons". Daremos um pause no jogo e veremos a pasta "sons" na nossa aba lateral esquerda da tela. Clicaremos na seta ao lado dessa pasta e clicaremos em "Add file" para adicionar novos arquivos.</p>

<p>Acessaremos a pasta do material e clicaremos na pasta dos sons, selecionaremos os três e clicaremos em "Open". Teremos os três dentro da nossa pasta e precisaremos carregar esses sons no arquivo de "imagens". Vamos alterar o comentário no código para // Imagens e sons do jogo.</p>

<p>Criaremos uma variável somDaTrilha para nossa trilha sonora e outra para armazenar os sons somDaColisao e por fim somDoPonto. Da mesma forma que carregamos nossas imagens, carregaremos os sons na função preload(). Colocaremos a variável somDaTrilha e atribuiremos a ela loadSound("") para passar o caminho sons/trilha.mp3. Faremos o mesmo para a colisão, loadSound("sons/colidiu.mp3").</p>

<p>Para finalizar, o som do ponto será igual a loadSound("sons/pontos.wav"). Assim como nas imagens, precisamos passar a extensão do arquivo. Os som para os pontos será um arquivo .wav.</p>

```
// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, 
imagemCarro2, imagemCarro3];
 somDaTrilha = loadSound("sons/trilha.mp3");
 somDaColisao = loadSound("sons/colidiu.mp3")
 somDoPonto= loadSound("sons/ponto.wav");
}
```
<p>Agora que já temos esses sons, podemos executá-los no nosso jogo. Começaremos com o som da trilha, que deverá ser tocada assim que o jogo começa. Voltaremos para o "sketch.js" e na função setup() geraremos nosso Canvas. Na função draw(), iniciaremos nosso jogo.</p>

<p>Na função setup() chamaremos somDaTrilha.loop. O loop é porque não queremos que esse arquivo seja executado uma vez apenas e sim repetidamente.</p>

```
function setup(){
    createCanvas(500, 400);
    somDaTrilha.loop();
}

```
<p>Daremos um "Play". e nosso jogo funcionará com a música tocando.</p>

<p>Ainda precisamos ir para o código do ator, em que estará a função de voltar para a posição inicial. Nela colocaremos para tocar o somDaColisao. Não poderemos usar somDaColisao.loop, pois dessa vez não queremos que o som toque para sempre, apenas na ocasião. Deixaremos como somDaColisao.play().</p>

```
function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
         if(pontosMaiorQueZero()){
         meusPontos -= 1;
         }
       }
     }
  }

```
<p>Executando o jogo agora, temos o som da colisão quando os carros atingirem nosso personagem.</p>

<p>Agora faltará o som referente a marcar pontos. Ainda no código do ator, quando ele chega até o outro lado da rua no jogo, é chamada uma função que marca os pontos. Nesse trecho, adicionaremos somDoPonto.play() para que ele seja executado uma vez.</p>

```
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
   }
}
```
<p>Vamos executar nosso jogo e temos a trilha sonora, o som da colisão e quando ganhamos um ponto conseguindo chegar ao outro lado, também há um efeito sonoro.</p>

<p>Dessa forma nosso jogo ja fica muito mais emocionante pois quem joga se sente mais inserido no contexto do jogo.</p>

```
//código do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}
function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
      yAtor += 3;
      }
    }
  }

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
         if(pontosMaiorQueZero()){
         meusPontos -= 1;
         }
       }
    }
 }
 function voltaAtorParaPosicaoInicial(){
    yAtor = 366;
}

function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meusPontos, width / 5, 27);
}

  function marcaPonto(){
    if (yAtor < 15){
      meusPontos += 1;
      voltaAtorParaPosicaoInicial();
    }
}

function pontosMaiorQueZero(){
      return meusPontos > 0;
} 
```
