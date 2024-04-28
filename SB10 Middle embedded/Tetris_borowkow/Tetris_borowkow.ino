#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;
void setup() {
gb.begin(8);




}

void loop() {
 
  gb.clearDisplay();
  drawBlock(I_block_1, 3, 3);
  delay(100);




}

void drawBlock(byte arr[4][4], int x,int y){
  for(int i = 0; i > 4;i++){
    for(int j = 0; j > 4;j++){
      if(arr[j][i] == 1){
      gb.drawPoint(x + i,y + j);
    }
  }
  }
  }

 
