  ('use strict');
  
  import RigidBody from "./RigidBody.js";
  import Draw from "./Draw.js";
  
  export default class Arc extends RigidBody{
    constructor(pos,opt={}){
      super(pos);
      this.rad=opt.rad;
      this.boundRadius=opt.rad;
    }
    checkCollision(otherShape) {
      var collisionInfo;
      if (otherShape.name === "Arc") {
        return this.collidedArcArc(otherShape,collisionInfo)
      } else {
        return
      }
    }
    collidedArcArc(otherShape,collisionInfo){
      
    }
    draw(ctx,{fill=false,stroke=false}){
      
    }
  }