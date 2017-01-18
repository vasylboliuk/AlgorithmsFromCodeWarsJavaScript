/*
Is Prime
Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.
Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Example

isPrime(5)
=> true
Assumptions

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers.

*/
function isPrime(num) {
  var count = 0; 
  if(num==0 || num==1 || num<0) return false;
  for(var i=2; i<=10; i++){
    if(num%i==0){
      count++;
    }
  }
  if(count==1 || (count==0 && num/num==1)) return true;
  else return false;
 }

 //Other Solutions (In my opinion is not good performance)
function isPrime2(num) {
  if(num < 2) return false;
  for(var i = 2; i <= num / 2; i++) 
    if(num % i == 0) return false;
  return true;
}

console.log("Basic tests");
expect(isPrime(0) === false, '0 is not prime');
expect(isPrime(1) === false, '1 is not prime');
expect(isPrime(2) === true, '2 is prime');
expect(isPrime(3) === true, '3 is prime');
expect(isPrime(4) === false, '4 is not prime');
expect(isPrime(5) === true, '5 is prime');
expect(isPrime(6) === false, '6 is not prime');
expect(isPrime(7) === true, '7 is prime');
expect(isPrime(8) === false, '8 is not prime');
expect(isPrime(9) === false, '9 is not prime');
expect(isPrime(41) === true, '41 is prime');
expect(isPrime(45) === false, '45 is not prime');
expect(isPrime(73) === true, '73 is prime');
expect(isPrime(75) === false, '75 is not prime');
expect(isPrime(5099) === true, '5099 is prime');


function expect(result, message){
	console.log(result, message);
}