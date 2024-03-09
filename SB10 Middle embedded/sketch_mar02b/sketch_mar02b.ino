#include <GameBoy.h>
GameBoy kapCat;

void setup() {
  kapCat.begin(8);

}

void loop() {
  enemyCar(3, 5);
}

void enemyCar(int x, int y) {
  kapCat.drawPoint(x, y);
  kapCat.drawPoint(x, y - 1);
  kapCat.drawPoint(x - 1, y - 1);
  kapCat.drawPoint(x + 1, y - 1);
  kapCat.drawPoint(x, y - 2);
  kapCat.drawPoint(x - 1, y - 3);
  kapCat.drawPoint(x + 1, y - 3);
}
void WipeenemyCar(int x, int y) {
  kapCat.wipePoint(x, y);
  kapCat.wipePoint(x, y - 1);
  kapCat.wipePoint(x - 1, y - 1);
  kapCat.wipePoint(x + 1, y - 1);
  kapCat.wipePoint(x, y - 2);
  kapCat.wipePoint(x - 1, y - 3);
  kapCat.wipePoint(x + 1, y - 3);
}
void PleyerCar(int x, int y) {
  kapCat.drawPoint(x, y);
  kapCat.drawPoint(x, y + 1);
  kapCat.drawPoint(x - 1, y + 1);
  kapCat.drawPoint(x + 1, y + 1);
  kapCat.drawPoint(x, y + 2);
  kapCat.drawPoint(x - 1, y + 3);
  kapCat.drawPoint(x + 1, y + 3);
}
void WipePleyerCar(int x, int y) {
  kapCat.wipePoint(x, y);
  kapCat.wipePoint(x, y + 1);
  kapCat.wipePoint(x - 1, y + 1);
  kapCat.wipePoint(x + 1, y + 1);
  kapCat.wipePoint(x, y - 2);
  kapCat.wipePoint(x - 1, y + 3);
  kapCat.wipePoint(x + 1, y + 3);
}
 void control(){
  if(kapCat.getKey() > 0){
    if(kapCat.getKey() == 4){
      WipePleyerCar (5, 12);
      PleyerCar (2, 12);
    }
    if(kapCat.getKey() == 5){
      WipePleyerCar (2, 12);
      PleyerCar (5, 12);
     
  }
  }
 }
 delay(500);
