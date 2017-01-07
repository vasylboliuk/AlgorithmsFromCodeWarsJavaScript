function basicOp(operation, value1, value2)
{
  var result;
  
  switch(operation){
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    default:
      result;
  }
  return result;
}

console.log("Basic tests\n");
console.log(basicOp('+', 4, 7)===11);
console.log(basicOp('-', 15, 18)===-3);
console.log(basicOp('*', 5, 5)===25);
console.log(basicOp('/', 49, 7)===7);