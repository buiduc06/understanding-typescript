const person: {
  name: string;
  age: number;
  detail: {
    first_name: string;
    middle_name: string;
    last_name: string;
    phone: string;
    married: boolean;
  };
  hobbies: string[];
} = {
  name: "duc.bui",
  age: 24,
  detail: {
    first_name: "duc",
    middle_name: "ngoc",
    last_name: "bui",
    phone: "0363303338",
    married: true,
  },
  hobbies: ["game", "study"],
};

for (const hobby of person.hobbies) {
  console.log(hobby);
}
console.log(person);
