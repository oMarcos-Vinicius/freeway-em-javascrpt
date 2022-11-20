// Código do Ator
let yAtor = 366;
let xAtor = 120;
let voltaPosicaoInicial = false;

let meusPontos = 0;

function mostrarAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        //if (podeSeMover()) {
        yAtor -= 3;
        //}
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podeSeMover()) {
            yAtor += 3;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        //if (podeSeMover()) {
        xAtor += 3;
        //}
    }
    if (keyIsDown(LEFT_ARROW)) {
        //if (podeSeMover()) {
        xAtor -= 3;
        //}
    }
}

function verificaColisao() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (i = 0; i < imagemDosCarros.length; i++) {
        voltaPosicaoInicial = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if (voltaPosicaoInicial) {
            if (pontosMaiorQueZero()) {
                meusPontos--
            }
            yAtor = 366;
        }
    }
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    text(meusPontos, width / 4, 27);
    fill(color(255, 249, 20))
}

function marcaPonto() {
    if (yAtor < 6) {
        meusPontos++
        yAtor = 366;
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0
}

function podeSeMover() {
    return yAtor < 366
}