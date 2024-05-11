#include <GameBoy.h>
#include "Blokcks.h"
GameBoy gb;

int x = 2, y = -1;

void setup() {
  gb.begin(8);

}

void loop() {
 makeMove ();
  drawBlock(S_block_1, x,y );
  y++;
  delay(100);
}

void drawBlock(byte arr[4] [4], int x, int y) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1) {
        gb.drawPoint(x + i, y + j);


      }
    }
  }
}

void  makeMove(){
  if(gb.getKey() ==4){
    x--;
  }
  if(gb.getKey() == 5){
    x++;
  }
}
