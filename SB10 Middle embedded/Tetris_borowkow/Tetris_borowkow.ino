#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;

int x = 2;
int y = -1;

void setup() {
  gb.begin(8);




}

void loop() {

  makeMove();
  drawBlock(S_block_1, x, y);
  y++;
  delay(100);





}

void drawBlock(byte arr[4][4], int x, int y) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1) {
        gb.drawPoint(x + i, y + j);
      }
    }
  }
}




void makeMove() {
  if (gb.getKey() == 4) {
    x --;
  }
  if (gb.getKey() == 5) {
    x++;
  }
}



voidcreateBlock(int num){
  if(num == 0) gb.generateBlock(gb.generateBlock, I_block_1, I_block_2,  I_block_3 , I_block_4);
  if(num == 1) gb.generateBlock(gb.generateBlock, Z_block_1, Z_block_2,  Z_block_3 , Z_block_4);
  if(num == 2) gb.generateBlock(gb.generateBlock, S_block_1, S_block_2,  S_block_3 , S_block_4);
  if(num == 3) gb.generateBlock(gb.generateBlock, L_block_1, L_block_2,  L_block_3 , L_block_4);
  if(num == 4) gb.generateBlock(gb.generateBlock, J_block_1, J_block_2,  J_block_3 , J_block_4);
  if(num == 5) gb.generateBlock(gb.generateBlock, T_block_1, T_block_2,  T_block_3 , T_block_4);
  if(num == 6) gb.generateBlock(gb.generateBlock, O_block_1, O_block_2,  O_block_3 , O_block_4);
}
