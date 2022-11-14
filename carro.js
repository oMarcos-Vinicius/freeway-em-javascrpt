//Códigos do Carro

let xCarros = [600, 600, 600];
let yCarros = [42, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];


function mostraCarro() {
    for (i = 0; i < imagemDosCarros.length; i++) {
        image(imagemDosCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro() {
    xCarros[0] -= velocidadeCarros[0];
    if (xCarros[0] < -100) {
        xCarros[0] = 600;
    }
    xCarros[1] -= velocidadeCarros[1];
    if (xCarros[1] < -100) {
        xCarros[1] = 600;
    }
    xCarros[2] -= velocidadeCarros[2];
    if (xCarros[2] < -100) {
        xCarros[2] = 600;
    }
}