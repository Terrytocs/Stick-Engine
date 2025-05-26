('use strict');

//Use for collision not movement
import Vec2 from "Vec2.js";

export default class RigidBody{
  constructor(pos){
    this.pos=pos;
    this.oldPos=pos;
    this.boundRadius=0;
    this.name=this.constructor.name;
    this.angle=(Math.PI*1.5);
    this.velocity=new Vec2(0,0);
  }
  boundRadiusCollision(otherShape){
    var dist,radSum;
    dist=this.pos.sub(otherShape.pos).mag;
    radSum=(this.boundRadius+otherShape.boundRadius);
    if(radSum>dist){
      return false;
    }
    return true;
  }
}