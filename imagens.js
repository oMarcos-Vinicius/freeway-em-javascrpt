// Código das imagens

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro0;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDosCarros;

function preload() {
    imagemDaEstrada = loadImage("../img/estrada.png")
    imagemDoAtor = loadImage("../img/ator-1.png")
    imagemDoCarro0 = loadImage("../img/carro-1.png")
    imagemDoCarro1 = loadImage("../img/carro-2.png")
    imagemDoCarro2 = loadImage("../img/carro-3.png")
    imagemDosCarros = [imagemDoCarro0, imagemDoCarro1, imagemDoCarro2, imagemDoCarro0, imagemDoCarro1, imagemDoCarro2]
}