#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;


int ballX = 3;
int ballY = 12;

int directionX = 1;
int directionY = -1;

int paddleX = 3;
int paddleY = 14;

unsigned long int ballT = 0;
unsigned long int paddleT = 0;

bool stateLevel = true;
int numLevel = 1;

void setup() {
  gb.begin(8);
  randomSeed(analogRead(0));
  drawPaddle(paddle, paddleX, paddleY);
  createLevel();

}

void loop() {
  ball();
  makePaddle();

}


void drawPaddle(byte arr[3], int x , int y) {
  for (int i = 0; i < 3; i++) {
    if (arr[i] == 1) {
      gb.drawPoint(x + i, y);
    }
  }
}

void makePaddle() {
  if (gb.getKey() > 0 && millis() - paddleT >= 50) {
    paddleT = millis();
    if (gb.getKey() == 4 && paddleX > 0) {
      paddleX--;
    }
    if (gb.getKey() == 5 && paddleX < 5) {
      paddleX++;
    }
    gb.drawDisplay();
    drawPaddle(paddle, paddleX, paddleY);

  }

}
void ball() {
  if (millis() - ballT >= 100) {
    gb.wipePoint(ballX, ballY);
    ballX += directionX;
    ballY += directionY;
    checkCollision();
    gb.drawPoint(ballX, ballY);
    ballT = millis();
  }
}

void checkCollision() {
  if (ballX <= 0 || ballX >= 7) directionX = directionX * -1;
  if (ballY <= 0 || ballY >= 15) directionY = directionY * -1;
  if (ballY == paddleY - 1 && ballX == paddleX) {
    directionY = -1;
    directionX = -1;
  }


  if (ballY == paddleY - 1 && ballX == paddleX + 1) {
    directionY = -1;
    directionX = 0;
  }
  if (ballY == paddleY - 1 && ballX == paddleX + 2) {
    directionY = -1;
    directionX = 1;
  }
  if (gb.checkCollision(ballX, ballY)) {
    gb.wipePoint(ballX, ballY);
    directionY = 1;


  }

}

void drawBricks (byte arr[3][8]) {
  for ( int i = 0; i < 3; i++) {
    for (int j = 0; j < 8; j++) {
      if (arr[i][j] == 1) {
        gb.memDisplay(j, i);

      }
    }
  }
}

void memClear () {
  for ( int i = 0; i < 3; i++) {
    for (int j = 0; j < 8; j++) {
        gb.display[j][i];

      }
    }
  }

void createLevel () {
  memClear(); 
  if(numLevel == 1) drawBricks(block_level_1);
  if(numLevel == 2) drawBricks(block_level_2);
  gb.drawDisplay();
  stateLevel = true;
}
