#include <GameBoy.h>
#include "Blocks.h"
GameBoy gb;

void setup() {
  gb.begin(8);
}

void loop() {
  
  gb.clearDisplay();
  drawBlock(I_Block_1, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(I_Block_2, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(I_Block_3, 3, 3);
  delay(100);

  gb.clearDisplay();
  drawBlock(I_Block_4, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(L_Block_1, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(L_Block_2, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(L_Block_3, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(L_Block_4, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(J_Block_1, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(J_Block_2, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(J_Block_3, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(J_Block_4, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(Z_Block_1, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(Z_Block_2, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(Z_Block_3, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(Z_Block_4, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(S_Block_1, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(S_Block_2, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(S_Block_3, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(S_Block_4, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(T_Block_1, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(T_Block_2, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(T_Block_3, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(T_Block_4, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(O_Block_1, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(O_Block_2, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(O_Block_3, 3, 3);
  delay(100);

gb.clearDisplay();
  drawBlock(O_Block_4, 3, 3);
  delay(100);
}
void drawBlock(byte arr [4][4], int x, int y) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1){
      gb.drawPoint(x + i, y + j);
      }
    }
  }
}
