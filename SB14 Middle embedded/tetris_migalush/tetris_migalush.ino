#include <GameBoy.h>
#include "blocks.h"
GameBoy GB;
int n = 0;

void setup() {
  GB.begin(8);

}

void loop() {
  if(GB.getKey() == 1) n++;
  GB.clearDisplay();
  if(n == 0) drawBlock(I_block_1)
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
