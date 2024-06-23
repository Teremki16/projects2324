#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;

int paddleX = 3;
int paddleY = 14;

int ballX = 3;
int ballY = 12;
int directionX = 1;
int directionY = -1;

unsigned long int ballT = 0;
unsigned long int paddleT = 0;

bool stateLevel = true;
int numLevel = 1;

int countBricks = 0;
int Ascore = 0;

void setup() {
  gb.begin(8);
  randomSeed(analogRead(0));
  drawPaddle(paddle, paddleX, paddleY);
  createLevel();
}

void loop() {
  Alose();
  ball();
  makePaddle();
  if(Ascore >= countBricks) Awin();

}

void drawPaddle(byte arr[3], int x, int y) {
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
    if (ballX == 0) directionX = 1;
  }
  if (ballY == paddleY - 1 && ballX == paddleX + 1) {
    directionY = -1;
    directionX = 0;
  }
  if (ballY == paddleY - 1 && ballX == paddleX + 2) {
    directionY = -1;
    directionX = 1;
    if (ballX == 7) directionX = -1;
  }
  if (gb.checkCollision(ballX, ballY)) {
    gb.wipePoint(ballX, ballY);
    directionY = 1;
    Ascore++;
  }
}

void drawBricks(byte arr[3][8]) {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 8; j++) {
      if (arr[i][j] == 1) {
        gb.memDisplay(j, i);
        countBricks++;
      }
    }
  }
}

void memClear() {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 8; j++) {
      gb.display[j][i] = 0;
    }
  }
}

void createLevel() {
  memClear();
  if (numLevel == 1)drawBricks(Block_level_1);
  if (numLevel == 2)drawBricks(Block_level_2);
  gb.drawDisplay();
  stateLevel = true;
}

void Alose() {
  if (ballY >= 15) {
    for (int i = 0; i  < 8; i++) {
      for (int j = 0; j  < 16; j++) {
        gb.wipePoint(i, j);
      }
    }
    gb.testMatrix(10);
    restart();
    createLevel();
    drawPaddle(paddle, paddleX, paddleY);
  }
}

void restart() {
  ballX = 3;
  ballY = 8;
  directionX = 1;
  directionY = -1;
  paddleX = 3;
  countBricks = 0;
  Ascore = 0;
}
void Awin(){
    for (int i = 0; i  < 8; i++) {
      for (int j = 0; j  < 16; j++) {
        gb.wipePoint(i, j, WIN[j][i]);
      }
    }
    delay(2000);
    numLevel++;
    restart();
}
