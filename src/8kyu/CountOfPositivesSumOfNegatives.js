/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

    C#/Java: new int[] {} / new int[0];
    C++: std::vector<int>();
    JavaScript/CoffeeScript/PHP/Haskell: [];

ATTENTION!

The passed array should NOT be changed. Read more here.
For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].
*/
function countPositivesSumNegatives(input) {
    if(input===null || input.length<1) return [];
        var count = 0;
        var sum = 0;
        for(var i=0; i<input.length; i++){
          if(input[i]>0) count++;
          if(input[i]<0) sum=sum+input[i];
        }
      return [count, sum]; 
}

console.log("Basic tests");
var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var actual = countPositivesSumNegatives(testData);
var expected = [10, -65];
testing(actual , expected);

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];
testing(actual , expected);

function testing(actual, expected){
	console.log(actual[0]===expected[0] && actual[1]===expected[1]);
}

