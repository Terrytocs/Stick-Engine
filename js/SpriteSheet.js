('use strict');

export default class SpriteSheet{
  constructor(img){
    this.img=img;
    this.sprite=new Map();
  }
  setSpriteId(id,src,srcSize,dest,destSize){
    var buffer,ctx;
    buffer=document.createElement('canvas');
    buffer.width=destSize.x;
    buffer.height=destSize.y;
    ctx=buffer.getContext('2d');
    
    ctx.drawImage
  }
}