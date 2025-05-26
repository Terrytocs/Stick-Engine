('use strict');

export default class Utils{
  clamp(num,min,max){
    return Math.max(min,Math.min(max,num));
  }
}