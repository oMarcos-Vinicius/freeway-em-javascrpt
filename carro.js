//Códigos do Carro

let xCarros = [600, 600, 600, -100, -100, -100];
let yCarros = [42, 96, 150, 210, 270, 318];
let comprimentoCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];


function mostraCarro() {
    for (i = 0; i < imagemDosCarros.length; i++) {
        image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro() {
    for (i = 0; i < imagemDosCarros.length; i++) {
        if (i >= 3) {
            xCarros[i] += velocidadeCarros[i];
            if (passouTodaATela(xCarros[i])) {
                xCarros[i] = -50;
            }
        } else {
            xCarros[i] -= velocidadeCarros[i];
            if (passouTodaATela(xCarros[i])) {
                xCarros[i] = 650;
            }
        }
    }
}

function passouTodaATela(xCarro) {
    return xCarro < -50 || xCarro > 650;
}