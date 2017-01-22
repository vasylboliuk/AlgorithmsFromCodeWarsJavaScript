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

My Notes:
Task: Calculate squera of each number
1^2+4^2+6^2+4^2+1^2=1+16+36+16+1=70

C=n!/k!(n-k)!
n=0. 4!/0!(4-0)!=24/24=1*2*3*4/1*1*2*3*4=24/24=1
n=1. 4!/1!(4-1)!=24/1*(6)=1*2*3*4/1*1*2*3=4
n=2. 4!/2!(4-2)!=24/2*(2)=1*2*3*4/1*2*1*2=6
n=3. 4!/3!(4-3)!=24/6*(1)=1*2*3*4/1*2*3*1=4
n=4. 4!/4!(4-4)!=24/24=1*2*3*4/1=1
*/
function easyLine(n){
    
    var res = 1;
    for(var i=1; i<=n; i++){
        res = res * (n+i) / i;
    }
        console.log(res);
        return Math.round(Math.log(res));
}

console.log(easyLine(6));

testing(easyLine(4), 4);
testing(easyLine(7), 8);
testing(easyLine(13), 16);
testing(easyLine(17), 22);
testing(easyLine(19), 24);
console.log(easyLine(250));

function testing(actual, expected){
    console.log(actual===expected);
}