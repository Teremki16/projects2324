#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;

int paddleX = 3;
int paddleY = 14;

unsigned long int paddleT = 0;
unsigned long int ballT = 0;

int ballX = 4;
int ballY = 13;
int directionX = 1;
int directionY = -1;

void setup() {
  gb.begin(8);
  paddleT = millis();
  ballT = millis();
  drawPaddle(paddle, paddleX, paddleY);
}

void loop() {
  ball();
  makePaddle();
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
    gb.drawDisplay();
    if (gb.getKey() == 4 && paddleX > 0) {
      paddleX--;
    }
    if (gb.getKey() == 5 && paddleX < 5) {
      paddleX++;
    }
    paddleT = millis();
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
  if (ballY == paddleY - 1 && ballX >= paddleX && ballX <= paddleX + 3) {
    directionY = -1;
    if (random(0, 10) < 5) {
      directionX = 1;
    } else {
      directionX = -1;
    }
  }
}
