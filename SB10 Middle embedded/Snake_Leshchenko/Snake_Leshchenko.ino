#include <GameBoy.h>
GameBoy gb;

int x = 1, y = 0;
int dirX, dirY;

int snakeX[10];
int snakeY[10];

int foodX = 0, foodY = 0;

void setup() {
  gb.begin(8);
  randomSeed(analogRead(0));
  snakeX[0] = 4;
  snakeY[0] = 7;
}
void loop() {
  makeMove();
  dirX = dirX + x;
  dirY = dirY + y;
  if (dirX > 7) dirX = 0;
  if (dirX < 0) dirX = 7;
  if (dirY > 15) dirY = 0;
  if (dirY < 0) dirY = 15;
  if (dirX == foodX && dirY == foodY) {
    makeFood();
    tone(4, 2500, 300);
    delay(100);
    tone(4, 2500, 300);
  }
  gb.clearDisplay();
  gb.drawPoint(foodX, foodY);
  gb.drawPoint(dirX, dirY);
  delay(300);
}

void makeMove() {
  if (gb.getKey() == 3) {
    tone(4, 2500, 100);
    x = 0;
    y = -1;
  }
  if (gb.getKey() == 6) {
    tone(4, 2500, 100);
    x = 0;
    y = 1;
  }

  if (gb.getKey() == 4) {
    tone(4, 2500, 100);
    x = -1;
    y = 0;
  }

  if (gb.getKey() == 5) {
    tone(4, , 100);
    x = 1;
    y = 0;
  }
}
void makeFood() {
  foodX = random(8);
  foodY = random(16);

}
