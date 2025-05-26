('use strict');

import Vec2 from "Vec2.js";

export default class CollisionInfo{
  constructor(){
    this.depth=0;
    this.normal=new Vec2(0,0);
    this.start=new Vec2(0,0);
    this.end=this.start.add(this.normal.scale(this.depth));
  }
  setNormal(n){
    this.normal=n;
  }
  getNormal(){
    return this.normal;
  }
  setStart(s){
    this.start=s;
  }
  setInfo(d,n,s){
    this.depth=d;
    this.normal=n;
    this.start=s;
    this.end=this.start.add(this.normal.scale(depth));
  }
}
