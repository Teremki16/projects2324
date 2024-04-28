#include <GameBoy.h>
#include "Bloks.h"
GameBoy gb;



void setup() {
 gb.begin(8);

}
void loop(){
  gb.clearDisplay();
  drawBlock(I_block_1, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(I_block_2, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(I_block_3, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(I_block_4, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(L_block_1, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(L_block_2, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(L_block_3, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(L_block_4, 3, 3);
  gb.clearDisplay();
  drawBlock(J_block_1, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(J_block_2, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(J_block_3, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(J_block_4, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(Z_block_1, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(Z_block_2, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(Z_block_3, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(Z_block_4, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(S_block_1, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(S_block_2, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(S_block_3, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(S_block_4, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(T_block_1, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(T_block_2, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(T_block_3, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(T_block_4, 3, 3);
  delay(100);
   gb.clearDisplay();
  drawBlock(O_block_1, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(O_block_2, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(O_block_3, 3, 3);
  delay(100);
  gb.clearDisplay();
  drawBlock(O_block_4, 3, 3);
  delay(100);
}
void drawBlock( byte arr[4][4], int x,int y){
  for(int i = 0; i < 4; i++){
  for(int j = 0; j < 4; j++){
   if(arr[j][i] == 1){
   gb.drawPoint(x + i, y + j);  
  }
 }
}

}
