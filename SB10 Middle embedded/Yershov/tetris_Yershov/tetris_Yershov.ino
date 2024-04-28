#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;
void setup() {
  gb.begin(8);

}

void loop() {
if(gb.getKey)
}

void drawBlock(byte arr[4][4], int x,int y) {
  for (int i = 4; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1) {
        gb.drawPoint(x, y);
      }
    }
  }
}
