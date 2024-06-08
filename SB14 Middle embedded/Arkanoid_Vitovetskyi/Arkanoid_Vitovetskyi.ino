#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;

int paddleX = 3;
int paddleY = 14;

int ballX = 3;
int ballY = 12;
int directionX = 1;
int directionY = -1;


void setup() {
  gb.begin(8);

}

void loop() {
  makePaddle();
  gb.drawDisplay();
  drawPaddle(paddle, paddleX, paddleY);
  delay(500);
}

void drawPaddle(byte arr[3], int x, int y){
  for(int i = 0; i < 3; i++){
    if(arr[i] == 1){
      gb.drawPoint(x + i, y);
    }
  }
}


void makePaddle(){
  if(gb.getKey() == 4 && paddleX > 0){
    paddleX--;
  }
  if(gb.getKey() == 5 && paddleX < 5){
    paddleX++;
}
}

void ball(){
  ballX += directionX;
  ballY += directionY;
  gb.drawPoint(ballX, ballY);
  delay(500);
}
