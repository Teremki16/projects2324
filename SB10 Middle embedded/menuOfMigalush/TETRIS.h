int x = 2,y = -1;
int rot = 0;
int fallSpeed = 100;
int acc = 1;
int scores = 0;
int level = 0;



void drawBlock(byte arr[4][4], int x, int y) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1) {
        GB.drawPoint(x + i, y + j);
      }
    }
  }
}

void MakeMoveTetris(){
  if(GB.getKey() == 4 && !GB.checkBlockCollision(GB.block[rot], x - 1,y)){
    x--;
  }
  if(GB.getKey() == 5 && !GB.checkBlockCollision(GB.block[rot], x + 1,y)){
    x++;
  }
  if(GB.getKey() == 2 && !GB.checkBlockCollision(GB.block[rot + 1], x,y)){
    rot++;
    if(rot > 3) rot = 0;
  }
  if(GB.getKey() == 6){
    acc = 4;
  }else{
    acc = 1;
  }
}

void createBlock(int num){
  x = 2, y = -1, rot = random(0,4);
  if(num == 0) GB.generateBlock(GB.block, I_block_1,I_block_2,I_block_3,I_block_4);
  if(num == 1) GB.generateBlock(GB.block, Z_block_1,Z_block_2,Z_block_3,Z_block_4);
  if(num == 2) GB.generateBlock(GB.block, S_block_1,S_block_2,S_block_3,S_block_4);
  if(num == 3) GB.generateBlock(GB.block, L_block_1,I_block_2,L_block_3,L_block_4);
  if(num == 4) GB.generateBlock(GB.block, J_block_1,J_block_2,J_block_3,J_block_4);
  if(num == 5) GB.generateBlock(GB.block, T_block_1,T_block_2,T_block_3,T_block_4);
  if(num == 6) GB.generateBlock(GB.block, O_block_1,O_block_2,O_block_3,O_block_4);
}

bool loss(){
  if(GB.checkBlockCollision(GB.block[rot],x,0)){
    return true;
  }
  return false;
}

bool win(){
  if(scores >= 20){
    return true;
  }
  return false;
}

void clearMemory(){
  for(int i = 0;i < 16; i++){
    for(int j = 0;j < 8; j++){
      GB.wipePoint(j,i);
    }
  }
}

void TetrisGame() {
  if(loss()){
    Serial.println("you are lost the game :(");
    Serial.println("Score: " + (String)scores);
    drawScore(GB, scores);
    delay(2000);
    clearMemory();
    scores = 0;
    GB.sound(COLLISION);
    GB.testMatrix(10);
  }
  if(win()){
    clearMemory();
    scores = 0;
    level = 0;
    for(int i = 0; i < 8; i++){
      for(int j = 0; j < 16; j++){
        GB.setLed(i,j,WIN[j][i]);
      }
    }
  }
 MakeMoveTetris();
  if(GB.checkBlockCollision(GB.block[rot],x,y + 1)){
   GB.memBlock(GB.block[rot],x,y);
   createBlock(random(7));
   int lines = GB.fullLine();
   if(lines != 0){
    scores += lines;
    level += lines;
    GB.sound(SCORE);
   }
   if(level >= 5){
    acc++;
    level = 0;
   }
  }else{
    y++;
  }
  GB.drawDisplay();
  drawBlock(GB.block[rot],x,y);
  
  delay(fallSpeed / acc);
}
