#include <GameBoy.h>
GameBoy gb;

int x[4] = {2, 3, 3, 2};
int y[4] = {3, 3, 4, 4};
void setup() {
  gb.begin(8);
  randomSeed(analogRead(0));
  playerCar(2, 12);

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
void playerCar(int x, int y) {
  gb.drawPoint(x, y);
  gb.drawPoint(x, y + 1);
  gb.drawPoint(x - 1, y + 1);
  gb.drawPoint(x + 1, y + 1);
  gb.drawPoint(x, y + 2);
  gb.drawPoint(x + 1, y + 3);
  gb.drawPoint(x - 1 , y + 3);

}
void wipeplayerCar(int x, int y) {
  gb.wipePoint(x, y);
  gb.wipePoint(x, y + 1);
  gb.wipePoint(x - 1, y + 1);
  gb.wipePoint(x + 1, y + 1);
  gb.wipePoint(x, y + 2);
  gb.wipePoint(x + 1, y + 3);
  gb.wipePoint(x - 1, y + 3);

}
void wipeenemyCar(int x, int y) {
  gb.wipePoint(x, y);
  gb.wipePoint(x, y - 1);
  gb.wipePoint(x - 1, y - 1);
  gb.wipePoint(x + 1, y - 1);
  gb.wipePoint(x, y - 2);
  gb.wipePoint(x + 1, y - 3);
  gb.wipePoint(x - 1, y - 3);
}
int player_x = 2;
int player_y = 12;
void control() {
  if (gb.getKey() > 0) {
    if (gb.getKey() == 4) {
      wipeplayerCar(5, 12);
      player_x = 2;
    }
    if (gb.getKey() == 5) {
      wipeplayerCar(2, 12);
      player_x = 5;
    }
  }
  playerCar(player_x, player_y);
} int enemy_x = 2;
void enemyMove(int enemySpeed) {
  enemy_x = random(10);
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
      gb.testMatrix(10);
      gb.sound(COLLISION);
      gb.clearDisplay();
      return;
    }
    if(enemy_y > 14){
      gb.sound(SCORE);
    }
    control();
      delay(enemySpeed);
      wipeenemyCar(enemy_x, enemy_y);
      clearLine(enemy_y);
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
  bool Collision(int player_x, int player_y, int enemy_x, int enemy_y) {
    if (player_x == enemy_x && player_y == enemy_y) {
      return true;

    }
    return false;
  }
