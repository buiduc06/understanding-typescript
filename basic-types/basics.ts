function add(num1: number, num2: number, showResult: boolean, pharse: string) {
  let result = num1 + num2;

  if (showResult) {
    return pharse + result;
  }
}

const number1 = 1;
const number2 = 3.5;
const result = add(number1, number2, true, "result is: ");

console.log(result);
