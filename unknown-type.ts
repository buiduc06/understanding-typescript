//Gần giống với any, điểm khác biệt là Unknown  khi gắn cho biến sử dụng kiểu dữ liệu cụ thể sẽ bị lỗi
// tối ưu hơn any
let userInput: unknown;
let userName: string;

userInput = "duc.bui";
userName = userInput; // errors

// cách fix
userInput = 5;
userInput = "duc.bui";
if (typeof userInput === "string") {
  userName = userInput; // errors
  console.log(userName);
}
