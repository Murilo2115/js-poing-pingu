// variaveis da bolinha

let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// variaveis do oponente

let xraqueteoponente = 585;
let yraqueteoponente = 150;

// velocidade da bolinha

let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

// variaveis da raquete

let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

// placar do jogo

let meuspontos = 0;
let pontosdooponente = 0;

let colidiu = false;

// sons do jogo

let raquetada;
let  ponto;
let trilha;

function preload(){
  trilha = loadsound("trilha.mp3");
  ponto = loadsound("ponto.mp3");
  raquetada = loadsound("raquetada.mp3");
}

function setup() {
  createCanvas ( 600 , 400 );
  trilha.loop ();
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisaoborda();
  mostraraquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha*=-1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha*=-1;
  }
}

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if(keylsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keylsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha-raio<xRaquete+raqueteComprimento&&yBolinha-raio<+raqueteAtura&&yBolinha+raio>yRaquete){
    velocidadeXBolinha*=-1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if(colidiu){
    velocidadeXBolinha *=-1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  //velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2-30;
  //yraqueteOponente += velocidadeYOponente
  if (keylsDown(87)){
    yRaqueteOponente -=10;
  }
  if (keylsDown(83)){
    yRaqueteOponente +=10;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosDoOponente,470,26);
}

function marcaPonto(){
  if (xBolinha>590){
    meusPontosn +=1;
    ponto.play();
  }
  if (xBolinha <10){
    pontosDoOponente +=1;
    ponto.play();
  }
}
