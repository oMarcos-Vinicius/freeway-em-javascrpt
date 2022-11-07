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