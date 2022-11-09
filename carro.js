//Códigos do Carro

//Carro 1
let xCarro = 600;
let yCarro = 42;
let velocidadeCarro1 = 2;

//Carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 2.5;

//Carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 3.2;

function mostraCarro() {
    image(imagemDoCarro, xCarro, yCarro, 50, 40);
    image(imagemDoCarro2, xCarro2, yCarro2, 50, 40);
    image(imagemDoCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro() {
    xCarro -= velocidadeCarro1;
    if (xCarro < -100) {
        xCarro = 600;
    }
    xCarro2 -= velocidadeCarro2;
    if (xCarro2 < -100) {
        xCarro2 = 600;
    }
    xCarro3 -= velocidadeCarro3;
    if (xCarro3 < -100) {
        xCarro3 = 600;
    }
}