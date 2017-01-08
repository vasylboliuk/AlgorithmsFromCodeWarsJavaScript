/*
Description:
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/
function remove(s){
  var lastChar = s.charAt(s.length - 1);
  if(lastChar==='!'){
    return s.slice(0, s.length-1);
  }
  return s;
}

function remove2(s){
  return s = s.replace(/!$/g, '');
}

console.log("Basic tests");
testing(remove("Hi!") , "Hi")
testing(remove("Hi!!!") ,"Hi!!")
testing(remove("!Hi") , "!Hi")
testing(remove("!Hi!") , "!Hi")
testing(remove("Hi! Hi!") , "Hi! Hi")
testing(remove("Hi") , "Hi")

function testing(actual, expected){
	console.log(actual===expected);
}
