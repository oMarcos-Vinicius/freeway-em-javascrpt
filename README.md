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