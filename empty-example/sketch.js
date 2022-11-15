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
    verificaColisao();
}