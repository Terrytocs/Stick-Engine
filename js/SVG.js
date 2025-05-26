('use strict');

class CTX{
  constructor(svg){
    this.svg=svg;
    this.elems=[];

    this.fillStyle="#0000";
    this.strokeStyle="#0000";

    this.textAlign="center";
    this.textBaseline="middle";
  }
  arc(x,y,r){
    var a=document.createElementNS(this.svg.namespaceURI,"circle");
    a.setAttribute("x",x);
    a.setAttribute("y",y);
    a.setAttribute("r",r);
    a.style=`
      fill:${this.fillStyle},
      stroke:${this.strokeStyle}
    `;
    this.svg.append(a);
    this.elems.push(a);
  }
  rect(x,y,w,h){
    var r=document.createElementNS(this.svg.namespaceURI,"rect");
    r.setAttribute("x",x);
    r.setAttribute("y",y);
    r.setAttribute("width",w);
    r.setAttribute("height",h);
    r.style=`
      fill:${this.fillStyle},
      stroke:${this.strokeStyle}
    `;
    this.svg.append(r);
    this.elems.push(r);
  }
  line(...points){
    var l,points
    l=document.createElementNS(this.svg.namespaceURI,"polyline");
    points="";
    for(var i=0;i<points.length;++i){
      points+=`${pos[i].x},${pos[i].y}`;
    }
    l.setAttribute('points',points);
    l.style=`
      fill:${this.fillStyle};
      stroke:${this.strokeStyle};
    `;
    this.svg.append(l);
    this.elems.push(l);
  }
  text(text,x,y){
    var t,textNode;
    t=document.createElementNS(this.svg.namespaceURI,"text");
    textNode=document.createTextNode(text);
    t.append(textNode);
    t.setAttribute("x",x);
    t.setAttribute("y",y);
    t.style=`
      text-align:${this.textAlign};
      text-anchor:${this.textBaseline};
      fill:${this.fillStyle};
      stroke:${this.strokeStyle};
    `;
    this.svg.append(t);
    this.elems.push(t);
  }
  fill(){
    for(var i=0;i<this.elems.length;++i){
      this.elems[i].style.fill=this.fillStyle;
    }
  }
  stroke(){
    this.elems[i].style.stroke=this.strokeStyle;
  }
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
