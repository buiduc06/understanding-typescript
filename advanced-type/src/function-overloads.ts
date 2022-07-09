/**
 * hay được gọi là nạp chồng  là tính năng của typescript
 * Kỹ thuật này cho phép sử dụng cùng một tên gọi cho nhiều hàm (có cùng mục đích). Nhưng khác nhau về kiểu dữ liệu tham số hoặc số lượng tham số.
 * https://www.tutorialsteacher.com/typescript/function-overloading
 */

function sum(a: string, b: string): string; //FC.1

function sum(a: number, b: number): number; //FC.2

function sum(a: any, b: any): any {
  return a + b;
}

const result = sum("Hello ", "duc.bui"); // returns "Hello duc.bui"
// result.split(" "); // work, bởi vì đối số của hàm là string nên nhận kiểu tra về của FC.1 (string), vì vậy call dc split
console.log(result);

const result2 = sum(10, 20); // returns 30
// result2.split(" "); // don't work, bởi vì đối số của hàm là number nên nhận kiểu tra về của FC.2 (number), vì vậy KHÔNG call dc split
console.log(result2);
