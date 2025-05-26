('use strict');

import Vec2 from "Vec2.js";

class Entity{
  constructor(pos){
    this.pos=pos;
    this.oldPos=pos;
  }
  update(time){
    var vel,newPos;
    vel=this.pos.sub(this.oldPos);
    newPos=this.pos.add(vel);
    this.oldPos=pos;
    this.pos=newPos;
  }
}