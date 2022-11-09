// Código do Ator
yAtor = 366;
xAtor = 120;



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