#include <GameBoy.h>
#include "Blocks.h"
GameBoy GB;

int paddleX = 3;
int paddleY = 14;

void setup() {
  GB.begin(8);
}

void loop() {
  makePaddle();
  GB.clearDisplay();
  drawPaddle(paddle,paddleX,paddleY);
  delay(200);

}

void drawPaddle(byte arr[3],int x,int y){
  for(int i = 0;i < 3; i++){
    if(arr[i] == 1){
      GB.drawPoint(x + i,y);
    }
  }
}

void makePaddle(){
  if(GB.getKey() == 4 && paddleX > 0){
    paddleX--;
  }
  if(GB.getKey() == 5 && paddleX < 5){
    paddleX++;
  }
}
