let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

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
    image(imagemDoAtor, 120, 366, 30, 30)
    image(imagemDoCarro, 420, 42, 50, 40)
}