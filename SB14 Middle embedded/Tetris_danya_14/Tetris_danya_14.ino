#include <GameBoy.h>
GameBoy gb;
#include "Blocks.h"

void setup() {
  gb.begin(8);


}

void loop() {
  drawBlock(I_block_1, 3, 0);
  delay(100);
  gb.clearDisplay();

  drawBlock(I_block_2, 3, 0);
  delay(100);
  gb.clearDisplay();

  drawBlock(I_block_3, 3, 0);
  delay(100);
  gb.clearDisplay();

  drawBlock(I_block_4, 3, 0);
  delay(100);
  gb.clearDisplay();
}

void drawBlock(byte arr[4][4], int x, int y){
  for(int i = 0; i < 4; i++){
    for(int j = 0; j < 4; j++){
      if(arr[j][i] == 1){
        gb.drawPoint(x + i, y + j);
      }
    }
  }
}
