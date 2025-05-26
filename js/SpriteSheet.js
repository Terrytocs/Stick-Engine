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
    
    ctx.drawImage(
      this.img,
      src.x,
      src.y,
      srcSize.x,
      srcSize.y,
      dest.x,
      dest.y,
      destSize.x,
      destSize.y
    );

    this.sprite.set(id,buffer);
  }
  draw(ctx,id,pos){
    var img=this.sprite.get(id);

    ctx.drawImage(
      img,
      pos.x,
      pos.y
    );
  }
}
