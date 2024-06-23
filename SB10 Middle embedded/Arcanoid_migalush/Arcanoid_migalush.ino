#include <GameBoy.h>
#include "Blocks.h"
GameBoy GB;

int paddleX = 3;
int paddleY = 14;

unsigned long int paddleT = 0;
unsigned long int ballT = 0;

int ballX = 4;
int ballY = 13;
int directionX = 1;
int directionY = -1;

bool stateLevel = true;
int numLevel = 1;

int countBricks = 0;
int Ascore = 0;

void setup() {
  GB.begin(8);
  paddleT = millis();
  ballT = millis();
  drawPaddle(paddle, paddleX, paddleY);
  createLevel();
  
}

void loop() {
  Alose();
  ball();
  makePaddle();
  AWIN();
}

void drawPaddle(byte arr[3], int x, int y) {
  for (int i = 0; i < 3; i++) {
    if (arr[i] == 1) {
      GB.drawPoint(x + i, y);
    }
  }
}

void makePaddle() {
  if (GB.getKey() > 0 && millis() - paddleT >= 50) {
    GB.drawDisplay();
    if (GB.getKey() == 4 && paddleX > 0) {
      paddleX--;
    }
    if (GB.getKey() == 5 && paddleX < 5) {
      paddleX++;
    }
    paddleT = millis();
    drawPaddle(paddle, paddleX, paddleY);
  }
}

void ball() {
  if (millis() - ballT >= 100) {
    GB.wipePoint(ballX, ballY);
    ballX += directionX;
    ballY += directionY;
    checkCollision();
    GB.drawPoint(ballX, ballY);
    ballT = millis();
  }
}

void checkCollision() {
  if (ballX <= 0 || ballX >= 7) directionX = directionX * -1;
  if (ballY <= 0 || ballY >= 15) directionY = directionY * -1;
  if (ballY == paddleY - 1 && ballX >= paddleX && ballX <= paddleX + 3) {
    directionY = -1;
    int d = random(0,10);
    if (d < 3) {
      directionX = 1;
    } else if(d < 6){
      directionX = -1;
    }else{
      directionX = 0;
    }
  }
  if(GB.checkCollision(ballX,ballY)){
    GB.wipePoint(ballX,ballY);
    directionY = 1;
    Ascore++;
  }
}

void drawBricks(byte arr[3][8]){
  for(int i = 0;i < 4;i++){
   for(int J = 0; J < 8;J++){
    if(arr[i][J] == 1){
       GB.memDisplay(J,i);
       countBricks++;
    }
   }
  }
}

void memClear(){
  for(int i = 0;i < 4;i++){
   for(int J = 0; J < 8;J++){
    GB.display[J][i] = 0; 
   }
  }
}

void createLevel(){
  memClear();
  if(numLevel == 1){
    GB.clearDisplay();
    drawBricks(Block_level_1);
    stateLevel = true;
  }
  if(numLevel == 2){
    GB.clearDisplay();
    drawBricks(Block_level_2);
    stateLevel = true;
  }
  if(numLevel == 3){
    GB.clearDisplay();
    drawBricks(Block_level_3);
    stateLevel = true;
  }
  if(numLevel == 4){
    GB.clearDisplay();
    drawBricks(Block_level_4);
    stateLevel = true;
  }
  if(numLevel == 5){
    GB.clearDisplay();
    drawBricks(Block_level_5);
    stateLevel = true;
  }
}


void Alose() {
  if(ballY >= 15){
    for(int i = 0;i < 16;i++){
      for(int j = 0;j < 8;j++){
        GB.wipePoint(j, i);
      }
    }
    GB.testMatrix(10);
    numLevel = 1;
    restart();
  }
}


void AWIN(){
  if(Ascore >= countBricks){
    for(int i = 0;i < 8;i++){
      for(int j = 0;j < 16;j++){
        GB.setLed(i,j, WIN[j][i]);
      }
    }
    delay(2000);
    numLevel++;
    restart;
  }
}

void restart(){
  ballX = 3;
  ballY = 8;
  directionX = 1;
  directionY = -1;
  countBricks = 0;
  Ascore = 0;
  createLevel();
  drawPaddle(paddle,paddleX,paddleY);
  
}
