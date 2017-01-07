/*
Description:
Write function avg which calaculates average of numbers in given list.
*/
function find_average(array) {
  var sum = 0;
  var count = 0;
  for (var i=0; i<array.length; i++){
    sum = sum + array[i];
    count++;
  }
  
  return sum/count;
}

console.log("Basic tests");
console.log(find_average([1,1,1])===1);
console.log(find_average([1,2,3])===2);
console.log(find_average([1,2,3,4])===2.5);

//Solution from Codewars
function find_average2(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}
