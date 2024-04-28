#include <GameBoy.h>
#include "Blocks.h" 
GameBoy gb;
int i = 0

void setup() {
  gb.begin(8);

}

void loop() {
  if(gb.getKey() == 1)
}

void drawBlock(byte arr[4][4], int x, int y){
  for(int i = 0; i < 4; i++){
    for(int j = 0;j < 4;j++){
      if(arr[j][i] == 1){
        gb.drawPoint(x + i, y + j); 
      }
    }
  }
}
