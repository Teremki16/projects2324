#include <GameBoy.h>
GameBoy gb;
int player_x = 2;
int player_y = 12;

void setup()
{
  gb.begin(8);
  playerCar(2, 12);
  randomSeed(analogRead(0));
}

void loop()
{
  mainRacing(100);
}

int enemy_x = 2;
void mainRacing(int speed)
{
  enemy_x = random(0, 10);
  if (enemy_x > 5)
  {
    enemy_x = 2;
  }
  else
  {
    enemy_x = 5;
  }
  for (int enemy_y = 0; enemy_y < 16; enemy_y++)
  {
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
      gb.clearDisplay();
      //     gb.sound(COLLISION);
      return;
      if (enemy_y > 12) {
        //        gb.sound(SCORE);
      }
    }
    control();
    delay(speed);
    clearEnemyCar(enemy_x, enemy_y);
    clearLine(enemy_y);
    clearLine(enemy_y + 5);
    clearLine(enemy_y + 10);
    clearLine(enemy_y + 15);
    clearLine(enemy_y - 5);
    clearLine(enemy_y - 10);
    clearLine(enemy_y - 15);
  }
}
void enemyCar(int x, int y)
{
  gb.drawPoint(x, y);
  gb.drawPoint(x, y - 1);
  gb.drawPoint(x - 1, y - 1);
  gb.drawPoint(x + 1, y - 1);
  gb.drawPoint(x, y - 2);
  gb.drawPoint(x - 1, y - 3);
  gb.drawPoint(x + 1, y - 3);
}

void playerCar(int x, int y)
{
  gb.drawPoint(x, y);
  gb.drawPoint(x, y + 1);
  gb.drawPoint(x - 1, y + 1);
  gb.drawPoint(x + 1, y + 1);
  gb.drawPoint(x, y + 2);
  gb.drawPoint(x - 1, y + 3);
  gb.drawPoint(x + 1, y + 3);
}

void clearEnemyCar(int x, int y)
{
  gb.wipePoint(x, y);
  gb.wipePoint(x, y - 1);
  gb.wipePoint(x - 1, y - 1);
  gb.wipePoint(x + 1, y - 1);
  gb.wipePoint(x, y - 2);
  gb.wipePoint(x - 1, y - 3);
  gb.wipePoint(x + 1, y - 3);
}

void clearPlayerCar(int x, int y)
{
  gb.wipePoint(x, y);
  gb.wipePoint(x, y + 1);
  gb.wipePoint(x - 1, y + 1);
  gb.wipePoint(x + 1, y + 1);
  gb.wipePoint(x, y + 2);
  gb.wipePoint(x - 1, y + 3);
  gb.wipePoint(x + 1, y + 3);
}

void createLine(int y)
{
  gb.drawPoint(0, y);
  gb.drawPoint(0, y + 1);
  gb.drawPoint(0, y + 2);

  gb.drawPoint(7, y);
  gb.drawPoint(7, y + 1);
  gb.drawPoint(7, y + 2);
}

void clearLine(int y)
{
  gb.wipePoint(0, y);
  gb.wipePoint(0, y + 1);
  gb.wipePoint(0, y + 2);

  gb.wipePoint(7, y);
  gb.wipePoint(7, y + 1);
  gb.wipePoint(7, y + 2);
}

void control()
{
  if (gb.getKey() == 4)
  {
    clearPlayerCar(5, 12);
    player_x = 2;

  }
  else if (gb.getKey() == 5)
  {
    clearPlayerCar(2, 12);
    player_x = 5;
  }
  playerCar(player_x, player_y);
}

bool Collision(int px, int py, int ex, int ey) {
  if (px == ex &&  py == ey) {
    return true;
  }
  if (px == ex && ey > 12) {
    return false;
  }
}
