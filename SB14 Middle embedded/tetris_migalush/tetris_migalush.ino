#include <GameBoy.h>
#include "blocks.h"
GameBoy GB;
int x = 2,y = -1;
int rot = 0;

void setup() {
  GB.begin(8);
  randomSeed(analogRead(0) + analogRead(5));
  createBlock(random(7));

}

void loop() {
  MakeMove();
  if(GB.checkBlockCollision(GB.block[rot],x,y)){
   GB.memBlock(GB.block[rot],x,y);
   createBlock(random(7));
  }else{
    y++;
  }
  GB.clearDisplay();
  drawBlock(GB.block[rot],x,y);
  delay(100);
}

void drawBlock(byte arr[4][4], int x, int y) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1) {
        GB.drawPoint(x + i, y + j);
      }
    }
  }
}

void MakeMove(){
  if(GB.getKey() == 4 && GB.checkBlockCollision(GB.block[rot], x - 1,y)){
    x--;
  }
  if(GB.getKey() == 5 && GB.checkBlockCollision(GB.block[rot], x + 1,y)){
    x++;
  }
}

void createBlock(int num){
  x = 2, y = -1, rot = random(0,4);
  if(num == 0) GB.generateBlock(GB.block, I_block_1,I_block_2,I_block_3,I_block_4);
  if(num == 1) GB.generateBlock(GB.block, Z_block_1,Z_block_2,Z_block_3,Z_block_4);
  if(num == 2) GB.generateBlock(GB.block, S_block_1,S_block_2,S_block_3,S_block_4);
  if(num == 3) GB.generateBlock(GB.block, L_block_1,I_block_2,L_block_3,L_block_4);
  if(num == 4) GB.generateBlock(GB.block, J_block_1,J_block_2,J_block_3,J_block_4);
  if(num == 5) GB.generateBlock(GB.block, T_block_1,T_block_2,T_block_3,T_block_4);
  if(num == 6) GB.generateBlock(GB.block, O_block_1,O_block_2,O_block_3,O_block_4);
}
