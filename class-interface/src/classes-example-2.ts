class Company {
  employees: Employee[] = [];

  constructor(private name: string) {}

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(`-------- Company Name: ${this.name} ---------`);
    console.log(`-------- Employees List ---------`);
    for (let employee of this.employees) {
      console.log(
        `
         name: ${employee.getName()}
         age: ${employee.getAge()}
         job: ${employee.getJob()}
         salary: ${employee.getSalary()}
         salary after vat(10%): ${employee.getSalaryAfterVat()}
         `
      );
    }
  }
}

class Employee {
  protected job: string = "Unknow";

  constructor(
    private name: string,
    private age: number,
    private salary: number = 0
  ) {}

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getJob() {
    return this.job;
  }

  getSalary() {
    return this.salary;
  }

  getSalaryAfterVat() {
    return this.salary - Tool.calcVat(this.salary, AppConst.VAT_RATE);
  }

  get title() {
    return this.job;
  }

  set title(value: string) {
    this.job = value;
  }
}

enum AppConst {
  VAT_RATE = 0.1,
}

class Tool {
  static calcVat(salary: number, vatRate: number) {
    return salary * vatRate;
  }
}

class Developer extends Employee {
  protected job: string = "Code";
}

class Designer extends Employee {
  protected job: string = "Design";
}

class BusinessAnalysis extends Employee {
  protected job: string = "Business Analyst";
}

let company = new Company("NTQ");
company.addEmployee(new Developer("duc.bui", 25, 100));
company.addEmployee(new Designer("a.nguyen", 25, 200));
company.addEmployee(new BusinessAnalysis("b.nguyen", 30, 300));

const baManager = new BusinessAnalysis("d.nguyen", 30, 400);
baManager.title = "Manager";
company.addEmployee(baManager);

company.printEmployeesInformation();
