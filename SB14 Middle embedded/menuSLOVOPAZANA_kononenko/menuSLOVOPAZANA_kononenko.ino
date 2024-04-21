#include <GameBoy.h>
GameBoy gb;
#include "Car.h"
#include "Snake1488.h"
int modeCount = 0;

byte ARROWS[8][8] = {
  { 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0},
  { 0 , 0 , 1 , 0 , 0 , 1 , 0 , 0},
  { 0 , 1 , 1 , 0 , 0 , 1 , 1 , 0},
  { 1 , 1 , 1 , 0 , 0 , 1 , 1 , 1},
  { 0 , 1 , 1 , 0 , 0 , 1 , 1 , 0},
  { 0 , 0 , 1 , 0 , 0 , 1 , 0 , 0},
  { 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0},
  { 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0}
};

byte CAR[8][8] = {
  { 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0},
  { 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0},
  { 0 , 1 , 1 , 1 , 0 , 0 , 0 , 0},
  { 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0},
  { 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0},
  { 0 , 0 , 0 , 0 , 1 , 1 , 1 , 0},
  { 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0},
  { 0 , 0 , 0 , 0 , 1 , 0 , 1 , 0}
};

byte SNAKE[8][8] = {
  { 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0},
  { 0 , 0 , 1 , 1 , 1 , 1 , 0 , 0},
  { 0 , 1 , 1 , 0 , 0 , 1 , 1 , 0},
  { 0 , 1 , 1 , 0 , 0 , 0 , 0 , 0},
  { 0 , 0 , 1 , 1 , 1 , 1 , 0 , 0},
  { 0 , 0 , 0 , 0 , 0 , 1 , 1 , 0},
  { 0 , 1 , 1 , 0 , 0 , 1 , 1 , 0},
  { 0 , 0 , 1 , 1 , 1 , 1 , 0 , 0}
};

void setup() {
  gb.begin(0);
  randomSeed(analogRead(0));
  snakeX[0] = 4;
  snakeY[0] = 7;
}

int modes = 0;
void loop() {
  if (gb.getKey() == 2 && modeSelector() == 0) {
    gb.clearDisplay();
    modes = 1;
  }

else if (gb.getKey() == 2 && modeSelector() == 1) {
    gb.clearDisplay();
    modes = 2;
  }
  else if(gb.getKey() == 1){
    gb.clearDisplay();
    modes = 0;
  }
switchMode(modes);
}
  void mainMenu () {
    for (int i = 0; i < 8 ; i++) {
      for (int j = 0; j < 8 ; j++) {
        gb.wipePoint(i, j);
        gb.setLed(i, j, ARROWS[j][i]);
      }
    }
    if (modeSelector() == 0) {
      for (int i = 0; i < 8 ; i++) {
        for (int j = 0; j < 8 ; j++) {
          gb.wipePoint(i, j + 8);
          gb.setLed(i, j + 8, CAR[j][i]);
        }
      }
    }
    if (modeSelector() == 1) {
      for (int i = 0; i < 8 ; i++) {
        for (int j = 0; j < 8 ; j++) {
          gb.wipePoint(i, j + 8);
          gb.setLed(i, j + 8, SNAKE[j][i]);
        }
      }
    }

  }


  int modeSelector() {
    if (gb.getKey() == 4) {
      modeCount++;
      delay(250);
      if (modeCount > 1) {
        modeCount = 0;
      }
    }
    if (gb.getKey() == 5) {
      modeCount--;
      delay(250);
      if (modeCount < 0) {
        modeCount = 1;
      }
    }
    return modeCount;

  }








  void switchMode(int mode) {
    switch (mode) {
      case 0: mainMenu();
        break;
      case 1: mainRacing(50);
        break;
      case 2: snakeGame();
        break;

    }

  }
