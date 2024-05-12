#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;

int x = 2, y = -1;
int rot = 0;

void setup() {
  gb.begin(8);
  randomSeed(analogRead(0) + analogRead(5));
  CreateBlock(random(7));
}

void loop() {
  makeMove();
  if (gb.checkBlockCollision(gb.block[rot], x,  y)) {
  gb.memBlock(gb.block[rot], x, y);
  }else{
    y++;
  }
  gb.drawDisplay();
  drawBlock(gb.block[rot], x, y);
  delay(100);

}

void drawBlock(byte arr [4][4], int x, int y) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1) {
        gb.drawPoint(x + i, y + j);
      }
    }
  }
}

void makeMove() {
  if (gb.getKey() == 4  && gb.checkBlockCollision(gb.block[rot], x - 1, y)) {
  x--;
}
if (gb.getKey() == 5 && gb.checkBlockCollision(gb.block[rot], x + 1, y)) {
  x++;
}
}

void CreateBlock(int num) {
  x = 2, y = -1, rot = random(0, 4);
  if (num == 0) gb.generateBlock(gb.block, I_Block_1, I_Block_2, I_Block_3, I_Block_4);
  if (num == 1) gb.generateBlock(gb.block, Z_Block_1, Z_Block_2, Z_Block_3, Z_Block_4);
  if (num == 2) gb.generateBlock(gb.block, S_Block_1, S_Block_2, S_Block_3, S_Block_4);
  if (num == 3) gb.generateBlock(gb.block, L_Block_1, L_Block_2, L_Block_3, L_Block_4);
  if (num == 4) gb.generateBlock(gb.block, J_Block_1, J_Block_2, J_Block_3, J_Block_4);
  if (num == 5) gb.generateBlock(gb.block, T_Block_1, T_Block_2, T_Block_3, T_Block_4);
  if (num == 6) gb.generateBlock(gb.block, O_Block_1, O_Block_2, O_Block_3, O_Block_4);

}
