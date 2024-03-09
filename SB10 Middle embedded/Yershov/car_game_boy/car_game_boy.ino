#include <GameBoy.h>
GameBoy chupacabra;


int x [4] = {2, 3, 3, 2};
int y [4] = {3, 3, 4, 4};
void setup() {
  chupacabra.begin(8);

}

void loop() {
control();

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
void control() {
  if (chupacabra.getKey() > 0) {
    if (chupacabra.getKey() == 4) {
      wipeMyCar(5, 12);
      MyCar(2, 12);
    }
    if (chupacabra.getKey() == 5) {
      wipeMyCar(2, 12);
      MyCar(5, 12);
    }
    delay(100);
  }
}
