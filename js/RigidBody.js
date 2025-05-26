('use strict');

//Use for collision not movement
import Vec2 from "Vec2.js";

export default class RigidBody{
  constructor(pos){
    this.pos=pos;
    this.oldPos=pos;
    this.boundRadius=0;
    this.name=this.constructor.name;
    this.ang=(Math.PI*1.5);
    this.oldAng=this.ang;
    this.speed=0;
    this.vel=new Vec2(
      Math.cos(this.ang)*this.speed,
      Math.sin(this.ang)*this.speed
    );
    this.angSpeed=0;
  }
  update(time){
    var vel,newPos;
    vel=this.pos.sub(this.oldPos);
    newPos=this.pos.add(vel).scale(time);
    this.oldPos=this.pos;
    this.pos=newPos;

    this.pos=this.pos.add(this.vel).scale(time);
    

    var angVel,newAng;
    angVel=this.ang-this.oldAng;
    newAng=(this.ang+angVel)*time;
    this.oldAng=this.ang;
    this.ang=newAng;

    this.ang+=this.angSpeed*time;
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
