bool state = true;

int snakeX[10];
int snakeY[10];

int up = 0; // 
int right = 1; // 
int bottom = 2; // к
int left = 3; // к

int direction = right;

int lenSnake = 3; // довжина змії

int foodX = 0, foodY = 0; 

void makeMove() { // функція руху
  if (gb.getKey() == 3 && direction != bottom) { 
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



void drawFood() { // функція створення їжі
  state = !state;
  if (state) {
    gb.drawPoint(foodX, foodY); // малює їжу
  } else { // інакше
    gb.wipePoint(foodX, foodY);
  }
}
bool isPartOFSnake(int x, int y) {

  for (int i = lenSnake - 1; i > 0; i--) {
    if (x == snakeX[i] && y == snakeY[i])return true;
  }
  return false;
}
void makeFood() {
  foodX = random (8);
  foodY = random (16);
  while (isPartOFSnake(foodX, foodY)) {
    foodX = random (8);
    foodY = random (16);
  }
}

void move() {
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

void drawSnake() {
  for (int i = 0; i < lenSnake; i++) {
    gb.drawPoint(snakeX[i], snakeY[i]);
  }
}


void lose() {
  for (int i = lenSnake - 1; i > 0; i--) {
if(snakeX[0] == snakeX[i] && snakeY[0] == snakeY[i]){
  delay(2000);
  gb.clearDisplay();
  gb.testMatrix(10);
  for(int j = 0; j < lenSnake; j++){
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
void mainSnake() {
  makeMove(); // функція руху
  move();
  if (snakeX[0] == foodX && snakeY[0] == foodY) {
    lenSnake++; //
    makeFood(); // створює їжу

  }
  gb.clearDisplay(); // стирає дисплей
  drawFood(); // малює їжу
  drawSnake(); // малює змію
  delay(300); // робить затримку
}
