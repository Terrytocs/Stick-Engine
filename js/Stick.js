('use strict');

import Vec2 from './Vec2.js';

export default class Stick{
  constructor(a,b){
    this.a=a;
    this.b=b;
    this.len=a.sub(b).mag;
  }
  stick({a=true,b=true}={}){
    var i,dir,currLen,delta,halfDelta,norm;
    dir=this.a.sub(this.b);
    currLen=dir.mag;
    norm=dir.norm;
    delta=currLen-this.len;
    halfDelta=(delta*0.5);
    
    if(!a){
      this.b=this.b.add(norm.scale(delta));
    }else if(!b){
      this.a=this.a.add(norm.scale(-delta));
    }else{
      this.a=this.a.add(norm.scale(-halfDelta));
      this.b=this.b.add(norm.scale(halfDelta));
    }
  }
}