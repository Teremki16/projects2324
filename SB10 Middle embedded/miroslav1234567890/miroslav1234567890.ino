#include<GameBoy.h>
GameBoy GB;

int x[4] = {2, 3, 3, 2};
int y[4] = {3, 3, 4, 4};
void setup() {
  GB.begin(8);
  randomSeed(analogRead(0));
  myCar(2,12);
}

void loop() {
  enemyMove(50);
  control();
  
  
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
  if(GB.getKey() > 0){
    if(GB.getKey()==4){
      wipemyCar(5, 12);
      myCar(2, 12);
    }
    if(GB.getKey() == 5){
      wipemyCar(22, 12);
      myCar(5, 12);
    }
    delay(100);
  }
}
int enemyX = 2;
void enemyMove(int enemySpeed){
  enemyX = random(10);
  if(enemyX > 5){
    enemyX = 2;
  }else{
    enemyX=5;
  }
  for(int enemyY = 0;enemyY <16;enemyY++){
    createLine(enemyY);
    createLine(enemyY + 5);
    createLine(enemyY + 10);
    createLine(enemyY + 15);
    createLine(enemyY - 5);
    createLine(enemyY - 10);
    createLine(enemyY - 15);
    enemyCar(enemyX,enemyY);
    control();
    delay(enemySpeed);
    wipeenemyCar(enemyX,enemyY);
    wipeLine(enemyY);
    wipeLine(enemyY + 5);
    wipeLine(enemyY + 10);
    wipeLine(enemyY + 15);
    wipeLine(enemyY - 5);
    wipeLine(enemyY - 10);
    wipeLine(enemyY - 15);
  }
  
}

void createLine(int y){
  GB.drawPoint(0,y);
  GB.drawPoint(0,y + 1);
  GB.drawPoint(0,y + 2);
  
  GB.drawPoint(7,y);
  GB.drawPoint(7,y + 1);
  GB.drawPoint(7,y + 2);
}

void wipeLine(int y){
  GB.wipePoint(0,y);
  GB.wipePoint(0,y + 1);
  GB.wipePoint(0,y + 2);
  
  GB.wipePoint(7,y);
  GB.wipePoint(7,y + 1);
  GB.wipePoint(7,y + 2);
}
