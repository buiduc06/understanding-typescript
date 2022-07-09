function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

let result3 = merge({ name: "duc.bui", phone: "0363303333" }, { age: 22 });

console.log(result3.age);
