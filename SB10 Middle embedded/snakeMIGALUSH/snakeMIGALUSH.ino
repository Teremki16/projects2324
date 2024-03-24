#include<GameBoy.h>
GameBoy GB;

int x = 1, y = 0;
int dirX, dirY;

int snakeX[10];
int snakeY[10];

int foodX = 0, foodY = 0;

void setup() {
  GB.begin(8);
  randomSeed(analogRead(0));
  snakeX[0] = 4;
  snakeY[0] = 7;

}

void loop() {
  makeMove();
  dirX = dirX + x;
  dirY = dirY + y;
  if(dirX > 7)dirX = 0;
  if(dirX < 0)dirX = 7;
  if(dirY > 15)dirY = 0;
  if(dirY < 0)dirY = 15;
  if(dirX == foodX && dirY == foodY){
    makeFood();
    tone(4, 3000,100);
  }
  GB.clearDisplay();
  GB.drawPoint(foodX, foodY);
  GB.drawPoint(dirX, dirY);
  delay(300);
  
}

void makeMove(){
  if(GB.getKey() == 3){
    x = 0;
    y = -1;
  }
  if(GB.getKey() == 6){
    x = 0;
    y = 1;
  }
  if(GB.getKey() == 4){
    x = -1;
    y = 0;
  }
  if(GB.getKey() == 5){
    x = 1;
    y = 0;
  }
}

void makeFood(){
  foodX = random(8);
  foodY = random(8);
  
}
