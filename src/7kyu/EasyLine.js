/*
Description:
In the drawing below we have a part of the Pascal's triangle, lines are numbered from zero (top).
We want to calculate the sum of the squares of the binomial coefficients on a given line with a function called easyline (or easyLine or easy-line).
Can you write a program which calculate easyline(n) where n is the line number?
The function will take n (with: n>= 0) as parameter and will return the sum of the squares of the binomial coefficients on line n.
Examples:
easyline(0) => 1
easyline(1) => 2
easyline(4) => 70
easyline(50) => 100891344545564193334812497256

Note:
In Javascript, Coffeescript, Typescript, C++, PHP, C to get around the fact that we have no big integers the function easyLine(n) will in fact return round(log(easyline(n))) and not the easyline(n) of the other languages. So, in Javascript, Coffeescript, Typescript, C++, PHP and C:
easyLine(0) => 0
easyLine(1) => 1
easyLine(4) => 4
easyLine(50) => 67
*/
function easyLine(n) {
    //C=n!/k!(n-k)!
    var sum = 0;
    for(var k=0; k<=n; k++){
    	var c = fac(n)/(fac(k)*fac(n-k));
    	console.log("C:n:"+n+"k:"+k+": " + c);
    	c = c*c;
    	sum=sum+c;
    }
    console.log("sum: " + sum);
    console.log("Math.log: " + Math.round(Math.log(sum)));
    return Math.round(Math.log(sum));
}

function fac(n){
	var fac = 1;
	for(var i=1; i<=n; i++){
    	fac=fac*i;
    }
    return fac;
}

function fac2(n){
	if(n<=1) return 1;
	var fac = n*fac2(n-1);
    return fac;
}

console.log("Basic tests");
console.log(easyLine(4));

console.log(fac(170));
console.log(fac(171));
//console.log(easyLine(4));
//testing(easyLine(4), 4);
//testing(easyLine(7), 8);
//testing(easyLine(13), 16);
//testing(easyLine(17), 22);
//testing(easyLine(19), 24);


function testing(actual, expected){
	console.log(actual===expected);
}