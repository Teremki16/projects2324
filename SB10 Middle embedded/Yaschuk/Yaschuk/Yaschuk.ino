#include <GameBoy.h>
GameBoy gb;

int x[4] = {2, 3, 3, 2};
int y[4] = {3, 3, 4, 4};
void setup() {
  gb.begin(8);

}


void loop() {
  control();
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
  gb.drawPoint(x - 1, y + 3);
  gb.drawPoint(x + 1, y + 3);
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
  gb.wipePoint(x - 1, y + 3);
  gb.wipePoint(x + 1, y + 3);
}

void control () {
  if (gb.getKey() > 0) {
    if (gb.getKey() == 4) {
      wipePlayerCar(5, 12);
      playerCar(2, 12);

    } 
      if (gb.getKey() == 5) {
        wipePlayerCar(2, 12);
        playerCar(5, 12);
       delay(100);
      }
    
  }
}
