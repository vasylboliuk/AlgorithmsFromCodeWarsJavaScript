/*
    Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string

    Some examples:

isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;
*/
function isOpposite(s1,s2){
  var count = 0;
  if(s1.length!=s2.length || s1===""){
    return false;
  }
  for(var i=0; i<s1.length; i++){
    if(s1.charAt(i)!=s2.charAt(i) && (s1.charAt(i)===s2.charAt(i).toUpperCase() || 
        s1.charAt(i).toUpperCase()===s2.charAt(i))){
       count++;
     }
   }
   if(count==s1.length){
     return true;
   }else{
     return false;
   }
}

console.log("Basic tests");
testing(isOpposite("ab", "AB"), true);
testing(isOpposite("aB","Ab"), true);
testing(isOpposite("aBcd","AbCD") , true);
testing(isOpposite("aBcde","AbCD") , false);
testing(isOpposite("AB","Ab") , false);
testing(isOpposite("","") , false);

function testing(actual, expected){
	console.log(actual===expected);
}

