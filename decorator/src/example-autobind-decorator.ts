function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originMethod = descriptor.value;
  const adjDecorator: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get(): any {
      const boundFn = originMethod.bind(this);
      return boundFn;
    },
  };

  return adjDecorator;
}

class Printer {
  title: string = "this works";

  @Autobind
  showMessage() {
    console.log(this.title);
  }
}
let printer = new Printer();
let btn = <HTMLElement>document.getElementById("js--btn")!;
btn.addEventListener("click", printer.showMessage);
