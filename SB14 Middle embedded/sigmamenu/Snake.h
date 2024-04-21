
bool state = true;

int snakeX[30];//розмір зміїX
int snakeY[30];//розиір зміїY

int up = 0;
int right = 1;
int botton = 2;
int left = 3;

int direction = right;

int lenSnake = 3;

int foodX = 0, foodY = 0;





void makeMove() { // створив рух
  if (gb.getKey() == 3 && direction != botton) { //пояснення кнопки вверх
    direction = up;
  }
  if (gb.getKey() == 4 && direction != right) {//пояснення кнопки вліво
    direction = left;
  }
  if (gb.getKey() == 5 && direction != left) {//пояснення кнопки вправо
    direction = right;
  }
  if (gb.getKey() == 6 && direction != up) {//пояснення кнопки вниз
    direction = botton;
  }
}
void drawFood() { // намалював їжу
  state = !state;// стан дорівнює не стану
  if (state) {
    gb.drawPoint(foodX, foodY);// зтерти крапку
  } else {
    gb.wipePoint(foodX, foodY);//зткрти крапку
  }
}
bool isPartOfSnake (int x, int y) {
  for (int i = lenSnake - 1; i > 0; i--) {
    if (x == snakeX[i] && y == snakeY[i]) return true;
  }
  return false;
}
void makeFood() { //створив їжу
  foodX = random(8); //рандомний спавн їжіХ
  foodY = random(16);//рандомний спавн їжіY
  while (isPartOfSnake(foodX, foodY)) {
    foodX = random(8);
    foodY = random(16);
  }
}

void move() { // задаємо рух
  for (int i = lenSnake - 1; i > 0; i--) {
    snakeX[i] = snakeX[i - 1];
    snakeY[i] = snakeY[i - 1];
  }
  if (direction == up) {
    if  (snakeY[0] == 0) {
      snakeY[0] = 15;
    } else {
      snakeY[0]--;

    }
  }
  if (direction == botton) {
    if  (snakeY[0] == 15) {
      snakeY[0] = 0;
    } else { //якщо
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

void drawSnake() {
  for (int i = 0; i < lenSnake; i++) {
    gb.drawPoint(snakeX[i], snakeY[i]);//намалював змію
  }
}



void lose() {
  for (int i = lenSnake - 1; i > 0; i --) {
    if (snakeX[0] == snakeX[i] && snakeY[0] == snakeY[i]) {
      delay(2000);
      gb.clearDisplay();//відчиств дисплей
      gb.testMatrix(10);//заповнив матрицю
      for (int j = 0; j < lenSnake; j++) {
        snakeX[j] = 0;
        snakeY[j] = 0;
      }
      direction = right;
      snakeX[0] = 4;
      snakeY[0] = 7;
      foodX = 3;
      foodY = 3;
      lenSnake = 3;
      return;
    }
  }
}
void snakeGame() {
  makeMove();
  move();
  if (snakeX[0] == foodX && snakeY[0] == foodY) {
    lenSnake++;
    makeFood();

    //    tone(4, 1000, 100); //звук

  }
  gb.clearDisplay();
  drawFood();
  drawSnake();
  lose();
  delay(250);
}
