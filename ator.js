// Código do Ator
yAtor = 366;
xAtor = 120;
colidiu = false;


function mostrarAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
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

function verificaColisao() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (i = 0; i < imagemDosCarros.length; i++) {
        colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 30);
        if (colidiu) {
            yAtor = 366;
        }
    }
}