var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var cars,car1,car2,car3,car4
var i1,i2,i3,i4;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-2,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function preload(){
  i1=loadImage("p1.png")
  i2=loadImage("p2.png")
  i3=loadImage("p3.png")
  i4=loadImage("p4.png")
}

function draw(){
  background("lightgreen")
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
