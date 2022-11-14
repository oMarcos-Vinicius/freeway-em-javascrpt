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
    for (i = 0; i < imagemDosCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
        if (passouTodaATela(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro) {
    return xCarro < -50
}