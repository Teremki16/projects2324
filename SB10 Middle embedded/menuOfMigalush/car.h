int carScore = 0;

void enemyCar(int x, int y) {
  GB.drawPoint(x, y);
  GB.drawPoint(x, y - 1);
  GB.drawPoint(x - 1, y - 1);
  GB.drawPoint(x + 1, y - 1);
  GB.drawPoint(x, y - 2);
  GB.drawPoint(x + 1, y - 3);
  GB.drawPoint(x - 1, y - 3);

}

void myCar(int x, int y) {
  GB.drawPoint(x, y);
  GB.drawPoint(x, y + 1);
  GB.drawPoint(x - 1, y + 1);
  GB.drawPoint(x + 1, y + 1);
  GB.drawPoint(x, y + 2);
  GB.drawPoint(x + 1, y + 3);
  GB.drawPoint(x - 1, y + 3);

}

void wipeenemyCar(int x, int y) {
  GB.wipePoint(x, y);
  GB.wipePoint(x, y - 1);
  GB.wipePoint(x - 1, y - 1);
  GB.wipePoint(x + 1, y - 1);
  GB.wipePoint(x, y - 2);
  GB.wipePoint(x + 1, y - 3);
  GB.wipePoint(x - 1, y - 3);

}

void wipemyCar(int x, int y) {
  GB.wipePoint(x, y);
  GB.wipePoint(x, y + 1);
  GB.wipePoint(x - 1, y + 1);
  GB.wipePoint(x + 1, y + 1);
  GB.wipePoint(x, y + 2);
  GB.wipePoint(x + 1, y + 3);
  GB.wipePoint(x - 1, y + 3);

}
int my_x = 2;
int my_y = 12;

void control() {
  if (GB.getKey() > 0) {
    if (GB.getKey() == 4) {
      wipemyCar(5, 12);
      my_x = 2;
    }
    if (GB.getKey() == 5) {
      wipemyCar(2, 12);
      my_x = 5;
    }
  }
  myCar(my_x, my_y);
}
int enemy_x = 2;


void createLine(int y) {
  GB.drawPoint(0, y);
  GB.drawPoint(0, y + 1);
  GB.drawPoint(0, y + 2);

  GB.drawPoint(7, y);
  GB.drawPoint(7, y + 1);
  GB.drawPoint(7, y + 2);
}

void wipeLine(int y) {
  GB.wipePoint(0, y);
  GB.wipePoint(0, y + 1);
  GB.wipePoint(0, y + 2);

  GB.wipePoint(7, y);
  GB.wipePoint(7, y + 1);
  GB.wipePoint(7, y + 2);
}

bool Collision(int my_x, int my_y, int enemy_x, int enemy_y) {
  if (my_x == enemy_x && my_y == enemy_y) {
    return true;
  }
  if (my_x == enemy_x && enemy_y > 12) {
    return true;
  }
  return false;
}

void mainRaicng(int enemySpeed) {
  enemy_x = random(10);
  if (enemy_x > 5) {
    enemy_x = 5;
  } else {
    enemy_x = 2;
  }
  for (int enemy_y = 0; enemy_y < 16; enemy_y++) {
    createLine(enemy_y);
    createLine(enemy_y + 5);
    createLine(enemy_y + 10);
    createLine(enemy_y + 15);
    createLine(enemy_y - 5);
    createLine(enemy_y - 10);
    createLine(enemy_y - 15);
    enemyCar(enemy_x, enemy_y);
    if (Collision(my_x, my_y, enemy_x, enemy_y)) {
      delay(2000);
      carScore = 0;
      GB.testMatrix(10);
      GB.sound(COLLISION);
      return;
    }
    if (enemy_y > 12){
      carScore++;
      GB.sound(SCORE);
    }
    control();
    delay(enemySpeed);
    wipeenemyCar(enemy_x, enemy_y);
    wipeLine(enemy_y);
    wipeLine(enemy_y + 5);
    wipeLine(enemy_y + 10);
    wipeLine(enemy_y + 15);
    wipeLine(enemy_y - 5);
    wipeLine(enemy_y - 10);
    wipeLine(enemy_y - 15);
  }

}
