let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

//carro
xCarro = 600;

//Ator
yAtor = 366;
xAtor = 120;

function preload() {
    imagemDaEstrada = loadImage("../img/estrada.png")
    imagemDoAtor = loadImage("../img/ator-1.png")
    imagemDoCarro = loadImage("../img/carro-1.png")
}

function setup() {
    var cnv = createCanvas(500, 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function draw() {
    background(imagemDaEstrada)
    mostrarAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
}

function mostrarAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function mostraCarro() {
    image(imagemDoCarro, xCarro, 42, 50, 40)
}

function movimentaCarro() {
    xCarro -= 5;
    if (xCarro < -100) {
        xCarro = 600;
    }
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yAtor += 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xAtor += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xAtor -= 3;
    }
}