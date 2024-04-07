#include <GameBoy.h>
GameBoy gb;


int snakeX[120];
int snakeY[120];

int up = 0;
int left = 3;
int right = 1;
int bottom = 2;

int direction = right;
int lenSnake = 2;
bool state = true;

int foodX = 0, foodY = 0;
void setup() {
  gb.begin(8);
  randomSeed(analogRead(0));
  snakeX[0] = 4;
  snakeY[0] = 7;
}

void loop() {
  makeMove();
  move();

  if (snakeX[0] == foodX && snakeY[0] == foodY) {
    lenSnake++;
    makeFood();
    

  }
  gb.clearDisplay();
  drawFood();
  drawSnake();
  isLose();
  delay(100);
}

void makeMove() {
  if (gb.getKey() == 3 && direction != bottom) {
    tone(4, 1500, 100);
    direction = up;
  }
  if (gb.getKey() == 4 && direction != right) {

    direction = left;
  }
  if (gb.getKey() == 5 && direction != left) {

    direction = right;
  }
  if (gb.getKey() == 6 && direction != up) {

    direction = bottom;
  }
}

void makeFood() {
  foodX = random(8);
  foodY = random(16);
  while (isPartOfSnake(foodX, foodY)) {
    foodX = random(8);
    foodY = random(16);
  }
}
void drawSnake() {
  for (int i = 0; i < lenSnake; i++) {
    gb.drawPoint(snakeX[i], snakeY[i]);
  }
}
void move() {
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
  if (direction == right) {
    if (snakeX[0] == 7) {
      snakeX[0] = 0;
    } else {
      snakeX[0]++;
    }
  }
  if (direction == left) {
    if (snakeX[0] == 0) {
      snakeX[0] = 7;
    } else {
      snakeX[0]--;
    }
  }
}



void drawFood() {
  state = !state;
  if (state) {
    gb.drawPoint(foodX, foodY);
  } else {
    gb.wipePoint(foodX, foodY);
  }
}

bool isPartOfSnake(int x, int y) {
  for (int i = 0; i < lenSnake - 1; i++) {
    if (snakeX[i] == x && snakeY[i] == y)return true;
  }
  return false;
}
void isLose(){
  for(int i = lenSnake -1; i> 0; i--){
    if(snakeX[0] == snakeX[i] && snakeY[0]==snakeY[i]){
      delay(2000);
      gb.clearDisplay();
      gb.testMatrix(10);
      for(int j = 0; j< lenSnake-1;j++){
        snakeX[j]=0;
        snakeY[j]=0;
      }
      direction = right;
      foodX = 3;
      foodY = 3;
      snakeX[0]=4;
      snakeY[0]=7;
      return;
    }
  }
}
