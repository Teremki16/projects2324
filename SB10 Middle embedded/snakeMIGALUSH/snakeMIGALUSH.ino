#include<GameBoy.h>
GameBoy GB;



int snakeX[29];
int snakeY[29];

int up = 0;
int right = 1;
int bottom = 2;
int left = 3;

int direction = right;

int lenSnake = 3;

bool state = true;

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
  if (snakeX[0] == foodX && snakeY[0] == foodY) {
    lenSnake++;
    makeFood();


  }
  GB.clearDisplay();
  drawFood();
  drawSnake();
  Lose();
  delay(300);

}

void makeMove() {
  if (GB.getKey() == 3 && direction != bottom) {
    direction = up;
  }
  if (GB.getKey() == 6 && direction != up) {
    direction = bottom;
  }
  if (GB.getKey() == 4 && direction != right) {
    direction = left;
  }
  if (GB.getKey() == 5 && direction != left) {
    direction = right;
  }
}

void makeFood() {
  foodX = random(8);
  foodY = random(8);
  while (isPartOfSnake(foodX, foodY)) {
    foodX = random(8);
    foodY = random(8);
  }
}
void drawFood() {
  state = !state;
  if (state) {
    GB.drawPoint(foodX, foodY);
  } else {
    GB.wipePoint(foodX, foodY);
  }
}

void Move() {
  for (int i = lenSnake - 1; i > 0; i--) {
    snakeX[i] = snakeX[i - 1];
    snakeY[i] = snakeY[i - 1];
  }
  if (direction == up) {
    if (snakeY[0] == 0) {
      snakeY[0] = 15;
    } else {
      snakeY[0]--;
    }
  }
  if (direction == bottom) {
    if (snakeY[0] == 15) {
      snakeY[0] = 0;
    } else {
      snakeY[0]++;
    }
  }
  if (direction == left) {
    if (snakeX[0] == 0) {
      snakeX[0] = 7;
    } else {
      snakeX[0]--;
    }
  }
  if (direction == right) {
    if (snakeX[0] == 7) {
      snakeX[0] = 0;
    } else {
      snakeX[0]++;
    }
  }
}

void drawSnake() {
  for (int i = 0; i < lenSnake; i++) {
    GB.drawPoint(snakeX[i], snakeY[i]);
  }
}



bool isPartOfSnake(int x, int y) {
  for (int i = 0; i < lenSnake - 1; i++) {
    if (snakeX[i] == x && snakeY[i] == y) return true;
  }
  return false;
}

void Lose() {
  for (int i = lenSnake - 1; i > 0; i--) {
    if (snakeX[0] == snakeX[i] && snakeY[0] == snakeY[i]) {
      delay(2000);
      GB.clearDisplay();
      GB.testMatrix(10);
      for (int j = 0; j < lenSnake - 1; j++) {
        snakeX[j] = 0;
        snakeY[j] = 0;
      }
      direction = right;
      foodX = 3;
      foodY = 3;
      snakeX[0] = 4;
      snakeY[0] = 7;
      return;
    }
  }
}