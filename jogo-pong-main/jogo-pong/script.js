//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variáveis da raquete
let xRaquete = 250;
let yRaquete = 380;
let raqueteComprimento = 90;
let raqueteAltura = 10;

//variáveis do oponente
let xRaqueteOponente = 250;
let yRaqueteOponente = 10;
let velocidadeYOponente;


let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;



 function setup() {
    createCanvas(600, 400);
 }

 function draw() {
    background(2);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    mostraRaquete();
    incluiPlacar();
    marcaPonto();
 

 function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro); 
 }

 function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
 } 

 function verificaColisaoBorda() {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
 }

 function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
 }
 function movimentaMinhaRaquete() {
    if (keyIsDown(LEFT_ARROW)) {
        xRaquete -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xRaquete += 10;
    }
 }

 function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento &&
        yBolinha - raio < yRaquete + raqueteAltura &&
        yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }

 }  
    function movimentaRaqueteOponente() {
        velocidadeXOponente = xBolinha - xRaqueteOponente - raqueteComprimento / 2 - 30;
        xRaqueteOponente += velocidadeXOponente
    }


    function colisaoRaqueteOponenteBiblioteca() {
        colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
        if (colidiu){
            velocidadeXBolinha *= -1;
        }
    }         

    function incluiPlacar() {
        fill(255);
        text(meusPontos, 278, 26);
        text(pontosDoOponente, 321, 26);
    }


    function marcaPonto() {
        if (yBolinha < 0) {
            meusPontos += 1;
        }
        if (yBolinha > 392) {
            pontosDoOponente += 1;
        }   
    }
    
}

