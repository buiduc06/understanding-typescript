/**
 * https://www.typescriptlang.org/docs/handbook/decorators.html
 */
interface Parameter {
  selector: string;
  template: string;
}

function component(parameter: Parameter) {
  return function (constructor: any) {
    const appHtml = <HTMLElement>document.getElementById(parameter.selector);

    const cls = new constructor();
    /**
     * replace variable in template
     */
    let templete_replace = parameter.template;
    templete_replace = templete_replace.replace(
      new RegExp(`{{title}}`),
      cls.title
    );

    templete_replace = templete_replace.replace(
      new RegExp(`{{domain}}`),
      cls.domain
    );
    /** put content after replace variable to selector*/
    appHtml.insertAdjacentHTML("beforeend", templete_replace);
  };
}

@component({
  selector: "app",
  template: `
      <h1>{{title}}</h1>
      <h2>{{domain}}</h2>
    `,
})
class AppComponent {
  title: string = "React & Nodejs application";

  domain: string = "damcuoi.vn";

  constructor() {
    console.log("AppComponent init " + this.title);
  }
}
