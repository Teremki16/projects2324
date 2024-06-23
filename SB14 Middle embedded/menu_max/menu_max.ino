#include <GameBoy.h>
#include <score.h>
GameBoy gb;
#include "Car.h"
#include "Snake.h"
#include "Blocks.h"
#include "Tetris.h"

int modeCount = 0;

byte arrovs [8][8] = {
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 1, 0, 0, 1, 0, 0},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {1, 1, 1, 0, 0, 1, 1, 1},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {0, 0, 1, 0, 0, 1, 0, 0},
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 0, 0, 0, 0, 0}
};

byte car [8][8] = {
  {0, 1, 0, 1, 0, 0, 0, 0},
  {0, 0, 1, 0, 0, 0, 0, 0},
  {0, 1, 1, 1, 0, 0, 0, 0},
  {0, 0, 1, 0, 0, 0, 0, 0},
  {0, 0, 0, 0, 0, 1, 0, 0},
  {0, 0, 0, 0, 1, 1, 1, 0},
  {0, 0, 0, 0, 0, 1, 0, 0},
  {0, 0, 0, 0, 1, 0, 1, 0}
};

byte snake [8][8] = {
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 1, 1, 1, 1, 0, 0},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {0, 1, 1, 0, 0, 0, 0, 0},
  {0, 0, 1, 1, 1, 1, 0, 0},
  {0, 0, 0, 0, 0, 1, 1, 0},
  {0, 1, 1, 0, 0, 1, 1, 0},
  {0, 0, 1, 1, 1, 1, 0, 0}
};

byte TETRIS[8][8] = {
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 0, 0, 1, 0, 0},
  {1, 1, 1, 0, 0, 1, 1, 0},
  {0, 1, 0, 0, 0, 0, 1, 0},
  {0, 0, 0, 0, 0, 0, 0, 0},
  {0, 0, 0, 1, 0, 0, 0, 0},
  {0, 0, 0, 1, 0, 0, 0, 0},
  {0, 0, 0, 1, 1, 0, 0, 0}
};

void setup() {
  gb.begin(8); // визначая освітленість геймбоя
  randomSeed(analogRead(0)); //
  snakeX[0] = 4; // місце появи змії по X
  snakeY[0] = 7; // місце появи змії по Y
  createBlock(random(7));

}
int modes =0;
void loop() {
if (gb.getKey() == 2 and modeSelector() == 0){
  gb. clearDisplay();
  modes = 1;
}
else if (gb.getKey() == 2 and modeSelector() == 1){
  gb. clearDisplay();
  modes = 2;
}
else if (gb.getKey() == 2 and modeSelector() == 2){
  gb. clearDisplay();
  modes = 3;
}
else if (gb.getKey() == 1){
  gb.clearDisplay();
  modes = 0;
}
switchMode(modes);
}

void mainMenu() {
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++){
      gb.wipePoint(i, j);
    gb.setLed(i, j, arrovs[i][j]);
  }
  }
if (modeSelector() == 0) {
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++){
      gb.wipePoint(i, j + 8);
    gb.setLed(i, j + 8, car [i][j]);
  }
}
}
if (modeSelector() == 1) {
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++){
      gb.wipePoint(i, j + 8);
    gb.setLed(i, j + 8, snake [i][j]);
  }
}
}
if (modeSelector() == 2) {
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++){
      gb.wipePoint(i, j + 8);
    gb.setLed(i, j + 8, TETRIS[i][j]);
  }
}
}

}
int modeSelector() {
  if (gb.getKey() == 4) {
    modeCount++;
    delay(250);
    if (modeCount > 2) {
      modeCount = 0;
    }
  }
  else if (gb.getKey() == 5) {
    modeCount--;
    delay(250);
    if (modeCount < 0) {
      modeCount = 2;
    }
  }
  return modeCount;
}

void switchMode(int mode){
  switch(mode){
    case 0: mainMenu();
    break;
    case 1: mainRaicing(50);
    break;
    case 2: mainSnake();
    break;
    case 3: mainTetris();
    break;
  }
}
