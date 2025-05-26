('use strict');

export default class Draw{
  arc(ctx,opt={}){
    ctx.beginPath();
    ctx.fillStyle=opt.fillStyle??"black";
    ctx.strokeStyle=opt.strokeStyle??"black";
    ctx.arc(opt.x,opt.y,opt.r,0,(Math.PI*2));
    opt.fill&&ctx.fill();
    opt.stroke&&ctx.stroke();
  }
  line(ctx,opt={}){
    ctx.beginPath();
    ctx.beginPath();
    ctx.fillStyle = opt.fillStyle ?? "black";
    ctx.strokeStyle = opt.strokeStyle??"black";
    ctx.moveTo(opt.points[0].x,opt.points[0].y);
    for(var i=1;i<opt.points.length;++i){
      ctx.lineTo(opt.ppints[i].x,opt.points[i].y);
    }
    opt.fill && ctx.fill();
    opt.stroke && ctx.stroke();
  }
  text(ctx,opt={}){
    ctx.fillStyle = opt.fillStyle ?? "black";
    ctx.strokeStyle = opt.strokeStyle ?? "black";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.text(opt.text,opt.x,opt.y);
    opt.fill && ctx.fill();
    opt.stroke && ctx.stroke();
  }
}