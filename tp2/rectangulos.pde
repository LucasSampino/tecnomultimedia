void rectangulos(){
push();
  float cua=1.4;
  float antcua = 0;
  float medcua= cua/2;
  translate(600,200);
  for(int I=0; I<16; I++){
    rect(-200,(I*antcua),400,(I*cua));
    antcua=cua;
    cua=cua+medcua;
    if((I)%2==0){
    fill(0);
    }else{
      fill(255);
    }
  } 
  for(int I=0; I<16; I++){
    rect(-200,-(I*antcua),400,-(I*cua));
    antcua=cua;
    cua=cua+medcua;
    if((I)%2==0){
    fill(0);
    }else{
      fill(255);
    }
  }
  pop();
}
