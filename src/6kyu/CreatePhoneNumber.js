function createPhoneNumber(numbers){
  var n = numbers;
  var result = '('+ n[0] + n[1] + n[2] + ') '
				+ n[3] + n[4] + n[5] + '-'
				+ n[6] + n[7] + n[8] + n[9];
  return result;
}

//Others
function createPhoneNumber2(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

function createPhoneNumber3(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

console.log("Basic tests");
assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

function assertEquals(actual, expected){
	console.log(actual===expected);
}