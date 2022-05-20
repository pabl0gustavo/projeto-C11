var mar,marimg;
var navio,navioimg;

function preload(){  
    // carregando imagem do mar      
    marimg= loadImage("sea.png");
    // carregando animação do navio
    navioimg= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  

}

function setup(){
  createCanvas(400,400);
  //criando sprite do mar
  mar= createSprite(200,200,20,20)
  mar.addImage(marimg)// adicionando imagem ao mar
  mar.scale= 0.3// ajustando tamanho do mar

  navio= createSprite(100,200,20,20) // altura do navio 
  navio.addAnimation("navegando",navioimg)
  navio.scale= 0.3 
}

function draw() {
  background("blue");

  mar.velocityX= -5 // da direita pra esquerda e negativo
 // condicional para reconfigurar o mar para a posição x inicial
  if (mar.x<0){
    mar.x=200 
  }

  drawSprites();

 
}
