#include <GameBoy.h>
GameBoy gb;

void setup() {
  gb.begin(5);
  PlayerCar(5, 12);
  randomSeed(analogRead(0));
}

void loop() {
  mainRacing(100);
}
void enemyCar(int x, int y){
  gb.drawPoint(x, y);
  gb.drawPoint(x, y - 1);
  gb.drawPoint(x - 1, y - 1);
  gb.drawPoint(x + 1, y - 1);
  gb.drawPoint(x, y - 2);
  gb.drawPoint(x - 1, y - 3);
  gb.drawPoint(x + 1, y - 3);
}

void PlayerCar(int x, int y){
  gb.drawPoint(x, y);
  gb.drawPoint(x, y + 1);
  gb.drawPoint(x - 1, y + 1);
  gb.drawPoint(x + 1, y + 1);
  gb.drawPoint(x, y + 2);
  gb.drawPoint(x - 1, y + 3);
  gb.drawPoint(x + 1, y + 3);
}

void wipeEnemyCar(int x, int y){
  gb.wipePoint(x, y);
  gb.wipePoint(x, y - 1);
  gb.wipePoint(x - 1, y - 1);
  gb.wipePoint(x + 1, y - 1);
  gb.wipePoint(x, y - 2);
  gb.wipePoint(x - 1, y - 3);
  gb.wipePoint(x + 1, y - 3);
}

void wipePlayerCar(int x, int y){
  gb.wipePoint(x, y);
  gb.wipePoint(x, y + 1);
  gb.wipePoint(x - 1, y + 1);
  gb.wipePoint(x + 1, y + 1);
  gb.wipePoint(x, y + 2);
  gb.wipePoint(x - 1, y + 3);
  gb.wipePoint(x + 1, y + 3);
}

void control(){
  if(gb.getKey() > 0){
    if(gb.getKey() == 4){
      wipePlayerCar(5,12);
      PlayerCar(2,12);
    }
    if(gb.getKey() == 5){
      wipePlayerCar(2,12);
      PlayerCar(5,12);
    }
  }
}

int enemy_x = 2;
void mainRacing(int enemySpeed){
  enemy_x = random(10);
  if (enemy_x > 5){
    enemy_x = 5;
  }else{
    enemy_x = 2;
  }
  for(int enemy_y = 0; enemy_y < 16; enemy_y++){
    creatLine(enemy_y);
    creatLine(enemy_y + 6);
    creatLine(enemy_y + 12);
    creatLine(enemy_y + 18);
    
    creatLine(enemy_y - 6);
    creatLine(enemy_y - 12);
    creatLine(enemy_y - 18);
    enemyCar(enemy_x, enemy_y);
    
    control();
    delay(enemySpeed);
    wipeEnemyCar(enemy_x, enemy_y);
    clearLine(enemy_y);
    clearLine(enemy_y + 6);
    clearLine(enemy_y + 12);
    clearLine(enemy_y + 18);

    clearLine(enemy_y - 6);
    clearLine(enemy_y - 12);
    clearLine(enemy_y - 18);
  }
}
void creatLine(int y){
  gb.drawPoint(0, y);
  gb.drawPoint(0, y + 1);
  gb.drawPoint(0, y + 2);
  
  gb.drawPoint(7, y);
  gb.drawPoint(7, y + 1);
  gb.drawPoint(7, y + 2);
}
void clearLine(int y){
  gb.wipePoint(0, y);
  gb.wipePoint(0, y + 1);
  gb.wipePoint(0, y + 2);
  
  gb.wipePoint(7, y);
  gb.wipePoint(7, y + 1);
  gb.wipePoint(7, y + 2);
}
