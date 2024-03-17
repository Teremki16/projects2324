#include <GameBoy.h>
GameBoy chupacabra;



void setup() {
  chupacabra.begin(8);
  MyCar(2, 12);
  randomSeed(analogRead(0));

}

void loop() {
  MainRacing(100);

}

void enemyCar(int x , int y) {
  chupacabra.drawPoint(x, y);
  chupacabra.drawPoint(x, y - 1);
  chupacabra.drawPoint(x - 1, y - 1);
  chupacabra.drawPoint(x + 1, y - 1);
  chupacabra.drawPoint(x, y - 2);
  chupacabra.drawPoint(x - 1, y - 3);
  chupacabra.drawPoint(x + 1, y - 3);

}
void MyCar(int x , int y) {
  chupacabra.drawPoint(x, y);
  chupacabra.drawPoint(x, y + 1);
  chupacabra.drawPoint(x - 1, y + 1);
  chupacabra.drawPoint(x + 1, y + 1);
  chupacabra.drawPoint(x, y + 2);
  chupacabra.drawPoint(x - 1, y + 3);
  chupacabra.drawPoint(x + 1, y + 3);

}
void wipeEnemyCar(int x , int y) {
  chupacabra.wipePoint(x, y);
  chupacabra.wipePoint(x, y - 1);
  chupacabra.wipePoint(x - 1, y - 1);
  chupacabra.wipePoint(x + 1, y - 1);
  chupacabra.wipePoint(x, y - 2);
  chupacabra.wipePoint(x - 1, y - 3);
  chupacabra.wipePoint(x + 1, y - 3);
}
void wipeMyCar(int x , int y) {
  chupacabra.wipePoint(x, y);
  chupacabra.wipePoint(x, y + 1);
  chupacabra.wipePoint(x - 1, y + 1);
  chupacabra.wipePoint(x + 1, y + 1);
  chupacabra.wipePoint(x, y + 2);
  chupacabra.wipePoint(x - 1, y + 3);
  chupacabra.wipePoint(x + 1, y + 3);
}
int player_x = 2;
int player_y = 12;
void control() {
  if (chupacabra.getKey() > 0) {
    if (chupacabra.getKey() == 4) {
      wipeMyCar(5, 12);
      player_x = 2;
    }
    if (chupacabra.getKey() == 5) {
      wipeMyCar(2, 12);
      player_x = 5;
    }
  }
  MyCar (player_x, player_y);
}

int enemy_x = 2;
void MainRacing(int enemySpeed) {
  enemy_x = random(100);
  if (enemy_x > 50) {
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
    if (Collision(player_x, player_y, enemy_x, enemy_y)) {
     
      chupacabra.sound(COLLISION);
       chupacabra.testMatrix(10);
       chupacabra.clearDisplay();
       
      return;
    }
    if (enemy_y>16){
      
      
    }
    control();
    delay(enemySpeed);
    wipeEnemyCar (enemy_x, enemy_y);
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
  chupacabra.drawPoint(0, y);
  chupacabra.drawPoint(0, y + 1);
  chupacabra.drawPoint(0, y + 2);

  chupacabra.drawPoint(7, y);
  chupacabra.drawPoint(7, y + 1);
  chupacabra.drawPoint(0, y + 2);

}
void clearLine(int y) {
  chupacabra.wipePoint(0, y);
  chupacabra.wipePoint(0, y + 1);
  chupacabra.wipePoint(0, y + 2);

  chupacabra.wipePoint(7, y);
  chupacabra.wipePoint(7, y + 1);
  chupacabra.wipePoint(0, y + 2);

}

bool Collision(int player_x, int player_y, int enemy_x, int enemy_y) {
  if (player_x == enemy_x && player_y == enemy_y) {
    return true;
  }
  if (player_x == enemy_x && enemy_y > 12) {
    return true;
  }
    return false;
  }
