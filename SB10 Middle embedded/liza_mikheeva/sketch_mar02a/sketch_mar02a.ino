#include <GameBoy.h>
GameBoy gb;
void setup() {
  gb.begin(8);
  randomSeed(analogRead(0));
  PlayerCar(2, 12);
}

void loop() {
  enemyMove(100);

}



void enemyCar(int x, int y) {
  gb.drawPoint(x, y);
  gb.drawPoint(x, y - 1);
  gb.drawPoint(x - 1, y - 1);
  gb.drawPoint(x + 1, y - 1);
  gb.drawPoint(x, y - 2);
  gb.drawPoint(x + 1, y - 3);
  gb.drawPoint(x - 1, y - 3);
}

void PlayerCar(int x, int y) {
  gb.drawPoint(x, y);
  gb.drawPoint(x, y + 1);
  gb.drawPoint(x - 1, y + 1);
  gb.drawPoint(x + 1, y + 1);
  gb.drawPoint(x, y + 2);
  gb.drawPoint(x + 1, y + 3);
  gb.drawPoint(x - 1, y + 3);
}
void wipeEnemyCar(int x, int y) {
  gb.wipePoint(x, y);
  gb.wipePoint(x, y - 1);
  gb.wipePoint(x - 1, y - 1);
  gb.wipePoint(x + 1, y - 1);
  gb.wipePoint(x, y - 2);
  gb.wipePoint(x + 1, y - 3);
  gb.wipePoint(x - 1, y - 3);
}
void wipePlayerCar(int x, int y) {
  gb.wipePoint(x, y);
  gb.wipePoint(x, y + 1);
  gb.wipePoint(x - 1, y + 1);
  gb.wipePoint(x + 1, y + 1);
  gb.wipePoint(x, y + 2);
  gb.wipePoint(x + 1, y + 3);
  gb.wipePoint(x - 1, y + 3);
}
int player_x = 2;
int player_y = 12;
void control() {
  if (gb.getKey() == 4) {
    wipePlayerCar(5, 12);
    player_x = 2;
  }
  if (gb.getKey() == 5) {
    wipePlayerCar(2, 12);
    player_x = 5;
  }

  PlayerCar(player_x, player_y);
}
int enemy_x = 2;
void enemyMove( int enemySpeed) {
  enemy_x  = random(10);
  if (enemy_x > 5) {
    enemy_x = 2;
  } else {
    enemy_x = 5;
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
    if (Collision(player_x, player_y, enemy_x, enemy_y)) {
      gb.sound(COLLISION);
      gb.testMatrix(10);
      gb.clearDisplay();
      return;
    }
    if (enemy_y > 15) {
      gb.sound(SCORE);
    }
    control();
    delay(enemySpeed);
    wipeEnemyCar(enemy_x, enemy_y);
    createLine(enemy_y);
    clearLine(enemy_y + 5);
    clearLine(enemy_y + 10);
    clearLine(enemy_y + 15);
    clearLine(enemy_y - 5);
    clearLine(enemy_y - 10);
    clearLine(enemy_y - 15);
  }

}
void createLine(int y) {
  gb.drawPoint(0, y);
  gb.drawPoint(0, y + 1);
  gb.drawPoint(0, y + 2);

  gb.drawPoint(7, y);
  gb.drawPoint(7, y + 1);
  gb.drawPoint(7, y + 2);
}
void clearLine(int y) {
  gb.wipePoint(0, y);
  gb.wipePoint(0, y + 1);
  gb.wipePoint(0, y + 2);

  gb.wipePoint(7, y);
  gb.wipePoint(7, y + 1);
  gb.wipePoint(7, y + 2);
}


bool Collision(int Player_x, int Player_y, int enemy_x, int enemy_y) {
  if (player_x == enemy_x && player_y == enemy_y) {
    return true;
  }

  if (player_x == enemy_x && enemy_y > 12) {
    return true;
  }
  return false;
}
