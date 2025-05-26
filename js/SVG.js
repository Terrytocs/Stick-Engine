('use strict');

class CTX{
  constructor(svg){
    this.svg=svg;
    this.elems=[];
  }
  arc(){}
  rect(){}
  line(){}
  text(){}
  fill(){}
  stroke(){}
}

export default class SVG{
  constructor(id){
    this.baseElement=document.getElementById(id);
  }
  setSize(w,h){
    this.baseElement.size=new Vec2(w,h);
    this.baseElement.style.width=`${w}px`;
    this.baseElement.style.height=`${h}px`;
    this.baseElement.setAttribute('viewBox',`0 0 ${w} ${h}`);
    return this;
  }
  getContext=()=>{
      return new CTX(this.baseElement);
  }
}