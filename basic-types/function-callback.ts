function sum(a, b, result: (sum) => void): void {
  result(a + b);
}

let a = prompt("a") ?? "0";
let b = prompt("b") ?? "0";

sum(+a, +b, (sum) => {
  console.log(`${a} + ${b} = ` + sum);
});
