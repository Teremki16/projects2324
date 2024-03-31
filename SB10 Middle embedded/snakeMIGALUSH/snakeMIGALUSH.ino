#include<GameBoy.h>
GameBoy GB;

int x = 1, y = 0;
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
  GB.begin(8);
  randomSeed(analogRead(0));
  snakeX[0] = 4;
  snakeY[0] = 7;

}

void loop() {
  makeMove();
  Move();
  if(snakeX[0] == foodX && snakeY[0] == foodY){
    makeFood();
    tone(4, 3000,100);
  }
  GB.clearDisplay();
  GB.drawPoint(foodX, foodY);
  drawSnake();
  delay(300);
  
}

void makeMove(){
  if(GB.getKey() == 3){
    direction = up;
  }
  if(GB.getKey() == 6){
    direction = bottom;
  }
  if(GB.getKey() == 4){
    direction = left;
  }
  if(GB.getKey() == 5){
    direction = right;
  }
}

void makeFood(){
  foodX = random(8);
  foodY = random(8);
  
}

void Move(){
  for(int i = lenSnake - 1;i > 0;i--){
    snakeX[i] = snakeX[i - 1];
    snakeY[i] = snakeY[i - 1];
  }
  if(direction == up){
    if(snakeY[0] == 0){
      snakeY[0] = 15;
    }else{
      snakeY[0]--;
    }
  }
  if(direction == bottom){
    if(snakeY[0] == 15){
      snakeY[0] = 0;
    }else{
      snakeY[0]++;
    }
  }
  if(direction == left){
    if(snakeX[0] == 0){
      snakeX[0] = 7;
    }else{
      snakeX[0]--;
    }
  }
  if(direction == right){
    if(snakeX[0] == 7){
      snakeX[0] = 0;
    }else{
      snakeX[0]++;
    }
  }
}

void drawSnake(){
  for(int i = 0; i < lenSnake; i++){
    GB.drawPoint(snakeX[i], snakeY[i]);
  }
}

void SnakeBig(){
  
}
