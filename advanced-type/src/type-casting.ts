/**
 * Option 1: use as
 */
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

/**
 * option 2: use <>
 */
let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);

/**
 * systax:
 * let a: typeA;
 * let b = <typeB>a;
 */
