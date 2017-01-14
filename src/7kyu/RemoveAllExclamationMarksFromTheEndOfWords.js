/*
Description:
Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/
function remove(s){
  
  var result = "";
  var str = s.split(" ");
  
  for(var i=0; i<str.length; i++){
    while(str[i].endsWith("!")){
      str[i] = str[i].substring(0, str[i].length-1);
    }
    result = result.concat(str[i], " "); 
    
  }
  return result.trim();
  
}

function remove2(s){
  return s.replace(/\b!+/g, '');  
}

function remove3(s){
  return s.split(' ').map(function(element){
    return element.replace(/!*$/g,'');
  }).join(' ');
  
}

console.log("Basic tests");
assertEquals(remove("Hi!") , "Hi");
assertEquals(remove("Hi!!!") ,"Hi");
assertEquals(remove("!Hi") , "!Hi");
assertEquals(remove3("Hi! Hi!") , "Hi Hi");
assertEquals(remove3("H!i! H!i!") , "H!i H!i");
assertEquals(remove2("!!!Hi !!hi!!! !hi") , "!!!Hi !!hi !hi");


function assertEquals(actual, expected){
	console.log(actual===expected);
}