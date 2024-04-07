#include <GameBoy.h> //Підключив бібліотеку
GameBoy gb; // надав значення gb 

bool state = true; //визначення стану хавки

int snakeX[30];
int snakeY[30];

int up = 0;       //кнопка вгору
int right = 1;    //кнопка вправо
int bottom = 2;   //кнопка вниз
int left = 3;     //кнопка вліво

int direction = right;

int lenSnake = 3;

int foodX = 0, foodY = 0;//значення хавки

void setup() { //Підготовка
  gb.begin(8);//включили гейбой
  randomSeed(analogRead(0));//підключили рандом
  snakeX[0] = 4;//значення snakeX
  snakeY[0] = 7;//знвчення SnakeY
}

void loop() {
  makeMove();//викликаємо MakeMove
  move();
  if (snakeX[0] == foodX && snakeY[0] == foodY) { //перевірка 
    lenSnake++;//якщо умова виконана то робимо це гвно
    makeFood();//робимо хавку
  }

  gb.clearDisplay();//чстимо точку
  drawFood();//малюємо хвку
  drawSnake();//малюємо змійку
  lose();//програш
  delay(300);//затримка перед новим діями
}

void makeMove() {
  if (gb.getKey() == 3 && direction != bottom) { //не можна змінити напрямок в протилежній
    direction = up;
  }
  if (gb.getKey() == 4 && direction != right) {//не можна змінити напрямок в протилежній
    direction = left;
  }
  if (gb.getKey() == 5 && direction != left) {//не можна змінити напрямок в протилежній
    direction = right;
  }
  if (gb.getKey() == 6 && direction != up) {//не можна змінити напрямок в протилежній
    direction = bottom;
  }
}

void makeFood() {//змінна яка нічого не поверне лол
  foodX = random (8);//рандомне місце де заспавниця хавка
  foodY = random (16);//рандомне місце де заспавниться хавка
  while (isPartOfSnake(foodX, foodY)) {//значення яке щось повертає
    foodX = random (8);
    foodY = random (16);
  }
}
void drawFood() {//змінна яка нічого не поверне 
  state = !state;
  if (state) {//перевірка
    gb.drawPoint(foodX, foodY);//малюємо точку 
  } else {//інакше
    gb.wipePoint(foodX, foodY);//стераємо точку
  }
}

void move() {//нова змінна
  for (int i = lenSnake - 1; i > 0; i--) {//
    snakeX[i] = snakeX[i - 1];
    snakeY[i] = snakeY[i - 1];
  }
  if (direction == up) {//перевірка чи не виходимо за рамки
    if  (snakeY[0] == 0) {//перевірка чи не виходимо за рамки
      snakeY[0] = 15;//перевірка чи не виходимо за рамки
    } else {//перевірка чи не виходимо за рамки
      snakeY[0]--;//перевірка чи не виходимо за рамки
    }
  }
  if (direction == bottom) {//перевірка чи не виходимо за рамки
    if (snakeY[0] == 15) {//перевірка чи не виходимо за рамки
      snakeY[0] = 0;//перевірка чи не виходимо за рамки
    } else {//перевірка чи не виходимо за рамки
      snakeY[0]++;//перевірка чи не виходимо за рамки
    }
  }
  if (direction == right) {//перевірка чи не виходимо за рамки
    if (snakeX[0] == 7) {//перевірка чи не виходимо за рамки
      snakeX[0] = 0;//перевірка чи не виходимо за рамки
    } else {//перевірка чи не виходимо за рамки
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

bool isPartOfSnake(int x, int y) {
  for (int i = lenSnake - 1; i > 0; i--) {
    if (x == snakeX[i] && y == snakeY[i]) return true;
  }
  return false;
}

void lose(){
  for(int i = lenSnake - 1; i > 0; i--){
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
  gb,sound(SCORE);
}
