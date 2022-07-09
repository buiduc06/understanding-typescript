function logCreate(additionalParam: string): any {
  return function actualDecorator(Class: any) {
    return function (...args: any) {
      console.log(
        "Object created with args: ",
        args,
        "; and receive another params: ",
        additionalParam
      );
      return new Class(...args);
    };
  };
}

@logCreate("custom")
class Animal<T> {
  constructor(private footCount: T) {}

  getFootCount() {
    return this.footCount;
  }
}

const dog = new Animal(4);
// => Object created with args: 4; and receive another params: custom
