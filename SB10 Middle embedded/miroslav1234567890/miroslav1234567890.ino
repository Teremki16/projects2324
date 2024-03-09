#include<GameBoy.h>
GameBoy GB;

int x[4] = {2, 3, 3, 2};
int y[4] = {3, 3, 4, 4};
void setup() {
  GB.begin(8);
}

void loop() {
  enemyCar(3, 5);
  myCar(3, 10);
  
  
}

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

void control(){
  if(GB.getKey>0){
    if(GB.getKey())==4){
      wipemyCar(5, 12);
      myCar(2, 12);
    }
    if(GB.getKey())==5){
      wipemyCar(22, 12);
      myCar(5, 12);
    }
    
  }
}
