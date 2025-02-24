const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  let total=0;
	for(let i=0;i<=arr.length-1;i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let prod = 1;
  for(let i=0;i<=arr.length-1;i++){
    prod *= arr[i];
  }
  return prod;
};

const power = function(num1,num2) {
  let result=1;
	for (let i=0;i<=num2-1;i++){
    result*=num1;
  }
  return result
};

const factorial = function(num) {
  if (num >1){
    return num * factorial(num-1)
  }
  else{
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
