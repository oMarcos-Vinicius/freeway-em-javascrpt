//Códigos do Carro
xCarro = 600;
yCarro = 42;

let imagemDoCarro;

function mostraCarro() {
    image(imagemDoCarro, xCarro, yCarro, 50, 40)
}

function movimentaCarro() {
    xCarro -= 5;
    if (xCarro < -100) {
        xCarro = 600;
    }
}