#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;

int n = 0;

void setup() {
  gb.begin(8);
}

void loop() {
  if(gb.getKey() == 1) n++;
  gb.clearDisplay();
  if(n == 0) drawBlock(I_block_1, 3, 3);
  if(n == 1) drawBlock(L_block_1, 3, 3);
  if(n == 2) drawBlock(J_block_1, 3, 3);
  if(n == 3) drawBlock(S_block_1, 3, 3);
  if(n == 4) drawBlock(Z_block_1, 3, 3);
  if(n == 5) drawBlock(T_block_1, 3, 3);
  if(n == 6) drawBlock(O_block_1, 3, 3);
  delay(100);
}
void drawBlock(byte arr[4][4], int x, int y) {
  for(int i = 0; i < 4; i++){
    for(int j = 0; j < 4; j++){
      if(arr[j][i] == 1){
        gb.drawPoint(x + i, y + j);
      }
    }
  }
}
