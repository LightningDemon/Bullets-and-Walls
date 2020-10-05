function istouching(a,b){
    if(a.x-b.x<=a.width/2+b.width/2 && 
      b.x-a.x<=a.width/2+b.width/2 &&
      a.y-b.y<=a.width/2+b.width/2 && 
     b.y-a.y<=a.width/2+b.width/2)
    {
     return true ;
    }
    else{
     return false;
    }
  }