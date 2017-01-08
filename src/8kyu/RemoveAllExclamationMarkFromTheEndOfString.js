/*
Description:
Remove all exclamation marks from the end of sentence.

Examples:
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/
function remove(s){
  while(s.charAt(s.length - 1)==='!'){
    s = s.replace(/!$/g, '');
  }
  return s;
}

function remove2(s){
  return s.replace(/!+$/, '');
}

console.log("Basic tests");
testing(remove("Hi!") , "Hi")
testing(remove("Hi!!!") ,"Hi")
testing(remove("!Hi") , "!Hi")
testing(remove("!Hi!") , "!Hi")
testing(remove("Hi! Hi!") , "Hi! Hi")
testing(remove("Hi") , "Hi")

function testing(actual, expected){
	console.log(actual===expected);
}