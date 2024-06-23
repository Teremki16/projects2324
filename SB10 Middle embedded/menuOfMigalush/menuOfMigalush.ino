#include <GameBoy.h>
GameBoy GB;
#include <score.h>
#include "car.h"
#include "snake.h"
#include "Blocks.h"
#include "TETRIS.h"

int modeCount = 0;

byte ARROWS[8][8] = {
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 1, 0, 0, 1, 0, 0},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {1, 1, 1, 0, 0, 1, 1, 1},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {0, 0, 1, 0, 0, 1, 0, 0},
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 0, 0, 0, 0, 0},
};
byte CARS[8][8] = {
  {0, 1, 0, 1, 0, 0, 0, 0},
  {0, 0, 1, 0, 0, 0, 0, 0},
  {0, 1, 1, 1, 0, 0, 0, 0},
  {0, 0, 1, 0, 0, 0, 0, 0},
  {0, 0, 0, 0, 0, 1, 0, 0},
  {0, 0, 0, 0, 1, 1, 1, 0},
  {0, 0, 0, 0, 0, 1, 0, 0},
  {0, 0, 0, 0, 1, 0, 1, 0},
};
byte SNAKE[8][8] = {
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 1, 1, 1, 1, 0, 0},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {0, 1, 1, 0, 0, 0, 0, 0},
  {0, 0, 1, 1, 1, 1, 0, 0},
  {0, 0, 0, 0, 0, 1, 1, 0},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {0, 0, 1, 1, 1, 1, 0, 0},
};

byte TETRIS[8][8] = {
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 0, 0, 0, 0, 0},
  {1, 0, 0, 0, 0, 0, 0, 0},
  {1, 1, 0, 1, 1, 1, 0, 1},
  {1, 1, 1, 0, 1, 0, 1, 1},
  {1, 1, 1, 1, 0, 1, 1, 1},
  {1, 1, 1, 1, 1, 1, 1, 1},
};

void setup() {
  GB.begin(8);
  randomSeed(analogRead(0));
  snakeX[0] = 4;
  snakeY[0] = 7;
  createBlock(random(7));

}
int modes = 0;
void loop() {
  if (GB.getKey() == 2 && modeSelector() == 0) {
    GB.clearDisplay();
    modes = 1;
  }
  else if (GB.getKey() == 2 && modeSelector() == 1) {
    GB.clearDisplay();
    modes = 2;
  }
  else if (GB.getKey() == 2 && modeSelector() == 2) {
    GB.clearDisplay();
    modes = 3;
  }
  else if (GB.getKey() == 1) {
    GB.clearDisplay();
    modes = 0;
  }
  switchMode(modes);
}
void MENU() {
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++) {
      GB.wipePoint(i, j);
      GB.setLed(i, j, ARROWS[j][i]);
    }
  }
  if (modeSelector() == 0) {
    for (int i = 0; i < 8; i++) {
      for (int j = 0; j < 8; j++) {
        GB.wipePoint(i, j + 8);
        GB.setLed(i, j + 8, CARS[j][i]);
      }
    }
  }
  if (modeSelector() == 1) {
    for (int i = 0; i < 8; i++) {
      for (int j = 0; j < 8; j++) {
        GB.wipePoint(i, j + 8);
        GB.setLed(i, j + 8, SNAKE[j][i]);
      }
    }
  }
  if (modeSelector() == 2) {
    for (int i = 0; i < 8; i++) {
      for (int j = 0; j < 8; j++) {
        GB.wipePoint(i, j + 8);
        GB.setLed(i, j + 8, TETRIS[j][i]);
      }
    }
  }
}

int modeSelector() {
  if (GB.getKey() == 5) {
    modeCount++;
    delay(200);
    if (modeCount > 2) modeCount = 0;
  }
  if (GB.getKey() == 4) {
    modeCount--;
    delay(200);
    if (modeCount < 0) modeCount = 2;
  }
  return modeCount;
}
void switchMode(int mode) {
  switch (mode) {
    case 0: MENU();
      break;
    case 1: mainRaicng(100);
      break;
    case 2: mainSnake();
      break;
    case 3: TetrisGame();
      break;
  }

}
