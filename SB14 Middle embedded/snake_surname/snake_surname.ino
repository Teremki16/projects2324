#include <GameBoy.h>
GameBoy gb;

int x = 0, y = 1;
int dirX, dirY;

int snakeX[10];
int snakeY[10];

int up = 0;
int right = 1;
int bottom = 2;
int left = 3;

int direction = right;

int lenSnake = 5;

int foodX = 0, foodY = 0;

void setup() {
  gb.begin(8);
  randomSeed(analogRead(0));
  snakeX[0] = 4;
  snakeY[0] = 7;
}

void loop() {
  makeMove();
  dirX = dirX + x;
  dirY = dirY + y;
  if(dirY > 15) dirY = 0;
  if(dirY < 0) dirY = 15;
  if(dirX > 7) dirX = 0;
  if(dirX < 0) dirX = 7;
  if(dirX == foodX && dirY == foodY){
    makeFood();
//    tone(4, 1000, 100);
  }
  gb.clearDisplay();
  gb.drawPoint(foodX, foodY);
  gb.drawPoint(dirX, dirY);
  delay(250);
}

void makeMove(){
  if(gb.getKey() == 3){
    direction = up;
  }
  if(gb.getKey() == 4){
    direction = left;
  }
  if(gb.getKey() == 5){
    direction = right;
  }
  if(gb.getKey() == 6){
    direction = bottom;
  }
}

void makeFood(){
  foodX = random(8);
  foodY = random(16);
}

void move(){
  for(int i = lenSnake - 1; i > 0; i++){
    
  }
}
