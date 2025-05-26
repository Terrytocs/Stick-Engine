('use strict');

import Vec2 from "Vec2.js";
import RigidBody from "RigidBody.js";
import Draw from "Draw.js";

export default class Rect extends RigidBody{
  constructor(pos,size){
    super(pos);
    this.size=size;
    this.boundRadius=(Math.sqrt((size.x*size.x)+(size.y*size.y))*0.5);
    
    this.vertices=[
      pos.add(new Vec2(-(size.x*0.5),-(size.y*0.5))),
      pos.add(new Vec2(+(size.x*0.5),-(size.y*0.5))),
      pos.add(new Vec2(+(size.x*0.5),+(size.y*0.5))),
      pos.add(new Vec2(-(size.x*0.5),+(size.y*0.5)))
    ];
    
    this.normals=[
      this.vertices[1].sub(this.vertices[2]).norm,
      this.vertices[2].sub(this.vertices[3]).norm,
      this.vertices[3].sub(this.vertices[0]).norm,
      this.vertices[0].sub(this.vertices[1]).norm,
    ];
  }
  checkCollision(otherShape) {
    var collisionInfo;
    if (otherShape.name === "Arc") {
      return this.collidedRectArc(otherShape, collisionInfo)
    } else {
      return this.collidedRectRect(otherShape,collisionInfo)
    }
  }
  collidedRectArc(otherShape,collisionInfo){}
  collidedRectRect(otherShape,collisionInfo){}
  draw(ctx){
    
  }
}