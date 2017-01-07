/*
Description:
Given a string of numbers, you should replace any number below 5 with '0' and any number 5 and above with '1'. Return the resulting string.
*/
function fakeBin(x){
  var str = x.toString();
  var result = "";
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) < 5){
      result = result + 0;
    }else{
    result = result + 1;}
  }
  return result;  
}

//Solution from codewars
function fakeBin2(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

console.log("Basic tests");
console.log(fakeBin('45385593107843568'));

console.log(fakeBin('45385593107843568')==='01011110001100111');
console.log(fakeBin('509321967506747')==='101000111101101');
console.log(fakeBin('366058562030849490134388085')==='011011110000101010000011011');

